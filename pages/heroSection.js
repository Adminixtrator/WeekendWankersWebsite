export default function HeroSection() {
  return (
    <section className="py-20 border-b border-gold/20 flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left md:w-1/2 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gold tracking-tight">
          Lucky Hands NFT Mint
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-white/90">7.77 AVAX</p>
        <p className="text-lg md:text-xl mt-2 italic text-white/70">
          "777 hands. Only the best will sit at the table."
        </p>
        <div className="mt-6">
          <p className="text-md md:text-lg">Mint Price: <span className="text-gold">7.77 AVAX</span></p>
          <p className="text-md md:text-lg">Supply: <span className="text-gold">777 Total</span></p>
          <p className="text-md md:text-lg">Mint Date: <span className="text-gold">Next Week (TBA)</span></p>
        </div>
        <button className="mt-8 px-6 py-3 bg-gold text-black font-semibold rounded-full hover:bg-gold/80 transition">
          Connect Wallet & Mint
        </button>
        <p className="mt-6 text-md md:text-lg text-white/80">
          🎭 Your Lucky Hands NFT = Your Seat at the Game.
        </p>
        <p className="text-sm md:text-md text-white/60">Only Lucky Hands holders can play. Only Lucky holders can win.</p>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img 
          src="/images/Nerd-26.jpg" 
          alt="Lucky Hands NFT" 
          className="w-64 h-64 md:w-80 md:h-80 object-cover float-bounce rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}