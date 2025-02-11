# Hardhat
The development guide for Hardhat.

## Setup
- Install npm dependencies
```bash
$ npm install
```

- Create .env file from template
```bash
$ cp .env.example .env
```

- Fulfill credentials and secrets to .env file

## Compile
- Compile smart contracts
```bash
$ npx hardhat compile
```

## Test
- Execute Unit tests
```bash
$ npx hardhat test
```

- Generate coverage report
```bash
$ npx hardhat coverage
```

## Assess codesize
- Check smart contract code size, in order to avoid breaking limit 24KB
```bash
$ npx hardhat size-contracts
```

## Deploy
- (Hardhat local) Spin up local Hardhat node
```bash
$ npx hardhat node
```

- (Real networks) Add supported chain config to hardhat.config.ts
```typescript
const config: HardhatUserConfig = {
  networks: {
    bnb_testnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      accounts: [privateKey1]
    },
  }
}
```

- Deploy implementation
```bash
$ IMPLEMENTATION=<kind> npx hardhat run ./scripts/deploy-implementation.ts --network <chain-name>
```
> *IMPLEMENTATION is the number kind, correspondingly:*
>
>   - 0: DataRegistry
>   - 1: Collection
>   - 2: DerivedAccount
>   - 3: Collection721A
>   - 4: DataRegistryV2
> *--network can be omitted in case deploy in-memory*

- AddonsManager
>   - Deploy AddonsManager
```bash
$ IMPLEMENTATION=5 npx hardhat run scripts/deploy-implementation.ts
```

>   - Upgrade AddonsManager
```bash
$ ADDONS_MANAGER=<address> \
IMPLEMENTATION=6 npx hardhat run scripts/deploy-implementation.ts
```

> *ADDONS_MANAGER is contract address, deployed in previous step.*

>   - Deploy & register strategy
```bash
$ ADDONS_MANAGER=<address> \
KIND=<addons-kind> \
IMPLEMENTATION=7 npx hardhat run scripts/deploy-implementation.ts
```

> *ADDONS_MANAGER is contract address, deployed in previous step.*
>
> *KIND is addons kind, correspondingly:*
>
>     - 0: Freemint whitelist FCFS
>     - 1: Freemint whitelist Fixed-token
>     - 2: Freemint whitelist Community


- Deploy factory
```bash
$ COLLECTION="<address>" \
DERIVED_ACCOUNT="<address>" \
COLLECTION_721A="<address>" \
DATA_REGISTRY_V2="<address>" \
npx hardhat run scripts/deploy-factory.ts --network <chain-name>
```

> *COLLECTION, DERIVED_ACCOUNT, COLLECTION_721A, DATA_REGISTRY_V2 is implementation contract addresses, deployed in previous step.*

- Config factory
>   - Set implementation to factory
```bash
$ FACTORY=<address> \
ACTION=1 \
KIND=<implementation-kind> \
IMPLEMENTATION=<new-implementation-address> \
npx hardhat run scripts/upgrade-factory.ts --network <chain-name>
```
> *KIND is implementation kind, defined above*

>   - Set AddonsManager
```bash
$ FACTORY=<address> \
ADDONS_MANAGER=<address> \
ACTION=0 \
npx hardhat run scripts/upgrade-factory.ts
```

> *FACTORY is factory contract address, deployed in previous step.*
> *ADDONS_MANAGER is contract address, deployed in previous step.*


## Verify contract
- Obtain and fulfill BSCScan / Snowtrace / etc API key to .env file
```bash
export BSCSCAN_API_KEY="<API_KEY>"
```

- Verify contract, notice to pass constructor arguments properly
```bash
$ npx hardhat verify <contract_address> --network <chain-name>
```

## (Optional) Verify contract on other chains
- [Klaytn](./docs/klaytn.md)

## Upgrade contracts
- (Optional) Deploy new implementation
```bash
$ IMPLEMENTATION=<number> npx hardhat run ./scripts/deploy-implementation.ts --network <chain-name>
```

- (Optional) Verify new implementation
```bash
$ npx hardhat verify <new-implementation-address> --network <chain-name>
```

- Upgrade factory contract
```bash
$ FACTORY="<address>" \
npx hardhat run ./scripts/upgrade-factory.ts --network <chain-name>
```

- Verify new factory implementation
```bash
$ npx hardhat verify <factory-address> --network <chain-name>
```

## Cleanup
- Cleanup smart contracts artifacts
```bash
$ npx hardhat clean
```