import Image from 'next/image';

export default function WhyLuckySection() {
  return (
    <section className="py-16 border-b border-gold/20 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
      <Image 
        src="/images/Nerd-30.jpg"
        alt="Lucky Clover"
        width={320}
        height={320}
        className="w-64 h-64 md:w-80 md:h-80 object-cover float-bounce rounded-lg shadow-lg"
      />
      </div>
      <div className="md:w-1/2 px-4">
        <h2 className="text-2xl font-bold text-gold text-center md:text-left mb-8 font-coiny">Why This Supports $LUCKY 🍀</h2>
        <p className="text-white/90 text-sm md:text-base">Everything being built fuels $LUCKY&apos;s value:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-white/90 text-sm md:text-base">
          <li>Staking locks supply, increasing value</li>
          <li>The game creates demand & buy pressure for $LUCKY</li>
          <li>The mint funds buybacks, staking rewards, and game prizes</li>
        </ul>
        <p className="mt-6 text-md md:text-lg text-white/80">
          Lucky Hands isn&apos;t separate from $LUCKY. It strengthens it.
        </p>
        <p className="text-sm md:text-md text-white/60 italic mt-2">
          &ldquo;Only 777 can sit at this table. Don&apos;t miss your chance.&ldquo;
        </p>
      </div>
    </section>
  );
}