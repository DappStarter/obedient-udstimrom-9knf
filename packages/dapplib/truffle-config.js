require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remind prosper inflict person forget top'; 
let testAccounts = [
"0x2e861d3829c99f8e9101c7105b0b4375fb0079d84a0668960c06b32ff51586de",
"0xcc5ddee9387f084ee69d6df906684094a455f904272c21b9f9cad484c028eae3",
"0xec49664c7069a033beb423d82dea909d70f9015baef79b0e550d0e472c87f093",
"0x03dd79190f99f3d55338019dc547197aaed7f5311ce43331ee32cf6bf3d915b5",
"0xd0a06874170effbc1b2b97deba1313d219ae4e4010018a40a34c82247e12b7c3",
"0xbb456697a10661059b7d1749da73028dd58850784cf7e9ae48af35ef9e9d1ab0",
"0x19aaaa9eb8b9f97fbc124643df9479932ff9e66e88267d4609b0faa71b25b3ae",
"0xfc0fe3f8c553a55d8337cf995135a7f1d49d6473a2f9a3b762194c66987eb095",
"0x9a15e81e0379a6dc2e9029e3b5a47b7b60ddd31a8e4e62324fd22913a0bc63c2",
"0x789ce7e2e2e5b54ce400f895fbf4c209957a89b13f593a6b32b1693782eb554c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

