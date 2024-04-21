require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./tasks/block-number.js")
require("hardhat-gas-reporter")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "KEY"
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "KEY"
const COIN_MARKET_CAP_KEY = process.env.COIN_MARKET_CAP_KEY || "KEY"
module.exports = {
    solidity: "0.8.8",
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COIN_MARKET_CAP_KEY,
        token: "MATIC",
    },
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [SEPOLIA_PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
}
