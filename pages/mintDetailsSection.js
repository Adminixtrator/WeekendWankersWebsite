import Image from 'next/image';

export default function MintDetailsSection() {
  return (
    <section className="py-16 border-b border-gold/20 flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left md:w-1/2 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 font-coiny">Mint Details 💰</h2>
        <p className="text-md md:text-lg italic text-white/70 mb-6">
          &ldquo;This isn&apos;t just an NFT. It&apos;s your hand. Play it right.&ldquo;
        </p>
        <div className="space-y-4 text-white/90 text-sm md:text-base">
          <p>Mint Price: <span className="text-gold">7.77 AVAX</span></p>
          <p>777 total supply, 231 already airdropped to whole coiners</p>
          <p>Revenue from first 100 paid mints → buybacks for staking rewards</p>
          <p>80% of remaining proceeds → Game prize pool</p>
          <p>20% of remaining proceeds → Marketing for Weekend Wankers & $Wankers</p>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
      <Image 
        src="/images/Nerd-31.jpg"
        alt="Gold Coins"
        width={320}
        height={320}
        className="w-64 h-64 md:w-80 md:h-80 object-cover float-bounce rounded-lg shadow-lg"
      />
      </div>
    </section>
  );
}