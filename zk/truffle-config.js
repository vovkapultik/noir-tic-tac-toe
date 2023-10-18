module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.4",
      settings: {
          optimizer: {
            enabled: true,
            runs: 200,
            details: {
              yul: true
            }
          },
        },
    }
  },
};
