require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note magic assume hockey kite army gesture'; 
let testAccounts = [
"0xd3c82765ae248ecf04b8e2d5c5e66d9f189116105060439d111c29d1e7b1d8c2",
"0xbf4e900059d2313e2b7352079d32fdd3ae22af61acea2547fe7e30d859af618a",
"0x5d7b5e550e0a56a741a9979732ce21d14071ff26c0da8c965ace773e9bfbc0b0",
"0x09a564430901228cae7390ac0f4b4da7d8b7672187954f01fff4e19b9833397e",
"0x578056948409cb4235899ed59ad5bd7581898e20f9a62944b23e2955429bf02e",
"0xbf1491b1d1646b264030664c98590673c5935072848d8c35a22dc7bde51d7962",
"0x9048e28d56048c54dbfbbbd2a150e2cd33383ddae4b37cdede44da0d8128bde2",
"0xcb2df8c96d9cedf7fbe7f5b216b9072ca2f0df73321a24566fda27fcf5a4600a",
"0xec824af7143a3e6a8eaeb4870ed748d33a7942801cf77021f43704d3c29f37dd",
"0xa865c14862b9492458dcdfad07413fcad18edd77f7cb32bb48f6b3e5d3035756"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

