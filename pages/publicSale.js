import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import MyContractABI from "../contracts/MyContractABI.json";
import { config } from "../dapp.config";
import Image from "next/image";

export default function PublicSale() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [minValue] = useState(1);
  const [maxValue] = useState(5);
  const [isMinting, setIsMinting] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCorrectChain, setIsCorrectChain] = useState(false);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const increment = () => {
    if (quantity < maxValue) setQuantity(quantity + 1);
  };
  
  const decrement = () => {
    if (quantity > minValue) setQuantity(quantity - 1);
  };

  async function checkNetwork() {
    try {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      setIsCorrectChain(chainId === REQUIRED_CHAIN_ID);
      return chainId === REQUIRED_CHAIN_ID;
    } catch (error) {
      console.error("Error checking network:", error);
      return false;
    }
  }

  async function switchNetwork() {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: REQUIRED_CHAIN_ID }],
      });
      return true;
    } catch (error) {
      // This error code indicates the chain has not been added to MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [AVALANCHE_NETWORK_PARAMS],
          });
          return true;
        } catch (addError) {
          console.error("Error adding Avalanche network:", addError);
          setErrorMessage(`Please add the ${NETWORK_NAME} to your wallet`);
          return false;
        }
      }
      console.error("Error switching network:", error);
      setErrorMessage(`Please switch to ${NETWORK_NAME} in your wallet`);
      return false;
    }
  }

  async function checkIfWalletIsConnected() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        
        const correctChain = await checkNetwork();
        
        if (correctChain) {
          const signer = provider.getSigner();
          const nftContract = new ethers.Contract(
            config.contractAddress,
            MyContractABI,
            signer
          );
          setContract(nftContract);
        }
        
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) setAccount(accounts[0]);
        
        window.ethereum.on("accountsChanged", (accounts) => {
          setAccount(accounts.length > 0 ? accounts[0] : null);
        });
        
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function connectWallet() {
    try {
      if (!window.ethereum) {
        setErrorMessage("No Ethereum wallet detected. Please install MetaMask.");
        return;
      }
      
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      
      const correctChain = await checkNetwork();
      if (!correctChain) {
        const confirmSwitch = window.confirm(`Please switch to ${NETWORK_NAME}`);
        if (confirmSwitch) {
          await switchNetwork();
        }
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setErrorMessage("Failed to connect wallet");
    }
  }

  async function mintNFT() {
    if (!account || !contract) return;
    
    const correctChain = await checkNetwork();
    if (!correctChain) {
      const switched = await switchNetwork();
      if (!switched) return;
    }
    
    try {
      setIsMinting(true);
      setErrorMessage("");
      
      const totalPrice = ethers.utils.parseEther((config.price * quantity).toString());
      const transaction = await contract.publicSaleMint(quantity, { value: totalPrice });
      setTransactionHash(transaction.hash);
      
      await transaction.wait();
      
      setIsMinting(false);
      alert(`Successfully minted ${quantity} ${config.title}!`);
    } catch (error) {
      console.error("Error minting NFT:", error);
      setIsMinting(false);
      setErrorMessage(error.code === "INSUFFICIENT_FUNDS" ? "Insufficient funds + gas" : "Failed to mint NFT");
    }
  }

  return (
    <div className="flex flex-col items-center w-full font-coiny text-white">
      <h1 className="text-3xl md:text-4xl text-yellow-400 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">PUBLIC SALE</h1>

      <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
        <div className="flex relative justify-center md:w-1/2">
          <div className="rounded-md border border-[#5cbb5c]/50 overflow-hidden h-[320px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <Image 
              src="/images/green.jpeg"
              alt="Lucky NFT Character"
              width={260}
              height={320}
              objectFit="responsive"
              className="object-cover"
            />
            <div className="absolute w-[55px] top-3 left-7 py-1 px-2 bg-[#0c4218] border border-[#5cbb5c]/30 rounded-md text-white text-sm z-10">
              0 <span className="text-[#5cbb5c]">/ 0</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:w-1/2 items-center mt-8">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={decrement}
              disabled={quantity <= minValue}
              className={`w-12 h-12 rounded-lg text-white text-2xl flex items-center justify-center ${quantity <= minValue ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#5cbb5c] hover:bg-[#5cbb5c]/80'}`}
            >
              −
            </button>
            <span className="mx-4 text-xl font-bold text-white">{quantity}</span>
            <button 
              onClick={increment}
              disabled={quantity >= maxValue}
              className={`w-12 h-12 rounded-lg text-white text-2xl flex items-center justify-center ${quantity >= maxValue ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#5cbb5c] hover:bg-[#5cbb5c]/80'}`}
            >
              +
            </button>
          </div>

          <div className="h-px bg-[#5cbb5c]/30 w-full mb-4" />
          <div className="flex justify-between w-full text-xl text-white mb-4">
            <p>Total</p>
            <p>{quantity * 7.77} <span className="text-orange-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">AVAX</span></p>
          </div>
          <div className="h-px bg-[#5cbb5c]/30 w-full mb-6" />

          {!account ? (
            <div className="w-full">
              <button 
                onClick={connectWallet}
                className="w-full py-3 px-6 text-xl bg-green-900 text-white border border-green-600 rounded-lg hover:bg-yellow-900/80 transition drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
              >
                CONNECT WALLET
              </button>
              {errorMessage && <p className="mt-4 text-center text-red-800 text-sm">{errorMessage}</p>}
            </div>
          ) : (
            <div className="w-full">
              <p className="text-sm text-center text-[#5cbb5c] mb-2">
                Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}
              </p>
              <button 
                onClick={mintNFT}
                disabled={isMinting || quantity > config.maxMintAmount || !isCorrectChain}
                className={`w-full py-3 px-6 text-xl rounded-lg text-white border border-[#5cbb5c] transition ${isMinting || !isCorrectChain ? 'bg-red-600 cursor-not-allowed opacity-70' : 'bg-gradient-to-r from-black to-[#5cbb5c] hover:to-[#5cbb5c]/80'}`}
              >
                {isMinting ? "Minting..." : `Mint ${quantity} NFT${quantity > 1 ? "s" : ""}`}
              </button>
              {errorMessage && <p className="mt-4 text-center text-red-800 text-sm">{errorMessage}</p>}
              {transactionHash && (
                <p className="mt-4 text-center text-[#5cbb5c] text-sm">
                  Transaction: 
                  <a href={`https://snowtrace.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer" className="underline ml-1">
                    View on Snowtrace
                  </a>
                </p>
              )}
              {!isCorrectChain && (
                <p className="mt-4 text-center text-red-500 text-sm">
                  Please switch to {NETWORK_NAME}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="h-px bg-yellow-400/40 w-full mb-4" />
        <h1 className="text-lg text-white font-semibold text-center mb-2">CONTRACT ADDRESS</h1>
        <p className="text-sm text-yellow-400 text-center break-all drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{config.contractAddress}</p>
      </div>
    </div>
  );
}

const REQUIRED_CHAIN_ID = "0xa86a";
const NETWORK_NAME = "Avalanche C-Chain";

const AVALANCHE_NETWORK_PARAMS = {
  chainId: REQUIRED_CHAIN_ID,
  chainName: "Avalanche C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18
  },
  rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://snowtrace.io/"]
};