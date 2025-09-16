# Primea Protocol Meta

Single source of truth for **chain metadata**, **contract addresses**, and **token lists** used across the Primea DEX stack.

## Why this exists
- Keep addresses & chain config out of app/contract repos to avoid drift.
- Provide one import path when we later publish `@primea/addresses`.

## Contents
- `packages/addresses/src/addresses.json` — canonical addresses (placeholders until deployment).
- `token-lists/primea.testnet.tokenlist.json` — testnet base tokens (placeholders).

## Versioning
- Phase 0 tag: `primea-dex-RC1`
- When contracts are deployed, update `addresses.json` and cut `RC2`, etc.

## Notes
- Chain IDs: **698369** (mainnet), **1698369** (testnet)
- Base tokens: **GOLDPN** (native/gas), **USDP**, **PRIM**
