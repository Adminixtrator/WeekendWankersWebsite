import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import { config } from '../dapp.config'
import Image from 'next/image';


const LuckyWeekendWankersNFT = () => {
  const colors = {
    primary: '#7AB87A',
    secondary: '#A3D9A3',
    accent: '#4A8F4A',
    // background: 'linear-gradient(135deg, #f0f9f0 0%, #d7ecd7 100%)',
    background: 'linear-gradient(135deg, #d7ecd7 20%, #fff 80%)',
    text: '#2E4D2E',
    lucky: '#5cbb5c'
  };
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-coiny" style={{ background: '#000' }}>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 md:w-1/4 md:h-1/4 opacity-60 z-0 md:blur-sm md:block hidden" 
           style={{
             background: 'url("/images/Nerd-32.png") no-repeat',
             backgroundSize: 'contain',
             transform: 'rotate(-5deg)',
            //  height: '5rem',
             filter: 'blur(2px)'
           }}>
      </div>
      
      <header className="md:py-6 py-10 mb-6 flex justify-center items-center relative z-10 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 rounded-md m-2 md:px-24 px-4">
        <div className="md:w-[70%] w-full flex justify-between">
        <h1 className="md:text-2xl text-xl font-bold" style={{ color: colors.lucky }}>Weekend Wankers NFTs</h1>

        <div className="flex items-center gap-2">
          <nav aria-label="Contact Menu">
            <ul className="flex items-center space-x-4 md:space-x-8">
              <li className="cursor-pointer">
                <a href="https://hyperspace.xyz/collection/2571aEafC248cd79dA50af17b2Ef9E45912Ed027" target="_blank" rel="noreferrer">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 116 116"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: colors.lucky }}
                  >
                    <path
d="M31.287 0H60.9294L37.859 49.4941C35.8401 53.8252 34.8307 55.9908 35.1365 57.6451C35.4056 59.1002 36.3657 60.2833 37.8793 61.0247C39.6 61.8676 42.3669 61.8676 47.9005 61.8676H47.9006H67.6623C69.0457 61.8676 69.7374 61.8676 70.1676 62.0783C70.546 62.2637 70.786 62.5595 70.8533 62.9232C70.9297 63.3368 70.6774 63.8782 70.1727 64.961L60.8003 85.068H39.0625C22.4612 85.068 14.1606 85.068 8.99839 82.5393C4.45761 80.315 1.57727 76.7658 0.770191 72.4004C-0.147334 67.4375 2.88095 60.9408 8.93751 47.9474L31.287 0ZM84.5172 116L54.8748 116L77.9453 66.5059C79.9642 62.1748 80.9736 60.0092 80.6677 58.3549C80.3987 56.8998 79.4386 55.7167 77.925 54.9753C76.2043 54.1324 73.4374 54.1324 67.9036 54.1324H48.142C46.7586 54.1324 46.0669 54.1324 45.6367 53.9217C45.2583 53.7363 45.0183 53.4405 44.951 53.0768C44.8745 52.6632 45.1269 52.1218 45.6316 51.039L55.004 30.932L76.7418 30.932C93.3431 30.932 101.644 30.932 106.806 33.4607C111.347 35.685 114.227 39.2342 115.034 43.5996C115.952 48.5625 112.923 55.0592 106.867 68.0526L84.5172 116Z" fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://twitter.com/Weekend_Wankers"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: colors.lucky }}
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
              </li>


            </ul>
          </nav>
        </div>

        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-3 relative z-10">
        
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          
          <div className="flex flex-col items-center">
            
            <div className="md:w-[80%] w-full h-full overflow-hidden shadow-xl shadow-[#d7ecd7]/5 mx-16 rounded-md md:mb-8 mb-0 bg-white/5" style={{
              animation: `bounce 4s infinite 0s ease-in-out`,
            }}>
              <div className="w-full h-full object-cover md:block hidden">
                <Image 
                  src="/images/Nerd-22.jpg"
                  alt="Lucky NFT Character"
                  objectFit="cover"
                  layout="responsive"
                  height={600}
                  width={600}
                />
              </div>

              <div className="w-full h-full object-cover md:hidden block">
                <Image 
                  src="/images/Nerd-26.jpg"
                  alt="Lucky NFT Character"
                  objectFit="cover"
                  layout="responsive"
                  height={600}
                  width={600}
                />
              </div>
            </div>
            
              <Link href="/mint" passHref>
              <a className="md:hidden block my-12 font-coiny inline-flex items-center px-6 py-2 text-m text-3xl font-medium text-center rounded hover:text-white" style={{ color: colors.lucky }}>
                Mint WANKER here
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </Link>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 shadow-md border border-white border-opacity-30">
              <p className="text-sm text-justify" style={{ color: colors.lucky }}>
                This lucky adventure kicked off when a few $avax influencers shared a viral tweet. 
                Their followers struck gold without knowing it! Turn your luck around with our 
                free NFTs - join the lucky few today!
              </p>
            </div>
          </div>
          
          
          
          <div className="flex flex-col xl:mb-0 lg:mb-0 md:mb-16 mb-0">
          <div className="md:block hidden">
            <Link href="/mint" passHref>
                <a className="my-12 font-coiny px-6 inline-flex items-center text-m text-3xl font-medium text-center rounded hover:text-white" style={{ color: colors.lucky }}>
                  Mint WANKER here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 my-6 shadow-md flex flex-col border border-white border-opacity-30">
            <div className="mb-3">
              <p className="text-lg font-bold text-center my-4" style={{ color: colors.lucky }}>
                1,111 Lucky Wankers on Avalanche
              </p>

              <br />
              
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-black bg-opacity-30 backdrop-blur-md p-3 rounded-md shadow-md border-l-4" style={{ borderColor: colors.lucky }}>
                <p className="font-medium text-navajoWhite">
                    Wanklist Mint: January 21st, 4:20pm ET
                  </p>
                  <p style={{ color: colors.accent }}>Free for those Wanklisted, Max 1</p>
                  <div className="text-xs mt-1 flex items-center" style={{ color: colors.lucky }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                    Lucky chance to mint for FREE!
                  </div>
                </div>
                
                <div className="bg-black bg-opacity-30 backdrop-blur-md p-3 rounded-md shadow-sm border-l-4" style={{ borderColor: colors.lucky }}>
                  <p className="font-medium text-navajoWhite">
                    Public Mint: January 21st, 4:30pm ET
                  </p>
                  <p style={{ color: colors.accent }}>1 Avax, Max 10</p>
                  <div className="text-xs mt-1 flex items-center" style={{ color: colors.lucky }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Try your luck with multiple mints!
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm my-6" style={{ color: colors.text }}>
              Our mission? To bring luck to early supporters and create an NFT experience with real value.
            </p>
          </div>

          </div>


        </div>
      </main>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default LuckyWeekendWankersNFT;