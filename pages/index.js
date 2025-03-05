// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-900 flex flex-col items-center justify-center text-black font-comic-sans">
      <div className="absolute inset-0 bg-yellow-500 opacity-50"></div>
      <Head>
        <title>Lucky Coin</title>
        <meta name="description" content="Lucky Coin - A meme coin for those always in the moment!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="w-full bg-yellow-500 p-4 flex justify-between items-center shadow-xl fixed top-0 z-20 transform hover:scale-101 transition-all duration-300">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo.png"
            alt="Lucky"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold text-black font-coiny md:block hidden">Lucky Hands NFT</h1>
        </div>
        
        <div className="flex items-center gap-2 md:mr-6">
          <nav aria-label="Contact Menu">
            <ul className="flex items-center space-x-4 md:space-x-8">
              <li className="cursor-pointer">
                <a
                  href="https://hyperspace.xyz/collection/2571aEafC248cd79dA50af17b2Ef9E45912Ed027"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-yellow-900"
                    viewBox="0 0 116 116"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.287 0H60.9294L37.859 49.4941C35.8401 53.8252 34.8307 55.9908 35.1365 57.6451C35.4056 59.1002 36.3657 60.2833 37.8793 61.0247C39.6 61.8676 42.3669 61.8676 47.9005 61.8676H47.9006H67.6623C69.0457 61.8676 69.7374 61.8676 70.1676 62.0783C70.546 62.2637 70.786 62.5595 70.8533 62.9232C70.9297 63.3368 70.6774 63.8782 70.1727 64.961L60.8003 85.068H39.0625C22.4612 85.068 14.1606 85.068 8.99839 82.5393C4.45761 80.315 1.57727 76.7658 0.770191 72.4004C-0.147334 67.4375 2.88095 60.9408 8.93751 47.9474L31.287 0ZM84.5172 116L54.8748 116L77.9453 66.5059C79.9642 62.1748 80.9736 60.0092 80.6677 58.3549C80.3987 56.8998 79.4386 55.7167 77.925 54.9753C76.2043 54.1324 73.4374 54.1324 67.9036 54.1324H48.142C46.7586 54.1324 46.0669 54.1324 45.6367 53.9217C45.2583 53.7363 45.0183 53.4405 44.951 53.0768C44.8745 52.6632 45.1269 52.1218 45.6316 51.039L55.004 30.932L76.7418 30.932C93.3431 30.932 101.644 30.932 106.806 33.4607C111.347 35.685 114.227 39.2342 115.034 43.5996C115.952 48.5625 112.923 55.0592 106.867 68.0526L84.5172 116Z"
                      fill="currentColor"
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
                    className="w-6 h-6 text-yellow-900"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        
      <Link href="/mint" passHref>
            <a className="mt-32 font-coiny inline-flex items-center text-3xl font-medium text-center text-yellow-900 z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Mint $LUCKY here
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

      <main className="flex flex-col items-center justify-center p-6 w-full max-w-2xl relative z-10">
        <Image
          src="/images/Nerd-05-3.png"
          alt="Lucky Character"
          width={350}
          height={400}
          className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
        />
        <div className="bg-yellow-300 p-6 rounded-lg mt-2 shadow-xl transform hover:scale-102 transition-all duration-300 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <p className="mt-2 xl:text-md text-xl">
            Luck isn&apos;t random. It&apos;s a mindset.
            777 supply. Infinitely divisible. A meme coin for those who are always in the moment.
          </p>

        <h2 className="font-coiny mt-8 xl:text-xl text-2xl">ABOUT LUCKY COIN</h2>
          <p className="mt-2 xl:text-md text-xl">
            Lucky Coin isn&apos;t just a token-it&apos;s a way of thinking. Luck favors those who are present, prepared, and ready to act. With only 777 full coins, ownership is scarce, but luck isn&apos;t about how much you hold-it&apos;s about holding the right thing. This isn&apos;t another copy-paste token. It&apos;s a movement built on serendipity, discipline, and knowing when to click.
          </p>

          <p className="mt-6 font-bold xl:text-md text-xl">
            Stay sharp. Stay $lucky.
          </p>

          {/* <div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2">
          <div className="bg-transparent backdrop-blur-md p-3 rounded-md shadow-xl transform hover:scale-102 transition-all duration-300 border-l-4 border border-yellow-800 text-left">
              <p className="font-medium text-sm mb-2">
                Mint: January 21st, 4:20pm ET
              </p>
              <p>Free for those Wanklisted, Max 1</p>
              <div className="text-xs mt-2 flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
                Lucky chance to mint for FREE!
              </div>
            </div>
            <div className="bg-transparent backdrop-blur-md p-3 rounded-md shadow-xl transform hover:scale-102 transition-all duration-300 border-l-4 border border-yellow-800 text-left">
              <p className="font-medium text-sm mb-2">
                Public Mint: January 21st, 4:30pm ET
              </p>
              <p>1 Avax, Max 10</p>
              <div className="text-xs mt-2 flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                Try your luck with multiple mints!
              </div>
            </div>
          </div> */}
        </div>
      </main>


      <footer className="w-full bg-yellow-500 p-4 text-center text-black shadow-xl transform hover:scale-101 transition-all duration-300 mt-8 z-10">
        <Image
          src="/images/logo.png"
          alt="Lucky"
          width={30}
          height={30}
        />
        <p className="mt-2">© 2025 $Lucky. All rights reserved.</p>
      </footer>

      <style>{`
        @font-face {
          font-family: 'Coiny', 'Comic Neue', 'Comic Sans MS', sans-serif;
        }
        
        .font-open-sans {
          font-family: 'Comic Neue';
        }
      `}</style>
    </div>
  );
}