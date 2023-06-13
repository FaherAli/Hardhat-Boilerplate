require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

const key = "7604a4b90c9893f153a917924625bd575d75bc9260a39cfb66cf2f3c0e5cf88e"

// /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.8.9",
      },
      {
        version: "0.8.18",
        settings: {},
      },
    ],
  },
  networks: {
    TRedLC: {
      url: "https://dataseed-testnet.redlightscan.finance/",
      accounts: [key],
    },
    RedLC: {
      url: "https://dataseed2.redlightscan.finance/",
      accounts: [key],
    },
    TBsc: {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545/",
      accounts: [key],
    },
    Bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [key],
    },
    Polygon: {
      url: "https://polygon-rpc.com/",
      accounts: [key],
    },
    TPolygon: {
      url: "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78",
      accounts: [key],
    },
    Ftm: {
      url: "https://rpcapi.fantom.network",
      accounts: [key],
    },
    TFtm: {
      url: "https://rpc.testnet.fantom.network/",
      accounts: [key],
    },
  },
  settings: {
    optimizer: {
      enabled: false,
      runs: 200,
    },
  },
};