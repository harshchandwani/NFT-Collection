require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


module.exports = {
  solidity: "0.8.17",
  networks: {
    "mantle-testnet": {
      url: process.env.MANTLE_DEPLOYMENT_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
}; 