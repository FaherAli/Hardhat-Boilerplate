# Sample Hardhat Project

All required initial packages mention in package.json file.

```shell
npm i
```
Upgradeable and non-upgradeable contracts, in contracts folder. modify it as per requirement 

```shell
npx hardhat compile
```
Un-comment .env module in `.gitignore` file

in .env you have common used networks and Private key

in hardhat.config.js all networks created accordingly, you just need to mention network name while deploying a contract

```shell
npx hardhat run ./scripts/deploy.js --network TBsc
```
in above command choose run required file and choose required network

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
