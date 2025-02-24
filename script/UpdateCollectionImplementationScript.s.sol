// SPDX-License-Identifier: None
pragma solidity ^0.8.9;

import "forge-std/Script.sol";
import {Factory} from "../contracts/Factory.sol";
import {Collection} from "../contracts/Collection.sol";

contract UpdateCollectionImplementationScript is Script {
    function run() external {
      uint256 privateKey = vm.envUint("PRIVATE_KEY");
      address factory_address = vm.envAddress("FACTORY_PROXY_ADDRESS");

      vm.startBroadcast(privateKey);

      Collection collection = new Collection();
      Factory factory = Factory(factory_address);
      factory.updateImplementation(Factory.ImplementationKind.COLLECTION, address(collection));

      vm.stopBroadcast();

      console.log("Factory %s is updated with new COLLECTION implementation %s", factory_address, address(collection));
    }
}