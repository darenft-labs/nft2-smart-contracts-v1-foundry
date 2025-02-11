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
import type {
  Voucher,
  VoucherInterface,
} from "../../../contracts/examples/Voucher";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftCollection",
        type: "address",
      },
      {
        internalType: "address",
        name: "dataRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "tbaImplementation",
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
        indexed: false,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endId",
        type: "uint256",
      },
    ],
    name: "BatchCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tba",
        type: "address",
      },
    ],
    name: "VoucherCreated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8",
                name: "vestingType",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "linearType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "startTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint8",
                name: "isVested",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "remainingAmount",
                type: "uint256",
              },
            ],
            internalType: "struct Voucher.VestingSchedule[]",
            name: "schedules",
            type: "tuple[]",
          },
        ],
        internalType: "struct Voucher.Vesting",
        name: "vesting",
        type: "tuple",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tba",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "uris",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8",
                name: "vestingType",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "linearType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "startTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint8",
                name: "isVested",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "remainingAmount",
                type: "uint256",
              },
            ],
            internalType: "struct Voucher.VestingSchedule[]",
            name: "schedules",
            type: "tuple[]",
          },
        ],
        internalType: "struct Voucher.Vesting",
        name: "vesting",
        type: "tuple",
      },
    ],
    name: "createBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "startId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "uris",
        type: "string[]",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "rate",
        type: "uint96",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8",
                name: "vestingType",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "linearType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "startTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint8",
                name: "isVested",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "remainingAmount",
                type: "uint256",
              },
            ],
            internalType: "struct Voucher.VestingSchedule[]",
            name: "schedules",
            type: "tuple[]",
          },
        ],
        internalType: "struct Voucher.Vesting",
        name: "vesting",
        type: "tuple",
      },
    ],
    name: "createBatchWithRoyalty",
    outputs: [
      {
        internalType: "uint256",
        name: "startId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "redeem",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tbaOfToken",
    outputs: [
      {
        internalType: "address",
        name: "tba",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027263803806200272683398101604081905262000034916200010f565b6200003f33620000a2565b600180546001600160a01b03199081166001600160a01b039788161790915560028054821695871695909517909455600380548516938616939093179092556004805484169185169190911790556005805490921692169190911790556200017f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200010a57600080fd5b919050565b600080600080600060a086880312156200012857600080fd5b6200013386620000f2565b94506200014360208701620000f2565b93506200015360408701620000f2565b92506200016360608701620000f2565b91506200017360808701620000f2565b90509295509295909350565b612597806200018f6000396000f3fe6080604052600436106100865760003560e01c80636cccc494116100595780636cccc4941461015a578063715018a6146101925780638da5cb5b146101a9578063db006a75146101c7578063f2fde38b146101f757600080fd5b80630f71d3e61461008b578063150b7a02146100c05780632fd6438a1461010557806358ff1a561461013a575b600080fd5b61009e610099366004611ad0565b610217565b604080519283526001600160a01b039091166020830152015b60405180910390f35b3480156100cc57600080fd5b506100ec6100db366004611b21565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016100b7565b34801561011157600080fd5b50610125610120366004611c0a565b61047a565b604080519283526020830191909152016100b7565b34801561014657600080fd5b50610125610155366004611cb5565b6106d4565b34801561016657600080fd5b5061017a610175366004611d27565b610921565b6040516001600160a01b0390911681526020016100b7565b34801561019e57600080fd5b506101a76109f9565b005b3480156101b557600080fd5b506000546001600160a01b031661017a565b3480156101d357600080fd5b506101e76101e2366004611d27565b610a0d565b60405190151581526020016100b7565b34801561020357600080fd5b506101a7610212366004611d40565b611417565b600080610225338435611490565b61024a5760405162461bcd60e51b815260040161024190611d5d565b60405180910390fd5b6001546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061027f9033903090883590600401611dba565b6020604051808303816000875af115801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c29190611dde565b506002546040516340d097c360e01b81523060048201526001600160a01b03909116906340d097c3906024016020604051808303816000875af115801561030d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103319190611e00565b6002546040519193506000916103599130916001600160a01b03909116908690602001611dba565b60408051808303601f1901815290829052805160209091012060048054600554600254638a54c52f60e01b86526001600160a01b0391821693860193909352602485018490524660448601529182166064850152608484018790529193501690638a54c52f9060a4016020604051808303816000875af11580156103e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104059190611e19565b600254909250610427906001600160a01b03168461042287611ef8565b611520565b600254604080516001600160a01b0392831681526020810186905291841682820152517f1119014bfbd8f5e40a5accdf131d2bdae0c48bf4476f02c9b74d710631dd3a939181900360600190a150915091565b6000808588146104cc5760405162461bcd60e51b815260206004820152601c60248201527f496e707574206c656e677468204d555354206265206d617463686564000000006044820152606401610241565b60006104d9898535612028565b90506104e6335b82611490565b6105025760405162461bcd60e51b815260040161024190611d5d565b6001546001600160a01b03166323b872dd3330846040518463ffffffff1660e01b815260040161053493929190611dba565b6020604051808303816000875af1158015610553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105779190611dde565b6105c35760405162461bcd60e51b815260206004820152601c60248201527f5374616b6520766f75636865722062616c616e6365206661696c6564000000006044820152606401610241565b60025460405163b56bf7e560e01b81526001600160a01b039091169063b56bf7e5906105f79030908c908c90600401612068565b60408051808303816000875af1158015610615573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106399190612116565b909350915060005b8981101561067e5760025461066c906001600160a01b0316610663838761213a565b61042288611ef8565b806106768161214d565b915050610641565b506002546040517f2d480b573b3fc4a4b2d0ef236feb539a2281e092e6deb5f62515591788c8c72c916106c0916001600160a01b039091169086908690612166565b60405180910390a150965096945050505050565b6000808386146107265760405162461bcd60e51b815260206004820152601c60248201527f496e707574206c656e677468204d555354206265206d617463686564000000006044820152606401610241565b6000610733878535612028565b905061073e336104e0565b61075a5760405162461bcd60e51b815260040161024190611d5d565b6001546001600160a01b03166323b872dd3330846040518463ffffffff1660e01b815260040161078c93929190611dba565b6020604051808303816000875af11580156107ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cf9190611dde565b61081b5760405162461bcd60e51b815260206004820152601c60248201527f5374616b6520766f75636865722062616c616e6365206661696c6564000000006044820152606401610241565b60025460405163b56bf7e560e01b81526001600160a01b039091169063b56bf7e59061084f9030908a908a90600401612068565b60408051808303816000875af115801561086d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108919190612116565b909350915060005b878110156108cd576002546108bb906001600160a01b0316610663838761213a565b806108c58161214d565b915050610899565b506002546040517f2d480b573b3fc4a4b2d0ef236feb539a2281e092e6deb5f62515591788c8c72c9161090f916001600160a01b039091169086908690612166565b60405180910390a15094509492505050565b60025460405160009182916109489130916001600160a01b03909116908690602001611dba565b60408051808303601f190181529082905280516020909101206004805460055460025463246a002160e01b86526001600160a01b039182169386019390935260248501849052466044860152918216606485015260848401879052919350169063246a00219060a401602060405180830381865afa1580156109ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f29190611e19565b9392505050565b610a0161171e565b610a0b6000611778565b565b6000610a1933836117c8565b610a745760405162461bcd60e51b815260206004820152602660248201527f52656465656d6572206d7573742062652074727565206f776e6572206f66207660448201526537bab1b432b960d11b6064820152608401610241565b604080518082018252600781526642414c414e434560c81b602090910152600354600254915163104567cd60e11b81527fe7adc2a634555a2311bea63e676d74c6fefbf82b2d0687906d769a0eb91e84ed926000926001600160a01b039081169263208acf9a92610aed92169088908790600401612166565b600060405180830381865afa158015610b0a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b3291908101906121ab565b9050600081806020019051810190610b4a9190611e00565b60408051808201825260088152675343484544554c4560c01b602090910152600354600254915163104567cd60e11b81529293507f3895ee08364034c8967a550abc7fceccf7686a54ed45b4c1abb85b562fdb9a75926000926001600160a01b039283169263208acf9a92610bc992909116908b908790600401612166565b600060405180830381865afa158015610be6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c0e91908101906121ab565b9050606081806020019051810190610c26919061223e565b905060008060005b600a60ff8216108015610c4f57508351610c4983600161233e565b60ff1611155b15610f5b57600160ff16848360ff1681518110610c6e57610c6e612357565b602002602001015160a0015160ff160315610f4957600260ff16848360ff1681518110610c9d57610c9d612357565b60200260200101516020015160ff1603610d4a57838260ff1681518110610cc657610cc6612357565b6020026020010151606001514210610d4557838260ff1681518110610ced57610ced612357565b60200260200101516000015183610d04919061213a565b92506001848360ff1681518110610d1d57610d1d612357565b602090810291909101015160ff90911660a09091015280610d3d8161236d565b915050610f49565b610f5b565b600160ff16848360ff1681518110610d6457610d64612357565b60200260200101516020015160ff1603610f4957838260ff1681518110610d8d57610d8d612357565b6020026020010151608001514210610e2c57838260ff1681518110610db457610db4612357565b602002602001015160c0015183610dcb919061213a565b92506001848360ff1681518110610de457610de4612357565b602002602001015160a0019060ff16908160ff16815250506000848360ff1681518110610e1357610e13612357565b602090810291909101015160c0015280610d3d8161236d565b838260ff1681518110610e4157610e41612357565b6020026020010151606001514210610d45576000610e7b42868560ff1681518110610e6e57610e6e612357565b6020026020010151611851565b905080858460ff1681518110610e9357610e93612357565b602002602001015160c0015111610eca57848360ff1681518110610eb957610eb9612357565b602002602001015160c00151610ecc565b805b9050610ed8818561213a565b93506002858460ff1681518110610ef157610ef1612357565b602002602001015160a0019060ff16908160ff168152505080858460ff1681518110610f1f57610f1f612357565b602002602001015160c001818151610f37919061238c565b90525081610f448161236d565b925050505b81610f538161236d565b925050610c2e565b60008711610fbe5760405162461bcd60e51b815260206004820152602a60248201527f566f75636865722062616c616e636572206d7573742062652067726561746572604482015269207468616e207a65726f60b01b6064820152608401610241565b6001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015611006573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102a9190611e00565b83111561108c5760405162461bcd60e51b815260206004820152602a60248201527f42616c616e6365206f6620706f6f6c20697320696e73756666696369656e7420604482015269666f722072656465656d60b01b6064820152608401610241565b60008160ff16116110f15760405162461bcd60e51b815260206004820152602960248201527f4e6f7420616e79207363686564756c6520697320617661696c61626c6520666f604482015268722076657374696e6760b81b6064820152608401610241565b868311156111785760405162461bcd60e51b815260206004820152604860248201527f436c61696d61626c6520616d6f756e74206d757374206265206c65737320746860448201527f616e206f7220657175616c2072656d61696e696e672062616c616e6365206f66606482015267103b37bab1b432b960c11b608482015260a401610241565b611182838861238c565b60405160200161119491815260200190565b6040516020818303038152906040529750836040516020016111b6919061239f565b60408051601f1981840301815260028084526060840183529097506000929160208301908036833701905050905089816000815181106111f8576111f8612357565b602002602001018181525050868160018151811061121857611218612357565b602090810291909101015260408051600280825260608201909252600091816020015b606081526020019060019003908161123b579050509050898160008151811061126657611266612357565b6020026020010181905250868160018151811061128557611285612357565b6020026020010181905250600360009054906101000a90046001600160a01b03166001600160a01b031663ce0ce734600260009054906101000a90046001600160a01b03168f85856040518563ffffffff1660e01b81526004016112ec9493929190612457565b600060405180830381600087803b15801561130657600080fd5b505af115801561131a573d6000803e3d6000fd5b50506001546001600160a01b0316915063a9059cbb9050336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018890526044016020604051808303816000875af115801561137f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a39190611dde565b6114045760405162461bcd60e51b815260206004820152602c60248201527f5472616e7366657220455243323020746f6b656e20636c61696d61626c65206160448201526b1b5bdd5b9d0819985a5b195960a21b6064820152608401610241565b5060019c9b505050505050505050505050565b61141f61171e565b6001600160a01b0381166114845760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610241565b61148d81611778565b50565b600154604051636eb1769f60e11b81526001600160a01b038481166004830152306024830152600092849291169063dd62ed3e90604401602060405180830381865afa1580156114e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115089190611e00565b10156115165750600061151a565b5060015b92915050565b604080518082018252600781526642414c414e434560c81b60209182015282518251918201527fe7adc2a634555a2311bea63e676d74c6fefbf82b2d0687906d769a0eb91e84ed916000910160408051601f19818403018152828201825260088352675343484544554c4560c01b6020938401528583015191519093507f3895ee08364034c8967a550abc7fceccf7686a54ed45b4c1abb85b562fdb9a75926000926115ce9290910161239f565b60408051601f19818403018152908290526003546317ca97e360e21b83529092506001600160a01b031690635f2a5f8c90611613908a908a9089908990600401612508565b600060405180830381600087803b15801561162d57600080fd5b505af1158015611641573d6000803e3d6000fd5b50506003546040516317ca97e360e21b81526001600160a01b039091169250635f2a5f8c915061167b908a908a9087908790600401612508565b600060405180830381600087803b15801561169557600080fd5b505af11580156116a9573d6000803e3d6000fd5b50505050866001600160a01b03166323b872dd306116c43390565b896040518463ffffffff1660e01b81526004016116e393929190611dba565b600060405180830381600087803b1580156116fd57600080fd5b505af1158015611711573d6000803e3d6000fd5b5050505050505050505050565b6000546001600160a01b03163314610a0b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610241565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6002546040516331a9108f60e11b8152600481018390526000916001600160a01b0385811692911690636352211e90602401602060405180830381865afa158015611817573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183b9190611e19565b6001600160a01b0316146115165750600061151a565b602081015160009060ff166001146118ab5760405162461bcd60e51b815260206004820152601f60248201527f5468652076657374696e672074797065206d757374206265204c494e454152006044820152606401610241565b816060015183101580156118c25750816080015183105b6119485760405162461bcd60e51b815260206004820152604b60248201527f43616c63756c6174696e6720626c6f636b2074696d657374616d70206d75737460448201527f2072657369646520696e2073746172742d656e642074696d652072616e67652060648201526a6f66207363686564756c6560a81b608482015260a401610241565b620151806000611959826007612028565b9050600061196883601e612028565b90506000611977826003612028565b90506000600160ff16876040015160ff1603611994575083611a27565b600260ff16876040015160ff16036119ad575082611a27565b600360ff16876040015160ff16036119c6575081611a27565b600460ff16876040015160ff16036119df575080611a27565b60405162461bcd60e51b815260206004820152601f60248201527f756e737570706f72746564206c696e6561722076657374696e672074797065006044820152606401610241565b600087606001518860800151611a3d919061238c565b90506000818960000151611a51919061253f565b90506000838a606001518c611a66919061238c565b611a70919061253f565b9050600082611a7f8684612028565b611a899190612028565b8b5160c08d015191925090611a9e908361213a565b611aa8919061238c565b9c9b505050505050505050505050565b600060408284031215611aca57600080fd5b50919050565b600060208284031215611ae257600080fd5b81356001600160401b03811115611af857600080fd5b611b0484828501611ab8565b949350505050565b6001600160a01b038116811461148d57600080fd5b600080600080600060808688031215611b3957600080fd5b8535611b4481611b0c565b94506020860135611b5481611b0c565b93506040860135925060608601356001600160401b0380821115611b7757600080fd5b818801915088601f830112611b8b57600080fd5b813581811115611b9a57600080fd5b896020828501011115611bac57600080fd5b9699959850939650602001949392505050565b60008083601f840112611bd157600080fd5b5081356001600160401b03811115611be857600080fd5b6020830191508360208260051b8501011115611c0357600080fd5b9250929050565b60008060008060008060a08789031215611c2357600080fd5b8635955060208701356001600160401b0380821115611c4157600080fd5b611c4d8a838b01611bbf565b909750955060408901359150611c6282611b0c565b9093506060880135906bffffffffffffffffffffffff82168214611c8557600080fd5b90925060808801359080821115611c9b57600080fd5b50611ca889828a01611ab8565b9150509295509295509295565b60008060008060608587031215611ccb57600080fd5b8435935060208501356001600160401b0380821115611ce957600080fd5b611cf588838901611bbf565b90955093506040870135915080821115611d0e57600080fd5b50611d1b87828801611ab8565b91505092959194509250565b600060208284031215611d3957600080fd5b5035919050565b600060208284031215611d5257600080fd5b81356109f281611b0c565b6020808252603a908201527f526571756573746572206d75737420617070726f76652073756666696369656e60408201527f7420616d6f756e7420746f2063726561746520766f7563686572000000000000606082015260800190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b600060208284031215611df057600080fd5b815180151581146109f257600080fd5b600060208284031215611e1257600080fd5b5051919050565b600060208284031215611e2b57600080fd5b81516109f281611b0c565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715611e6e57611e6e611e36565b60405290565b60405160e081016001600160401b0381118282101715611e6e57611e6e611e36565b604051601f8201601f191681016001600160401b0381118282101715611ebe57611ebe611e36565b604052919050565b60006001600160401b03821115611edf57611edf611e36565b5060051b60200190565b60ff8116811461148d57600080fd5b60006040808336031215611f0b57600080fd5b611f13611e4c565b833581526020808501356001600160401b03811115611f3157600080fd5b850136601f820112611f4257600080fd5b8035611f55611f5082611ec6565b611e96565b81815260e09182028301840191848201919036841115611f7457600080fd5b938501935b83851015611fff57808536031215611f915760008081fd5b611f99611e74565b8535815286860135611faa81611ee9565b8188015285890135611fbb81611ee9565b818a0152606086810135908201526080808701359082015260a080870135611fe281611ee9565b9082015260c0868101359082015283529384019391850191611f79565b5093850193909352509195945050505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761151a5761151a612012565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0384168152604060208083018290529082018390526000906060600585901b840181019190840186845b8781101561210857868503605f190183528135368a9003601e190181126120bf57600080fd5b890184810190356001600160401b038111156120da57600080fd5b8036038213156120e957600080fd5b6120f487828461203f565b965050509183019190830190600101612099565b509298975050505050505050565b6000806040838503121561212957600080fd5b505080516020909101519092909150565b8082018082111561151a5761151a612012565b60006001820161215f5761215f612012565b5060010190565b6001600160a01b039390931683526020830191909152604082015260600190565b60005b838110156121a257818101518382015260200161218a565b50506000910152565b6000602082840312156121bd57600080fd5b81516001600160401b03808211156121d457600080fd5b818401915084601f8301126121e857600080fd5b8151818111156121fa576121fa611e36565b61220d601f8201601f1916602001611e96565b915080825285602082850101111561222457600080fd5b612235816020840160208601612187565b50949350505050565b6000602080838503121561225157600080fd5b82516001600160401b0381111561226757600080fd5b8301601f8101851361227857600080fd5b8051612286611f5082611ec6565b81815260e091820283018401918482019190888411156122a557600080fd5b938501935b838510156123325780858a0312156122c25760008081fd5b6122ca611e74565b85518152868601516122db81611ee9565b818801526040868101516122ee81611ee9565b90820152606086810151908201526080808701519082015260a08087015161231581611ee9565b9082015260c08681015190820152835293840193918501916122aa565b50979650505050505050565b60ff818116838216019081111561151a5761151a612012565b634e487b7160e01b600052603260045260246000fd5b600060ff821660ff810361238357612383612012565b60010192915050565b8181038181111561151a5761151a612012565b602080825282518282018190526000919060409081850190868401855b8281101561241e578151805185528681015160ff9081168887015286820151811687870152606080830151908701526080808301519087015260a0808301519091169086015260c0908101519085015260e090930192908501906001016123bc565b5091979650505050505050565b60008151808452612443816020860160208601612187565b601f01601f19169290920160200192915050565b6001600160a01b0385168152602080820185905260806040830181905284519083018190526000918581019160a0850190845b818110156124a65784518352938301939183019160010161248a565b5050848103606086015285518082528282019350600581901b8201830183880160005b838110156124f757601f198584030187526124e583835161242b565b968601969250908501906001016124c9565b50909b9a5050505050505050505050565b60018060a01b0385168152836020820152826040820152608060608201526000612535608083018461242b565b9695505050505050565b60008261255c57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122054c11af7840a47ff448dd86eb934559767b39f10b23ea7af192dd11b4666fa8764736f6c63430008140033";

type VoucherConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VoucherConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Voucher__factory extends ContractFactory {
  constructor(...args: VoucherConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    erc20Token: AddressLike,
    nftCollection: AddressLike,
    dataRegistry: AddressLike,
    factory: AddressLike,
    tbaImplementation: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      erc20Token,
      nftCollection,
      dataRegistry,
      factory,
      tbaImplementation,
      overrides || {}
    );
  }
  override deploy(
    erc20Token: AddressLike,
    nftCollection: AddressLike,
    dataRegistry: AddressLike,
    factory: AddressLike,
    tbaImplementation: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      erc20Token,
      nftCollection,
      dataRegistry,
      factory,
      tbaImplementation,
      overrides || {}
    ) as Promise<
      Voucher & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Voucher__factory {
    return super.connect(runner) as Voucher__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VoucherInterface {
    return new Interface(_abi) as VoucherInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Voucher {
    return new Contract(address, _abi, runner) as unknown as Voucher;
  }
}
