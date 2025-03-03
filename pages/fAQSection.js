import Image from 'next/image';

export default function FAQSection() {
    return (
      <section className="py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 font-coiny">FAQ 🤔</h2>
          <div className="space-y-6 text-white/90 text-sm md:text-base">
            <div>
              <p className="font-semibold">Q: How do I play the Lucky Hands game?</p>
              <p>A: You&apos;ll need a Lucky Hands NFT + a TBA amount of $Lucky to enter each week.</p>
            </div>
            <div>
              <p className="font-semibold">Q: What happens if there&apos;s no jackpot winner?</p>
              <p>A: Prizes roll over to the next round.</p>
            </div>
            <div>
              <p className="font-semibold">Q: Is Lucky Hands part of $Lucky?</p>
              <p>A: 100%. Everything being built is designed to support & strengthen $Lucky.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Image 
            src="/images/IMG_2152.jpg"
            alt="Poker Chips"
            width={320}
            height={320}
            className="w-64 h-64 md:w-80 md:h-80 object-cover float-bounce rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  }