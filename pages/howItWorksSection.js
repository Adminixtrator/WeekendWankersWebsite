import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section className="py-16 border-b border-gold/20 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        <Image
          src="/images/Nerd-28.jpg"
          alt="Poker Table"
          width={320}
          height={320}
          className="w-64 h-64 md:w-80 md:h-80 object-cover float-bounce rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gold text-center md:text-left mb-8 font-coiny">How The Game Works 🃏</h2>
        <p className="text-center md:text-left text-md md:text-lg italic text-white/70 mb-6">
          It&apos;s poker, but you don&apos;t have to play your hand. You just have to hold it.
        </p>
        <div className="space-y-4 text-white/90 text-sm md:text-base">
          <p>Each week, a new deck contract is deployed (52 cards) with VRF:</p>
          <ul className="list-disc pl-6">
            <li>Monday - Flop (3 cards)</li>
            <li>Tuesday - Turn (1 card)</li>
            <li>Wednesday - River (1 card)</li>
            <li>Thursday - Jackpot Card 1</li>
            <li>Friday - Jackpot Card 2</li>
          </ul>
          <p className="mt-4 font-semibold">Two ways to win:</p>
          <p>1. Best poker hand of the week = weekly prize</p>
          <p>2. Match jackpot cards = jackpot payout</p>
          <p className="text-white/60">Jackpot prizes roll over if there&apos;s no winner.</p>
          <p className="mt-4 text-gold">🚨 You&apos;ll need a Lucky Hands NFT & $LUCKY to play each week.</p>
        </div>
      </div>
    </section>
  );
}