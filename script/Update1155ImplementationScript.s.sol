// SPDX-License-Identifier: None
pragma solidity ^0.8.9;

import "forge-std/Script.sol";
import {Factory} from "../contracts/Factory.sol";
import {Collection1155V2} from "../contracts/Collection1155V2.sol";

contract Update1155ImplementationScript is Script {
    function run() external {
      uint256 privateKey = vm.envUint("PRIVATE_KEY");
      address factory_address = vm.envAddress("FACTORY_PROXY_ADDRESS");

      vm.startBroadcast(privateKey);

      Collection1155V2 collection1155 = new Collection1155V2();
      Factory factory = Factory(factory_address);
      factory.updateImplementation(Factory.ImplementationKind.ERC1155_COLLECTION, address(collection1155));

      vm.stopBroadcast();

      console.log("Factory %s is updated with new ERC1155 implementation %s", factory_address, address(collection1155));
    }
}