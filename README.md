
First install the relevant dependencies of the project:
.

```bash
yarn

forge install
```

To compile contracts, run:

```bash
forge build
```

Or, if you prefer hardhat, you can run:

```bash
npx hardhat compile
```

To run tests:

```bash
forge test
```

To export the ABIs of the contracts in the `/contracts` directory, run:

```
npx hardhat export-abi
```

To run any scripts in the `/scripts` directory, run:

```
npx hardhat run scripts/{path to the script}
```

