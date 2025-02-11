/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  AddonsManager,
  AddonsManagerInterface,
} from "../../../contracts/addons/AddonsManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "kind",
        type: "uint8",
      },
    ],
    name: "RegisterStrategy",
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
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
    ],
    name: "isWhitelistedStrategy",
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
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "kind",
        type: "uint8",
      },
    ],
    name: "registerStrategy",
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
        internalType: "uint8",
        name: "kind",
        type: "uint8",
      },
    ],
    name: "strategyOfKind",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bf3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638129fc1c116100715780638129fc1c1461017357806391d148541461017b578063a192c2881461018e578063a217fddf146101a1578063c9a35100146101a9578063d547741f146101bc57600080fd5b806301ffc9a7146100ae578063248a9ca3146100d65780632f2ff15d1461010757806336568abe1461011c5780633e6215ce1461012f575b600080fd5b6100c16100bc366004610972565b6101cf565b60405190151581526020015b60405180910390f35b6100f96100e436600461099c565b60009081526065602052604090206001015490565b6040519081526020016100cd565b61011a6101153660046109d1565b610206565b005b61011a61012a3660046109d1565b610230565b61015b61013d366004610a0e565b60ff166000908152609960205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020016100cd565b61011a6102b3565b6100c16101893660046109d1565b6103cf565b6100c161019c366004610a29565b6103fa565b6100f9600081565b61011a6101b7366004610a44565b610407565b61011a6101ca3660046109d1565b610559565b60006001600160e01b03198216637965db0b60e01b148061020057506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828152606560205260409020600101546102218161057e565b61022b8383610588565b505050565b6001600160a01b03811633146102a55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6102af828261060e565b5050565b600054610100900460ff16158080156102d35750600054600160ff909116105b806102ed5750303b1580156102ed575060005460ff166001145b6103505760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161029c565b6000805460ff191660011790558015610373576000805461ff0019166101001790555b61037b610675565b610386600033610588565b80156103cc576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60006102006097836106e2565b60006104128161057e565b6001600160a01b0383166104875760405162461bcd60e51b815260206004820152603660248201527f537472617465677920696d706c656d656e746174696f6e204d5553542062652060448201527576616c696420636f6e7472616374206164647265737360501b606482015260840161029c565b6104926097846106e2565b156104df5760405162461bcd60e51b815260206004820152601d60248201527f53747261746567793a20416c72656164792077686974656c6973746564000000604482015260640161029c565b6104ea609784610707565b5060ff821660008181526099602090815260409182902080546001600160a01b0319166001600160a01b0388169081179091558251908152908101929092527f2de834b6f71b14660125b0f6efa69d5f6e492bc57c0b20c2402615ab47a37fc4910160405180910390a1505050565b6000828152606560205260409020600101546105748161057e565b61022b838361060e565b6103cc813361071c565b61059282826103cf565b6102af5760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556105ca3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61061882826103cf565b156102af5760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600054610100900460ff166106e05760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161029c565b565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b6000610700836001600160a01b038416610775565b61072682826103cf565b6102af57610733816107c4565b61073e8360206107d6565b60405160200161074f929190610a92565b60408051601f198184030181529082905262461bcd60e51b825261029c91600401610b07565b60008181526001830160205260408120546107bc57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610200565b506000610200565b60606102006001600160a01b03831660145b606060006107e5836002610b50565b6107f0906002610b67565b67ffffffffffffffff81111561080857610808610b7a565b6040519080825280601f01601f191660200182016040528015610832576020820181803683370190505b509050600360fc1b8160008151811061084d5761084d610b90565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061087c5761087c610b90565b60200101906001600160f81b031916908160001a90535060006108a0846002610b50565b6108ab906001610b67565b90505b6001811115610923576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106108df576108df610b90565b1a60f81b8282815181106108f5576108f5610b90565b60200101906001600160f81b031916908160001a90535060049490941c9361091c81610ba6565b90506108ae565b5083156107005760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161029c565b60006020828403121561098457600080fd5b81356001600160e01b03198116811461070057600080fd5b6000602082840312156109ae57600080fd5b5035919050565b80356001600160a01b03811681146109cc57600080fd5b919050565b600080604083850312156109e457600080fd5b823591506109f4602084016109b5565b90509250929050565b803560ff811681146109cc57600080fd5b600060208284031215610a2057600080fd5b610700826109fd565b600060208284031215610a3b57600080fd5b610700826109b5565b60008060408385031215610a5757600080fd5b610a60836109b5565b91506109f4602084016109fd565b60005b83811015610a89578181015183820152602001610a71565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610aca816017850160208801610a6e565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610afb816028840160208801610a6e565b01602801949350505050565b6020815260008251806020840152610b26816040850160208701610a6e565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761020057610200610b3a565b8082018082111561020057610200610b3a565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610bb557610bb5610b3a565b50600019019056fea2646970667358221220beaa8268415eeac0a52fcb18f43759972b29d28e512e62a1ed10587ebaa7d28f64736f6c63430008140033";

type AddonsManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddonsManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddonsManager__factory extends ContractFactory {
  constructor(...args: AddonsManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AddonsManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AddonsManager__factory {
    return super.connect(runner) as AddonsManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddonsManagerInterface {
    return new Interface(_abi) as AddonsManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AddonsManager {
    return new Contract(address, _abi, runner) as unknown as AddonsManager;
  }
}
