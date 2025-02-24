// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/access/IAccessControl.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "erc6551/ERC6551Registry.sol";

import "./interfaces/IFactory.sol";
import "./interfaces/IDynamic.sol";
import "./interfaces/IDerivable.sol";
import "./interfaces/addons/IAddonsManager.sol";

import "./abstracts/AbstractCollection.sol";
import "./abstracts/FreeMintWhitelistAbstractContract.sol";
import "./addons/FreeMintCommunityStrategy.sol";

import "./DataRegistry.sol";
import "./DataRegistryV2.sol";
import "./Collection.sol";
import "./DerivedAccount.sol";
import "./Collection721A.sol";
import "./Collection1155V2.sol";


contract Factory is IFactory, ERC6551Registry, AccessControlUpgradeable, ReentrancyGuardUpgradeable {
  mapping (address dapp => address registry) private _dataRegistries;
  mapping (address owner => mapping (bytes32 hashkey => address collection)) private _collectionRegistries;
  mapping (address collection => mapping (uint256 tokenId => address derivedAccount)) private _derivedRegistries;
  mapping (address dapp => string uri) private _dappURIs;

  address public _dataRegistryImplementation;
  address public _collectionImplementation;
  address public _derivedAccountImplementation;
  address public _erc721AImplementation;
  address public _dataRegistryV2Implementation;

  address public _addOnsManager;
  address public _feeManager;

  address public _erc1155Implementation;

  function initialize(address dataRegistryImpl, 
                        address collectionImpl, 
                        address derivedAccountImpl, 
                        address erc721Impl, 
                        address dataRegistryV2Impl
                      ) public initializer {
    __AccessControl_init();
    __ReentrancyGuard_init();

    _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());

    _dataRegistryImplementation = dataRegistryImpl;    
    _collectionImplementation = collectionImpl;
    _derivedAccountImplementation = derivedAccountImpl;
    _erc721AImplementation = erc721Impl;
    _dataRegistryV2Implementation = dataRegistryV2Impl;
  }

  // ====================================================
  //              IMPLEMENTATION MANAGEMENT
  // ====================================================
  enum ImplementationKind {
    DATA_REGISTRY,
    COLLECTION,
    DERIVED_ACCOUNT,
    ERC712A_COLLECTION,
    DATA_REGISTRY_V2,
    ERC1155_COLLECTION
  }

  function updateImplementation(ImplementationKind kind, address implementation) public onlyRole(DEFAULT_ADMIN_ROLE) {
    require(implementation != address(0), "Implementation MUST be valid contract");

    if (kind == ImplementationKind.DATA_REGISTRY) {
      _dataRegistryImplementation = implementation;
    } else if (kind == ImplementationKind.COLLECTION) {
      _collectionImplementation = implementation;
    } else if (kind == ImplementationKind.DERIVED_ACCOUNT) {
      _derivedAccountImplementation = implementation;
    } else if (kind == ImplementationKind.ERC712A_COLLECTION) {
      _erc721AImplementation = implementation;
    } else if (kind == ImplementationKind.DATA_REGISTRY_V2) {
      _dataRegistryV2Implementation = implementation;
    } else if (kind == ImplementationKind.ERC1155_COLLECTION) {
      _erc1155Implementation = implementation;
    } else {
      revert("Invalid implementation kind");
    }
  }

  // ====================================================
  //                  FEE MANAGEMENT
  // ====================================================
  function setFeeManager(address manager) public onlyRole(DEFAULT_ADMIN_ROLE) {
    require(manager != address(0), "Manager MUST be valid contract");

    _feeManager = manager;
  }

  function getFee(ProtocolAction action, uint256 times) public view returns (address receiver, uint256 fee) {
    if (_feeManager == address(0)) return (address(0), 0);
    return ((IFeeManager)(_feeManager).getReceiver(), (IFeeManager)(_feeManager).getFee(action)*times);
  }

  // ====================================================
  //                   DATA REGISTRY
  // ====================================================
  function createDataRegistry(string calldata dappUri) public nonReentrant returns (address registry) {
    require(_dataRegistries[_msgSender()] == address(0), "Data registry is deployed already.");

    bytes32 salt = keccak256(abi.encodePacked(_msgSender()));
    registry = Clones.cloneDeterministic(_dataRegistryImplementation, salt);
    DataRegistry(registry).initialize(_msgSender(), address(this), dappUri);

    _dataRegistries[_msgSender()] = registry;
    _dappURIs[_msgSender()] = dappUri;
    
    emit DataRegistryCreated(_msgSender(), registry, dappUri);
    return registry;
  }

  function createDataRegistryV2(string calldata dappUri, DataRegistrySettings calldata settings) public nonReentrant returns (address registry) {
    require(_dataRegistries[_msgSender()] == address(0), "Data registry is deployed already.");

    bytes32 salt = keccak256(abi.encodePacked(_msgSender()));
    registry = Clones.cloneDeterministic(_dataRegistryV2Implementation, salt);
    DataRegistryV2(registry).initialize(_msgSender(), address(this), dappUri, settings);

    _dataRegistries[_msgSender()] = registry;
    _dappURIs[_msgSender()] = dappUri;
    
    emit DataRegistryV2Created(_msgSender(), registry, dappUri);
    return registry;
  }

  function dataRegistryOf(address dapp) public view returns (address) {
    return _dataRegistries[dapp];
  }

  function dappURI(address dapp) public view returns (string memory) {
    return _dappURIs[dapp];
  }

  // ====================================================
  //                    COLLECTION
  // ====================================================
  function createCollection(string calldata name, string calldata symbol, CollectionSettings calldata settings, CollectionKind kind) public nonReentrant returns (address collection) {
    bytes32 hashKey = keccak256(abi.encode(name, symbol));
    require(_collectionRegistries[_msgSender()][hashKey] == address(0), "Collection is deployed already.");

    bytes32 salt = keccak256(abi.encode(_msgSender(), name, symbol, settings));

    if (kind == CollectionKind.ERC721A) {
      require(_erc721AImplementation != address(0), "ERC721A is unsupported");
      
      collection = Clones.cloneDeterministic(_erc721AImplementation, salt);
    } else {
      // always fallback to standard
      collection = Clones.cloneDeterministic(_collectionImplementation, salt);
    }

    AbstractCollection(collection).initialize(_msgSender(), name, symbol, abi.encode(settings));

    _collectionRegistries[_msgSender()][hashKey] = collection;

    emit CollectionCreated(_msgSender(), collection, kind);
    return collection;
  }

  function collectionOf(address owner, string calldata name, string calldata symbol) public view returns (address) {
    bytes32 hashKey = keccak256(abi.encode(name, symbol));
    return _collectionRegistries[owner][hashKey];
  }

  // ====================================================
  //                COLLECTION ADD-ONS
  // ====================================================
  function setAddonsManager(address manager) public onlyRole(DEFAULT_ADMIN_ROLE) {
    require(manager != address(0), "Manager MUST be valid contract");
    
    _addOnsManager = manager;
  }

  function createAddons(address collection, uint8 kind, bytes calldata settingsData) public nonReentrant returns (address addons) {
    require(_addOnsManager != address(0), "Addons Manager has not configured yet");
    address strategy = IAddonsManager(_addOnsManager).strategyOfKind(kind);
    require(strategy != address(0), "Strategy has not configured yet");

    if (kind == uint8(IAddonsManager.AddonsKind.FREE_MINT_WHITELIST_FCFS)
      || kind == uint8(IAddonsManager.AddonsKind.FREE_MINT_WHITELIST_FIXED_TOKEN)) {
      (FreeMintWhitelistAbstractContract.Settings memory settings) = abi.decode(settingsData, (FreeMintWhitelistAbstractContract.Settings));

      bytes32 salt = keccak256(abi.encode(collection, kind, settings.name, settings.startTime, settings.endTime, settings.fee));
      addons = Clones.cloneDeterministic(strategy, salt);

      FreeMintWhitelistAbstractContract(addons).initialize(_msgSender(), collection, settings.name, settings.startTime, settings.endTime, settings.fee);

      emit AddonsCreated(collection, kind, addons, salt, "");
    } else if (kind == uint8(IAddonsManager.AddonsKind.FREE_MINT_COMMUNITY)) {
      (FreeMintCommunityStrategy.Settings memory settings) = abi.decode(settingsData, (FreeMintCommunityStrategy.Settings));

      bytes32 salt = keccak256(abi.encode(collection, kind, settings.name, settings.startTime, settings.endTime, settings.fee, settings.maxAllocation));
      addons = Clones.cloneDeterministic(strategy, salt);

      FreeMintCommunityStrategy(addons).initialize(_msgSender(), collection, settings.name, settings.startTime, settings.endTime, 
                                                    settings.fee, settings.maxAllocation);

      emit AddonsCreated(collection, kind, addons, salt, "");
    } else {
      revert("Kind is not supported");
    }
  }

  // ====================================================
  //                   DERIVED ACCOUNT
  // ====================================================
  function createDerivedAccount(address underlyingCollection, uint256 underlyingTokenId) public nonReentrant returns (address derivedAccount){
    if (_derivedAccountOf(underlyingCollection, underlyingTokenId) != address(0)) {
      return _derivedAccountOf(underlyingCollection, underlyingTokenId);
    }

    bytes32 salt = keccak256(abi.encode(_msgSender(), underlyingCollection, underlyingTokenId));
    derivedAccount = ERC6551Registry(address(this)).createAccount(_derivedAccountImplementation, salt, block.chainid, underlyingCollection, underlyingTokenId);

    DerivedAccount(payable(derivedAccount)).initialize(address(this));

    _derivedRegistries[underlyingCollection][underlyingTokenId] = derivedAccount;

    emit DerivedAccountCreated(underlyingCollection, underlyingTokenId, derivedAccount);
    return derivedAccount;
  }

  function derivedAccountOf(address underlyingCollection, uint256 underlyingTokenId) public view returns (address){
    return _derivedAccountOf(underlyingCollection, underlyingTokenId);
  }

  function _derivedAccountOf(address underlyingCollection, uint256 underlyingTokenId) private view returns (address){
    return _derivedRegistries[underlyingCollection][underlyingTokenId];
  }

  // ====================================================
  //                   ERC1155 COLLECTION
  // ====================================================
  function create1155Collection(string memory _name, string memory _symbol) public nonReentrant returns (address collection) {
    require(_erc1155Implementation != address(0), "ERC1155 is unsupported");

    bytes32 salt = keccak256(abi.encode(_msgSender(), _name, _symbol));
    collection = Clones.cloneDeterministic(_erc1155Implementation, salt);

    Collection1155V2(collection).initialize(_msgSender(), _name, _symbol);

    emit Collection1155Created(_msgSender(), collection);
    return collection;
  }

}