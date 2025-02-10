// SPDX-License-Identifier: None
pragma solidity ^0.8.9;

import "forge-std/Script.sol";
import {UnsafeUpgrades} from "openzeppelin-foundry-upgrades/LegacyUpgrades.sol";
import {Factory} from "../contracts/Factory.sol";

contract UpgradeFactoryScript is Script {
    function run() external {
      uint256 privateKey = vm.envUint("PRIVATE_KEY");
      address proxyAddress = vm.envAddress("FACTORY_PROXY_ADDRESS");

      vm.startBroadcast(privateKey);

      Factory factory = new Factory();

      UnsafeUpgrades.upgradeProxy(proxyAddress, address(factory), "");

      vm.stopBroadcast();

      console.log("Factory %s is updated with new implementation %s", proxyAddress, address(factory));
    }
}