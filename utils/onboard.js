import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import coinbaseModule from '@web3-onboard/coinbase';

import ApeIcon from '../Ape';

const injected = injectedModule();

const walletConnectOptions = {
  projectId: 'SEEDWORDS',
  requiredChains: [43114],
  optionalChains: [43113],
  dappUrl: 'http://sweep.wtf',
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
    name: 'SEEDWORDS',
    icon: ApeIcon,
    description: 'Seed Words',
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
