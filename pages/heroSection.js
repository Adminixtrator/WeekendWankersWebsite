import { useState, useEffect } from 'react';
import Image from 'next/image';
import PublicSale from './publicSale';

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isPopupOpen]);

  return (
    <section className="py-20 border-b border-gold/20 flex flex-col md:flex-row items-center justify-between relative">
      <div className="text-center md:text-left md:w-1/2 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gold tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Weekend Wankers NFT Mint
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-white/90 drop-shadow-md">7.77 AVAX</p>
        <p className="text-lg md:text-xl mt-2 italic text-white/70 drop-shadow-md">
          "777 hands. Only the best will sit at the table."
        </p>
        <div className="mt-6">
          <p className="text-md md:text-lg">Mint Price: <span className="text-gold">7.77 AVAX</span></p>
          <p className="text-md md:text-lg">Supply: <span className="text-gold">777 Total</span></p>
          <p className="text-md md:text-lg">Mint Date: <span className="text-gold">Next Week (TBA)</span></p>
        </div>
        <button 
          onClick={togglePopup}
          className="mt-8 px-6 py-3 bg-gold text-black font-semibold rounded-full hover:bg-gold/80 transition shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        >
          Connect Wallet & Mint
        </button>
        <p className="mt-6 text-md md:text-lg text-white/80 drop-shadow-md">
          🎭 Your Weekend Wankers NFT = Your Seat at the Game.
        </p>
        <p className="text-sm md:text-md text-white/60 drop-shadow-md">
          Only Weekend Wankers holders can play. Only Lucky holders can win.
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <Image 
          src="/images/Nerd-26.jpg"
          alt="Weekend Wankers NFT"
          width={320}
          height={320}
          className="w-64 h-64 md:w-80 md:h-80 object-cover float-bounce rounded-lg shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        />
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="rounded-lg shadow-xl border-2 border-black w-full max-w-2xl md:max-h-[85vh] h-full overflow-y-auto flex flex-col bg-black">
            <div className="sticky top-0 p-4 flex justify-end items-center z-10">
              <button 
                onClick={togglePopup}
                className="text-[#5cbb5c] hover:text-[#5cbb5c]/80 text-2xl font-bold focus:outline-none"
              >
                ×
              </button>
            </div>
            <div className="p-6 flex-1">
              <PublicSale />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}