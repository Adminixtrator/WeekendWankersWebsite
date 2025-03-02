import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import MyContractABI from "../contracts/MyContractABI.json";
import { config } from "../dapp.config";
import Image from "next/image";
import QuantitySelector from "./quantitySelector";

// Network settings
const REQUIRED_CHAIN_ID = "0x1"; // Ethereum Mainnet (1 in hex)
const NETWORK_NAME = "Ethereum Mainnet";

function Mint() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(5);
  const [isMinting, setIsMinting] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCorrectChain, setIsCorrectChain] = useState(false);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const increment = () => {
    if (quantity < maxValue) {
      const newValue = quantity + 1;
      setQuantity(newValue);
    }
  };
  
  const decrement = () => {
    if (quantity > minValue) {
      const newValue = quantity - 1;
      setQuantity(newValue);
    }
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
      console.error("Error switching network:", error);
      setErrorMessage(`Please switch to ${NETWORK_NAME} in your wallet`);
      return false;
    }
  }

  async function checkIfWalletIsConnected() {
    try {
      // if (window.ethereum) {
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
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
        
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          } else {
            setAccount(null);
          }
        });
        
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
      // } else {
      //   setErrorMessage("Please install MetaMask or another Ethereum wallet");
      // }
    } catch (error) {
      console.error(error);
      // setErrorMessage("Error connecting to wallet");
    }
  }

  async function connectWallet() {
  try {
    if (window.ethereum) {
      const providers = [];
      
      if (window.ethereum.isMetaMask) providers.push("MetaMask");
      if (window.ethereum.isCoinbaseWallet) providers.push("Coinbase Wallet");
      if (window.ethereum.isWalletConnect) providers.push("WalletConnect");
      if (window.ethereum.isTrust) providers.push("Trust Wallet");
      if (window.ethereum.isTokenary) providers.push("Tokenary");
      
      if (providers.length > 0) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        
        setAccount(accounts[0]);
        
        const correctChain = await checkNetwork();
        if (!correctChain) {
          alert(`You are on the wrong network. Please switch to ${NETWORK_NAME}`);
        }
      } else {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setAccount(accounts[0]);
      }
    } else {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.open('https://apps.apple.com/us/app/metamask/id1438144202', '_blank');
        } else {
          window.open('https://play.google.com/store/apps/details?id=io.metamask', '_blank');
        }
      } else {
        window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn', '_blank');
      }
      
      setErrorMessage("No Ethereum wallet detected. Please install MetaMask or another wallet.");
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
      alert(`You are on the wrong network. Please switch to ${NETWORK_NAME}`);
      const switched = await switchNetwork();
      if (!switched) return;
    }
    
    try {
      setIsMinting(true);
      setErrorMessage("");
      
      const totalPrice = ethers.utils.parseEther(
        (config.price * quantity).toString()
      );
      
      const transaction = await contract.publicSaleMint(quantity, {
        value: totalPrice
      });
      
      setTransactionHash(transaction.hash);
      
      await transaction.wait();
      
      setIsMinting(false);
      alert(`Successfully minted ${quantity} ${config.title}!`);
    } catch (error) {
      console.error("Error minting NFT:", error);
      setIsMinting(false);
      handleMintError(error);
    }
  }

  function handleMintError(error) {
    if (error.code === "INSUFFICIENT_FUNDS") {
      setErrorMessage("INSUFFICIENT_FUNDS + GAS for mint");
    } else {
      setErrorMessage(error.message || "Failed to mint NFT");
    }
  }

  const colors = {
    button: "linear-gradient(135deg,rgb(91, 176, 91) 20%, #000 80%)",
    mintbutton: "linear-gradient(135deg, #000 20%, rgb(91, 176, 91) 80%)",
  };

  // 5cbb5c
  
  return (
    <div className="flex h-full w-full justify-center items-center font-coiny">

      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 md:w-1/4 md:h-1/4 opacity-60 z-0 md:blur-sm md:block hidden" 
          style={{
            background: 'url("/images/Nerd-32.png") no-repeat',
            backgroundSize: "contain",
            transform: "rotate(-5deg)",
          //  height: "5rem",
            filter: "blur(2px)"
          }}>
      </div>

        <div className="absolute my-auto md:top-32 top-2 py-10 px-6 flex-col justify-center rounded-lg xl:w-[55%] mx-4 w-[95%] bg-black bg-opacity-10 backdrop-blur-md rounded-lg p-4 shadow-md border border-white border-opacity-30">
            <h1 className="md:text-4xl text-3xl text-[#5cbb5c] text-center mb-12">PUBLIC SALE</h1>

            <div className="xl:flex lg:flex md:flex justify-between gap-8 items-center">
                <div className="flex justify-left xl:w-[50%] w-full xl:pl-16 lg:pl-0 pl-0">
                  <div className="rounded-md md:hidden block inset-0 border border-[#5cbb5c] h-full w-full border-opacity-50">
                    <Image 
                        src="/images/Nerd-27.jpg"
                        alt="Lucky NFT Character"
                        objectFit="cover"
                        layout="responsive"
                        height={270}
                        width={240}
                        className="rounded-md object-cover"
                    />
                  </div>

                  <div className="rounded-md md:block hidden inset-0 border border-[#5cbb5c] lg:w-full lg:h-full md:h-full md:w-full h-[320px] w-[260px] border-opacity-50">
                    <Image 
                        src="/images/Nerd-27.jpg"
                        alt="Lucky NFT Character"
                        objectFit="cover"
                        layout="responsive"
                        height={320}
                        width={260}
                        className="rounded-md object-cover"
                    />
                  </div>

                    <div className="absolute py-2 px-4 bg-black border-white rounded-md text-navajoWhite mx-2 my-2"> 
                      0 <span className="text-white">/ 0</span>
                    </div>
                </div>
            
                
                <div className="flex-col md:pr-8 pr-0 xl:w-[50%] w-full justify-center items-center">

                    <div className="flex items-center xl:justify-center justify-between mb-12 xl:mt-0 mt-12">
                        <button 
                            onClick={decrement}
                            disabled={quantity <= minValue}
                            style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "10px",
                            border: "none",
                            backgroundColor: quantity <= minValue ? "#262221" : "#5cbb5c",
                            color: "white",
                            fontSize: "20px",
                            cursor: quantity <= minValue ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                            }}
                        >
                            −
                        </button>
                        
                        <div style={{
                            margin: "0 15px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            width: "40px",
                            color: "white",
                            textAlign: "center"
                        }}>
                            {quantity}
                        </div>
                        
                        <button 
                            onClick={increment}
                            disabled={quantity >= maxValue}
                            style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "10px",
                            border: "none",
                            backgroundColor: quantity >= maxValue ? "#262221" : "#5cbb5c",
                            color: "white",
                            fontSize: "20px",
                            cursor: quantity >= maxValue ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                            }}
                        >
                            +
                        </button>
                    </div>

                    <div className="h-[1.5px] bg-white bg-opacity-30" />
                      <div className="flex text-navajoWhite justify-between xl:w-[70%] w-full text-2xl mx-auto my-5">
                        <p>Total</p>

                        <p>{quantity} ETH <span className="text-[#e9e9e9]">+ GAS</span></p>

                      </div>
                      <div className="h-[1.5px] bg-white bg-opacity-30" />

                      {!account ? (
                        <div>
                          <button 
                            onClick={connectWallet}
                            className="py-4 px-6 text-2xl rounded-2xl text-white border border-[#5cbb5c] w-full mx-auto mt-12" style={{background: colors.button}}>
                            CONNECT WALLET
                          </button>
                          {errorMessage && <p className="mt-4 text-center font-mono text-[#db3434] text-sm">{errorMessage}</p>}
                        </div>
                      ) : (

                        <div>
                          <p className="font-mono font-semibold text-sm text-center text-[#1dadeb] mt-6 mb-2">
                              Connected: {account.substring(0, 6)}...{account.substring(account.length - 4)}
                          </p>

                          <button 
                            onClick={mintNFT}
                            disabled={isMinting || quantity > config.maxMintAmount || !isCorrectChain}
                            className="py-4 px-6 text-2xl rounded-2xl text-white border border-[#5cbb5c] w-full mx-auto mt-4" style={{
                              background: !isCorrectChain ? "red" : colors.mintbutton,
                              cursor: isMinting || !isCorrectChain ? "not-allowed" : "pointer",
                              opacity: isMinting ? 0.7 : 1
                            }}>
                            {isMinting ? "Minting..." : `Mint ${quantity} Wanker${quantity > 1 ? "s" : ""}`}
                          </button>
                          
                          {errorMessage && <p className="mt-4 text-center font-mono text-[#db3434] text-sm">{errorMessage}</p>}
                          
                          {transactionHash && (
                            <p className="font-mono font-semibold text-sm text-center text-[#1dadeb] mt-6 mb-2">
                              Transaction: 
                                <a 
                                href={`https://etherscan.io/tx/${transactionHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginLeft: "5px", color: "#3498db" }}
                                >
                                View on Etherscan
                                </a>
                            </p>
                          )}
                        </div>
                      )}

                    {!isCorrectChain && account && (
                    <div style={{ 
                        backgroundColor: "#FFEBEE", 
                        color: "#D32F2F", 
                        padding: "10px", 
                        borderRadius: "5px",
                        margin: "10px 0",
                        textAlign: "center"
                        }}>
                        <p style={{ margin: "0 0 10px 0" }}>
                            You&quot;re connected to the wrong network! Switch to {NETWORK_NAME}
                        </p>
                        </div>
                    )}

                </div>
            </div>

            <div>
                <div className="h-[0.5px] bg-[#5cbb5c] bg-opacity-40 w-full mt-12"/>
                <h1 className="text-navajoWhite text-center mb-4 mt-8 text-2xl">CONTARCT ADDRESS</h1>
                <p className="text-sm font-mono text-white text-center">{config.contractAddress}</p>
                    
            </div>
            
        </div>
    </div>
  );
}

export default Mint;