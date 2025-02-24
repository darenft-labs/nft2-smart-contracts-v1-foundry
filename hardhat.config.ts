import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";
import "@openzeppelin/hardhat-upgrades";
//import "@nomicfoundation/hardhat-foundry";

import "./tasks";

import dotenv from "dotenv";
dotenv.config()

const privateKey = process.env.PRIVATE_KEY!;
const nodeRealApiKey = process.env.NODEREAL_API_KEY!;
const bscScanApiKey = process.env.BSCSCAN_API_KEY!;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
  networks: {
    avax: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [privateKey]
    },
    avax_fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [privateKey]
    },
    bnb_testnet: {
      url: "https://data-seed-prebsc-1-s2.bnbchain.org:8545/",
      chainId: 97,
      accounts: [privateKey]
    },
    bnb: {
      url: "https://bsc-dataseed.bnbchain.org/",
      chainId: 56,
      accounts: [privateKey]
    },
    klaytn_testnet: {
      url: "https://api.baobab.klaytn.net:8651",
      chainId: 1001,      
      accounts: [privateKey]
    },
    klaytn_mainnet: {
      url: `https://open-platform.nodereal.io/${nodeRealApiKey}/klaytn/`,
      chainId: 8217,
      accounts: [privateKey]    
    },
  },
  etherscan: {    
    apiKey: {
      avalanche: "snowtrace", // apiKey is not required, just set a placeholder
      avax_fuji: "snowtrace", // apiKey is not required, just set a placeholder
      bscTestnet: bscScanApiKey,  // obtain one at https://bscscan.com/
      bsc: bscScanApiKey,  // obtain one at https://bscscan.com/
    },
    customChains: [
      {
        network: "avax_fuji",
        chainId: 43113,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/43113/etherscan",
          browserURL: "https://testnet.snowtrace.io"
        }
      }
    ]  
  },
};

export default config;
