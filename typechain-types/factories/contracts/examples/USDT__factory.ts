/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { USDT, USDTInterface } from "../../../contracts/examples/USDT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200131a3803806200131a833981016040819052620000349162000169565b6040805180820182526004808252631554d11560e21b602080840182905284518086019095529184529083015290600362000070838262000240565b5060046200007f828262000240565b506200009191506000905082620000c4565b620000bd7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a682620000c4565b506200030c565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16620001655760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001243390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000602082840312156200017c57600080fd5b81516001600160a01b03811681146200019457600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001c657607f821691505b602082108103620001e757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023b57600081815260208120601f850160051c81016020861015620002165750805b601f850160051c820191505b81811015620002375782815560010162000222565b5050505b505050565b81516001600160401b038111156200025c576200025c6200019b565b62000274816200026d8454620001b1565b84620001ed565b602080601f831160018114620002ac5760008415620002935750858301515b600019600386901b1c1916600185901b17855562000237565b600085815260208120601f198616915b82811015620002dd57888601518255948401946001909101908401620002bc565b5085821015620002fc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610ffe806200031c6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806340c10f19116100ad578063a457c2d711610071578063a457c2d714610272578063a9059cbb14610285578063d539139314610298578063d547741f146102bf578063dd62ed3e146102d257600080fd5b806340c10f191461021357806370a082311461022657806391d148541461024f57806395d89b4114610262578063a217fddf1461026a57600080fd5b8063248a9ca3116100f4578063248a9ca3146101a65780632f2ff15d146101c9578063313ce567146101de57806336568abe146101ed578063395093511461020057600080fd5b806301ffc9a71461013157806306fdde0314610159578063095ea7b31461016e57806318160ddd1461018157806323b872dd14610193575b600080fd5b61014461013f366004610d09565b6102e5565b60405190151581526020015b60405180910390f35b61016161031c565b6040516101509190610d57565b61014461017c366004610da6565b6103ae565b6002545b604051908152602001610150565b6101446101a1366004610dd0565b6103c6565b6101856101b4366004610e0c565b60009081526005602052604090206001015490565b6101dc6101d7366004610e25565b6103ea565b005b60405160128152602001610150565b6101dc6101fb366004610e25565b610414565b61014461020e366004610da6565b610497565b6101dc610221366004610da6565b6104b9565b610185610234366004610e51565b6001600160a01b031660009081526020819052604090205490565b61014461025d366004610e25565b6104ed565b610161610518565b610185600081565b610144610280366004610da6565b610527565b610144610293366004610da6565b6105a2565b6101857f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101dc6102cd366004610e25565b6105b0565b6101856102e0366004610e6c565b6105d5565b60006001600160e01b03198216637965db0b60e01b148061031657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461032b90610e96565b80601f016020809104026020016040519081016040528092919081815260200182805461035790610e96565b80156103a45780601f10610379576101008083540402835291602001916103a4565b820191906000526020600020905b81548152906001019060200180831161038757829003601f168201915b5050505050905090565b6000336103bc818585610600565b5060019392505050565b6000336103d4858285610724565b6103df85858561079e565b506001949350505050565b60008281526005602052604090206001015461040581610942565b61040f838361094f565b505050565b6001600160a01b03811633146104895760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61049382826109d5565b5050565b6000336103bc8185856104aa83836105d5565b6104b49190610ee6565b610600565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66104e381610942565b61040f8383610a3c565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461032b90610e96565b6000338161053582866105d5565b9050838110156105955760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610480565b6103df8286868403610600565b6000336103bc81858561079e565b6000828152600560205260409020600101546105cb81610942565b61040f83836109d5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166106625760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610480565b6001600160a01b0382166106c35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610480565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061073084846105d5565b90506000198114610798578181101561078b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610480565b6107988484848403610600565b50505050565b6001600160a01b0383166108025760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610480565b6001600160a01b0382166108645760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610480565b6001600160a01b038316600090815260208190526040902054818110156108dc5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610480565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610798565b61094c8133610afb565b50565b61095982826104ed565b6104935760008281526005602090815260408083206001600160a01b03851684529091529020805460ff191660011790556109913390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6109df82826104ed565b156104935760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610a925760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610480565b8060026000828254610aa49190610ee6565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b610b0582826104ed565b61049357610b1281610b54565b610b1d836020610b66565b604051602001610b2e929190610ef9565b60408051601f198184030181529082905262461bcd60e51b825261048091600401610d57565b60606103166001600160a01b03831660145b60606000610b75836002610f6e565b610b80906002610ee6565b67ffffffffffffffff811115610b9857610b98610f85565b6040519080825280601f01601f191660200182016040528015610bc2576020820181803683370190505b509050600360fc1b81600081518110610bdd57610bdd610f9b565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610c0c57610c0c610f9b565b60200101906001600160f81b031916908160001a9053506000610c30846002610f6e565b610c3b906001610ee6565b90505b6001811115610cb3576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610c6f57610c6f610f9b565b1a60f81b828281518110610c8557610c85610f9b565b60200101906001600160f81b031916908160001a90535060049490941c93610cac81610fb1565b9050610c3e565b508315610d025760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610480565b9392505050565b600060208284031215610d1b57600080fd5b81356001600160e01b031981168114610d0257600080fd5b60005b83811015610d4e578181015183820152602001610d36565b50506000910152565b6020815260008251806020840152610d76816040850160208701610d33565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610da157600080fd5b919050565b60008060408385031215610db957600080fd5b610dc283610d8a565b946020939093013593505050565b600080600060608486031215610de557600080fd5b610dee84610d8a565b9250610dfc60208501610d8a565b9150604084013590509250925092565b600060208284031215610e1e57600080fd5b5035919050565b60008060408385031215610e3857600080fd5b82359150610e4860208401610d8a565b90509250929050565b600060208284031215610e6357600080fd5b610d0282610d8a565b60008060408385031215610e7f57600080fd5b610e8883610d8a565b9150610e4860208401610d8a565b600181811c90821680610eaa57607f821691505b602082108103610eca57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561031657610316610ed0565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610f31816017850160208801610d33565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610f62816028840160208801610d33565b01602801949350505050565b808202811582820484141761031657610316610ed0565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610fc057610fc0610ed0565b50600019019056fea2646970667358221220d2fcdb9cd84075fbfc4c212a35cf205b31606e868a3300948ebea9bb70b848b764736f6c63430008140033";

type USDTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDT__factory extends ContractFactory {
  constructor(...args: USDTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    defaultAdmin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(defaultAdmin, overrides || {});
  }
  override deploy(
    defaultAdmin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(defaultAdmin, overrides || {}) as Promise<
      USDT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): USDT__factory {
    return super.connect(runner) as USDT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDTInterface {
    return new Interface(_abi) as USDTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): USDT {
    return new Contract(address, _abi, runner) as unknown as USDT;
  }
}
