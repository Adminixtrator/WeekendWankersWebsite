import Head from "next/head";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import MintDetailsSection from "./MintDetailsSection";
import WhyLuckySection from "./WhyLuckySection";
import FAQSection from "./FAQSection";

export default function Home() {
  return (    
    <div className="min-h-screen bg-gradient-to-b to-[#0c4218] from-black text-white font-sans">
      <Head>
        <title>Weekend Wankers NFT Mint</title>
        <meta name="description" content="Exclusive NFT mint for Weekend Wankers" />
      </Head>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-radial from-[#614b2a]/20 to-transparent opacity-50" />
        
        <div className="absolute top-10 left-10 w-12 h-12 bg-[#5cbb5c] rounded-full border-2 border-[#111] animate-float delay-0" />
        <div className="absolute bottom-20 right-16 w-12 h-12 bg-[#ffffff] rounded-full border-2 border-[#111] animate-float delay-200" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-[#2461b8] rounded-full border-2 border-[#111] animate-float delay-400" />

        <div className="absolute top-20 left-1/4 w-16 h-24 bg-[#f9423a] rounded-md border border-black transform rotate-12 animate-float delay-600" />
        <div className="absolute bottom-1/3 right-20 w-16 h-24 bg-[#5cbb5c] rounded-md border border-black transform -rotate-6 animate-float delay-800" />
      </div>

      <main className="max-w-5xl mx-auto py-10 px-4 relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <MintDetailsSection />
        <WhyLuckySection />
        <FAQSection />
      </main>

      <style>{`
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