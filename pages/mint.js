// pages/index.js

import Head from "next/head";
import HeroSection from "./heroSection";
import HowItWorksSection from "./howItWorksSection";
import MintDetailsSection from "./mintDetailsSection";
import WhyLuckySection from "./whyLuckySection";
import FAQSection from "./fAQSection";

export default function Home() {
  return (    
    <div className="min-h-screen bg-gradient-to-b from-yellow-900 to-yellow-500 flex flex-col items-center justify-center text-black font-coiny">
      <Head>
        <title>Lucky Hands NFT Mint</title>
        <meta name="description" content="Exclusive NFT mint for Lucky Hands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add comic-style font if needed */}
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-radial from-yellow-300/20 to-transparent opacity-50" />
        
        <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-500 rounded-full border-2 border-yellow-800 animate-float delay-0" />
        <div className="absolute bottom-20 right-16 w-12 h-12 bg-yellow-300 rounded-full border-2 border-yellow-800 animate-float delay-200" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-yellow-600 rounded-full border-2 border-yellow-800 animate-float delay-400" />

        <div className="absolute top-20 left-1/4 w-16 h-24 bg-red-600 rounded-md border border-yellow-800 transform rotate-12 animate-float delay-600" />
        <div className="absolute bottom-1/3 right-20 w-16 h-24 bg-yellow-500 rounded-md border border-yellow-800 transform -rotate-6 animate-float delay-800" />
      </div>

      <main className="max-w-5xl mx-auto py-10 px-4 relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <MintDetailsSection />
        <WhyLuckySection />
        <FAQSection />
      </main>

      <style>{`
        @font-face {
          font-family: 'Comic Sans MS';
          src: local('Comic Sans MS'), url('/comicsans.woff2') format('woff2');
        }

        .font-coiny {
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .delay-0 { animation-delay: 0s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
}