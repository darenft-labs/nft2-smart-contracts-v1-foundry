// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

abstract contract Collection1155Base is IERC1155, IERC1155MetadataURI {
    // owner => id => balance
    mapping(address => mapping(uint256 => uint256)) public balanceOf;
    // owner => operator => approved
    mapping(address => mapping(address => bool)) public isApprovedForAll;

    function balanceOfBatch(
        address[] calldata owners,
        uint256[] calldata ids
    ) external view returns (uint256[] memory balances) {
        require(owners.length == ids.length, "owners length != ids length");

        balances = new uint256[](owners.length);

        unchecked {
            for (uint256 i = 0; i < owners.length; i++) {
                balances[i] = balanceOf[owners[i]][ids[i]];
            }
        }
    }

    function setApprovalForAll(address operator, bool approved) external {
        isApprovedForAll[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 value,
        bytes memory data
    ) external {
        require(
            msg.sender == from || isApprovedForAll[from][msg.sender],
            "not approved"
        );
        require(to != address(0), "to = 0 address");
        require(balanceOf[from][id] >= value, "insufficient balance");

        balanceOf[from][id] -= value;
        balanceOf[to][id] += value;

        emit TransferSingle(msg.sender, from, to, id, value);

        _checkOnERC1155Received(msg.sender, from, to, id, value, data);
    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes memory data
    ) external {
        require(
            msg.sender == from || isApprovedForAll[from][msg.sender],
            "not approved"
        );
        require(to != address(0), "to = 0 address");
        require(ids.length == values.length, "ids length != values length");

        for (uint256 i = 0; i < ids.length; i++) {
            require(balanceOf[from][ids[i]] >= values[i], "insufficient balance");

            balanceOf[from][ids[i]] -= values[i];
            balanceOf[to][ids[i]] += values[i];
        }

        emit TransferBatch(msg.sender, from, to, ids, values);

        _checkOnERC1155BatchReceived(msg.sender, from, to, ids, values, data);
    }

    // ERC1155 Metadata URI
    function uri(uint256 id) public view virtual returns (string memory) {}

    // Internal functions
    function _mint(
        address to,
        uint256 id,
        uint256 value,
        bytes memory data
    ) internal {
        require(to != address(0), "to = 0 address");

        balanceOf[to][id] += value;

        emit TransferSingle(msg.sender, address(0), to, id, value);

        _checkOnERC1155Received(msg.sender, address(0), to, id, value, data);
    }

    function _batchMint(
        address to,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes memory data
    ) internal {
        require(to != address(0), "to = 0 address");
        require(ids.length == values.length, "ids length != values length");

        for (uint256 i = 0; i < ids.length; i++) {
            balanceOf[to][ids[i]] += values[i];
        }

        emit TransferBatch(msg.sender, address(0), to, ids, values);

        _checkOnERC1155BatchReceived(
            msg.sender,
            address(0),
            to,
            ids,
            values,
            data
        );
    }

    function _burn(address from, uint256 id, uint256 value) internal {
        require(from != address(0), "from = 0 address");
        require(balanceOf[from][id] >= value, "token value not enough");
        balanceOf[from][id] -= value;
        emit TransferSingle(msg.sender, from, address(0), id, value);
    }

    function _batchBurn(
        address from,
        uint256[] calldata ids,
        uint256[] calldata values
    ) internal {
        require(from != address(0), "from = 0 address");
        require(ids.length == values.length, "ids length != values length");

        for (uint256 i = 0; i < ids.length; i++) {
            require(
                balanceOf[from][ids[i]] >= values[i],
                "token value not enough"
            );
            balanceOf[from][ids[i]] -= values[i];
        }

        emit TransferBatch(msg.sender, from, address(0), ids, values);
    }

    function isContract(address account) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(account)
        }
        return size > 0;
    }

    function _checkOnERC1155Received(
        address operator,
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) private {
        if (isContract(to)) {
            try
                IERC1155Receiver(to).onERC1155Received(
                    operator,
                    from,
                    id,
                    amount,
                    data
                )
            returns (bytes4 response) {
                if (response != IERC1155Receiver.onERC1155Received.selector) {
                    revert("ERC1155Receiver rejected tokens");
                }
            } catch {
                revert("transfer to non ERC1155Receiver implementer");
            }
        }
    }

    function _checkOnERC1155BatchReceived(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) private {
        if (isContract(to)) {
            try
                IERC1155Receiver(to).onERC1155BatchReceived(
                    operator,
                    from,
                    ids,
                    amounts,
                    data
                )
            returns (bytes4 response) {
                if (
                    response != IERC1155Receiver.onERC1155BatchReceived.selector
                ) {
                    revert("ERC1155Receiver rejected tokens");
                }
            } catch {
                revert("transfer to non ERC1155Receiver implementer");
            }
        }
    }
}

contract Collection1155V2 is AccessControl, Collection1155Base, Initializable {
    address _owner;
    address _factory;
    string private _name;
    string private _symbol;
    mapping(uint256 => string) private _tokenURIs;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    function initialize(address owner, string memory collection_name, string memory collection_symbol) external initializer {
        _owner = owner;
        _name = collection_name;
        _symbol = collection_symbol;

        _setAdminRoles(owner);
    }

    function _setAdminRoles(address owner) private {
      _grantRole(DEFAULT_ADMIN_ROLE, owner);
      _grantRole(MINTER_ROLE, owner);
    }

    function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    function uri(
        uint256 id
    ) public view virtual override returns (string memory) {
        return _tokenURIs[id];
    }

    function mintWithUri(
        address to,
        uint256 id,
        uint256 value,
        string memory newuri
    ) public onlyRole(MINTER_ROLE) returns (uint256 tokenId) {
        _mint(to, id, value, "");
        _tokenURIs[id] = newuri;
        emit URI(newuri, id);
        return id;
    }

    function mint(
        address to,
        uint256 id,
        uint256 value,
        bytes memory data
    ) external onlyRole(MINTER_ROLE) returns (uint256 tokenId) {
        _mint(to, id, value, data);
        return id;
    }

    function batchMint(
        address to,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) public onlyRole(MINTER_ROLE) {
        _batchMint(to, ids, values, data);
    }

    function burn(uint256 id, uint256 value) public {
        _burn(msg.sender, id, value);
    }

    function batchBurn(
        uint256[] calldata ids,
        uint256[] calldata values
    ) public {
        _batchBurn(msg.sender, ids, values);
    }

    // ====================================================
    //                    IERC165
    // ====================================================
    function supportsInterface(bytes4 interfaceId)
      public
      view
      override (AccessControl, IERC165)
      returns (bool)
    {
        return 
          interfaceId == type(IERC1155).interfaceId ||
          interfaceId == type(IERC1155MetadataURI).interfaceId ||
          super.supportsInterface(interfaceId);
    }
}
