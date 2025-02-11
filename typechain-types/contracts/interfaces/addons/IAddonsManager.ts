/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface IAddonsManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "isWhitelistedStrategy"
      | "registerStrategy"
      | "strategyOfKind"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "RegisterStrategy"): EventFragment;

  encodeFunctionData(
    functionFragment: "isWhitelistedStrategy",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerStrategy",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "strategyOfKind",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "isWhitelistedStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "strategyOfKind",
    data: BytesLike
  ): Result;
}

export namespace RegisterStrategyEvent {
  export type InputTuple = [strategy: AddressLike, kind: BigNumberish];
  export type OutputTuple = [strategy: string, kind: bigint];
  export interface OutputObject {
    strategy: string;
    kind: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IAddonsManager extends BaseContract {
  connect(runner?: ContractRunner | null): IAddonsManager;
  waitForDeployment(): Promise<this>;

  interface: IAddonsManagerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  isWhitelistedStrategy: TypedContractMethod<
    [strategy: AddressLike],
    [boolean],
    "view"
  >;

  registerStrategy: TypedContractMethod<
    [strategy: AddressLike, kind: BigNumberish],
    [void],
    "nonpayable"
  >;

  strategyOfKind: TypedContractMethod<[kind: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "isWhitelistedStrategy"
  ): TypedContractMethod<[strategy: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "registerStrategy"
  ): TypedContractMethod<
    [strategy: AddressLike, kind: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "strategyOfKind"
  ): TypedContractMethod<[kind: BigNumberish], [string], "view">;

  getEvent(
    key: "RegisterStrategy"
  ): TypedContractEvent<
    RegisterStrategyEvent.InputTuple,
    RegisterStrategyEvent.OutputTuple,
    RegisterStrategyEvent.OutputObject
  >;

  filters: {
    "RegisterStrategy(address,uint8)": TypedContractEvent<
      RegisterStrategyEvent.InputTuple,
      RegisterStrategyEvent.OutputTuple,
      RegisterStrategyEvent.OutputObject
    >;
    RegisterStrategy: TypedContractEvent<
      RegisterStrategyEvent.InputTuple,
      RegisterStrategyEvent.OutputTuple,
      RegisterStrategyEvent.OutputObject
    >;
  };
}
