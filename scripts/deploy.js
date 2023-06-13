const { ethers } = require("hardhat")
const fs = require("fs");

let deployerAdd

async function main() {
    let [deployer] = await ethers.getSigners()
    deployerAdd = deployer.address;
    console.log("deployerAdd: ", deployerAdd)

    //@dev - Hardhat Token contract: deployment 
    const HHToken = await ethers.getContractFactory("Hardhat")
    const hhToken = await HHToken.deploy()
    hhTokenAddress = hhToken.address
    console.log("Token Address = ", hhTokenAddress);

    // @dev - Hardhat Token, minting on deployer address and checking it's balance 
    hhToken.balanceOf(deployerAdd).then(res => {

        console.log("Deployer Balance = ", ethers.utils.formatEther(res))
    })

    fs.appendFile("./scripts/address.txt",
        `\n //${Date()}
    const TokenAddress = "${hhTokenAddress}"
    `, () => { }

    )

}
main()
