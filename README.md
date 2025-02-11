# NFT2.0 Protocol

Smart contracts for NFT2.0 Protocol, the universal WEB3 protocol for dynamic NFT, which achieves novel properties:
> - Dynamic - NFT data is stored onchain, hence immutable and ready for smart contracts logic.
> - Composable - ability to split or merge NFT values.
> - Derivable - ability to derive child (derivative) NFT from parent (underlying) NFT to use or rent out.

## Prerequisites

- [NodeJS v18.x](https://nodejs.org/en)
- [Hardhat v2.19.x](https://hardhat.org/)
- [OpenZeppelin v4.x](https://docs.openzeppelin.com/contracts/4.x/)
- [Foundry](https://book.getfoundry.sh/)

## Architecture

- [Class diagram](./docs/class-diagram.md)

- Main classes:
> 1. Factory: in charge of creating Data registries, NFT collections, Derived accounts, ERC6551 accounts. It also manages a self-registry in order to lookup all aforementioned entities.
> 2. DataRegistryV2: the smart contract template of data registry, which is used by the factory. The data registry would implement protocol interfaces: IDynamicV2, IDerivablesV2. The data registry is also in charge of creating the derived account, which essentially is a Token-bound-account (ERC6551) of underlying NFT, where the royalty commission will be accrued.
> 3. Collection: the smart contract template of NFT collection, which is used by the factory. The NFT collection would implement standard ERC721 interface and other extensions, which is included but not limited to: ERC2981 (royalty), Soul Bound Token, Free mint, etc. Collection also implements our proprietary interface Semi-Transferable.
> 4. DerivedAccount: Token bound account (ERC6551) for underlying NFT, which accrues royalty commission of derived NFT. We intentionally divert the royalty commission to derived account, in order to properly distribute royalty to both NFT owner (derived-NFT creator) and NFT creator. Anyone can claim royalty on derived account in a permissionless manner, provided that he pays sufficient gas, in this case, royalty commission will be distributed pro-rata to NFT owner and NFT creator.
> 5. Addons: addons for ERC721 collections, which is included but not limited to: Whitelisted freemint, etc.

## Foundry development

- Please refer to [Foundry guide](./foundry.md).

## Hardhat development

- Plase refer to [Hardhat guide](./hardhat.md).

## Audit

- Refer to [Audit Smart contracts](./audit/README.md) for details.

## License

Copyright belongs to [DareNFT - Alpha Waves PTE. LTD](https://darenft.com/), 2023-2025
