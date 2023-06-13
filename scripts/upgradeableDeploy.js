const { ethers, upgrades } = require("hardhat")
const fs = require("fs");

let deployerAdd

async function main() {
  let [deployer] = await ethers.getSigners()
  deployerAdd = deployer.address;
  console.log("deployerAdd: ", deployerAdd)

  //@dev - Hardhat Upgradeable Token contract: deployment 

  const HHToken = await ethers.getContractFactory("HardhatUUPS")
  const hhToken = await upgrades.deployProxy(HHToken, []);
  await hhToken.deployed()

  hhTokenAddress = hhToken.address
  console.log("Token Address = ", hhTokenAddress);

  // @dev - Hardhat Upgradeable Token, minting on deployer address and checking it's balance 
  hhToken.balanceOf(deployerAdd).then(res => {

    console.log("Deployer Balance = ", ethers.utils.formatEther(res))
  })

  fs.appendFile("./scripts/address.txt",
    `\n //${Date()}
    TokenAddressUpgradeable = "${hhTokenAddress}"
    `, () => { }

  )

}
main()
