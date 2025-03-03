import Head from "next/head";
import HeroSection from "./heroSection";
import HowItWorksSection from "./howItWorksSection";
import MintDetailsSection from "./mintDetailsSection";
import WhyLuckySection from "./whyLuckySection";
import FAQSection from "./fAQSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b to-[#0c4218] from-black text-white font-sans">
      <Head>
        <title>Lucky Hands NFT Mint</title>
        <meta name="description" content="Exclusive NFT mint for Lucky Hands" />
      </Head>
      <main className="max-w-5xl mx-auto py-10 px-4">
        <HeroSection />
        <HowItWorksSection />
        <MintDetailsSection />
        <WhyLuckySection />
        <FAQSection />
      </main>
    </div>
  );
}