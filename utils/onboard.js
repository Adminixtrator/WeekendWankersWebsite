import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import coinbaseModule from '@web3-onboard/coinbase';

import ApeIcon from '../Ape';

const injected = injectedModule();

const walletConnectOptions = {
  projectId: 'LUCKY',
  requiredChains: [43114],
  optionalChains: [43113],
  dappUrl: 'https://getluckyonavax.xyz',
};

const initOnboard = init({
  wallets: [injected, walletConnectModule(walletConnectOptions), coinbaseModule()],
  chains: [ 

    {
      id: '0xa869',
      token: 'AVAX',
      label: 'Fuji Avalanche C-Chain',
      rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc'
    },
    {
      id: '0xa86a',
      token: 'AVAX',
      label: 'Avalanche C-Chain',
      rpcUrl: 'https://api.avax.network/ext/bc/C/rpc'
    },

  ],
  appMetadata: {
    name: 'Lucky Hands',
    icon: ApeIcon,
    description: 'LUCKY',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      { name: 'Rabby', url: 'https://rabby.io/'}
    ],
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy'
    },
    gettingStartedGuide: 'https://blocknative.com',
    explore: 'https://blocknative.com'
  }
});

export { initOnboard };

// flex absolute w-[75px] h-[30px] pt-[3px] top-3 left-3 justify-center items-center 

/* <button 
                onClick={mintNFT}
                disabled={isMinting || !isCorrectChain || !isMintActive || totalSupply >= maxSupply}
                className={`w-full py-3 px-6 text-xl rounded-lg text-white border ${
                  isMinting || !isCorrectChain || !isMintActive || totalSupply >= maxSupply ?
                  'border-red-800' : 'border-[#5cbb5c]'
                } transition ${
                  isMinting || !isCorrectChain || !isMintActive || totalSupply >= maxSupply 
                  ? 'bg-red-600 cursor-not-allowed opacity-70' 
                  : 'bg-gradient-to-r from-black to-[#5cbb5c] hover:to-[#5cbb5c]/80'
                }`}
              >*/