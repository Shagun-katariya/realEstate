require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_amoy";
const NEXT_PUBLIC_PRIVATE_KEY = "59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
    networks: {
      // hardhat: {
      //   chainId: 31337,
      // },
      polygon_amoy: {
        url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
        accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
      },
    },
  },
};
