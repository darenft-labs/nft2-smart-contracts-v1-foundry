# Foundry
The development guide for Foundry.

## Setup

- Create `.env` file from template

```sh
$ cp .env.example .env
```

then populate all necessary credentials and secrets.

- Install dependencies

```sh
$ forge install foundry-rs/forge-std
$ forge install OpenZeppelin/openzeppelin-foundry-upgrades
$ forge install OpenZeppelin/openzeppelin-contracts@v4.9.6
$ forge install OpenZeppelin/openzeppelin-contracts-upgradeable@v4.9.6
$ forge install erc6551=erc6551/reference
$ forge install erc721a=chiru-labs/ERC721A-Upgradeable
```

## Compile

- Build contracts with commands

```sh
$ forge build
```

## Test

- TBD

## Script

- Upgrade Factory contract

```sh
$ forge script script/UpgradeFactoryScript.s.sol \
--rpc-url <rpc-endpoint> --broadcast -vvvv
```

- Update ERC1155 implementation for Factory contract

```sh
$ forge script script/Update1155ImplementationScript.s.sol \
--rpc-url <rpc-endpoint> --broadcast -vvvv
```

## Verify

- Verify implementation contracts

```sh
$ forge verify-contract \
--rpc-url <rpc-endpoint> \
--verifier blockscout --verifier-url 'https://testnet.derachain.com/api/' \
<deployed-address> <path/to/Contract.sol:ContractName>
```

## Clean

- Clean compiled artifacts

```sh
$ forge clean
```