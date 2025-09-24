"use client";
import React, { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  onClose: () => void;
}

const PhoneGalleryModal: React.FC<Props> = ({ images, title, onClose }) => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Prevent main background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Lightbox navigation
  const handlePrev = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((prev) => prev === 0 ? images.length - 1 : (prev as number) - 1);
  };

  const handleNext = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((prev) => prev === images.length - 1 ? 0 : (prev as number) + 1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center overflow-auto">
      <div className="relative bg-theme-background rounded-xl p-4 max-w-md w-full mx-2">
        <button
          className="absolute top-2 right-2 text-white hover:text-theme-blue text-2xl"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <FaTimes />
        </button>
        <h2 className="text-lg text-white mb-4 text-center">{title}</h2>
        {/* Responsive phone-style gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((img, idx) => (
            <button
              key={img}
              className="relative aspect-[2/3] w-full overflow-hidden rounded-md border border-theme-blue focus:ring-2 focus:ring-theme-blue"
              onClick={() => setLightboxIdx(idx)}
              aria-label={`Zväčšiť obrázok ${idx + 1}`}
              style={{ outline: 'none', background: 'none', padding: 0 }}
            >
              <Image
                src={img}
                alt={`${title} - obrázok ${idx + 1}`}
                width={200}
                height={300}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
        <p className="text-xs text-center text-white/70 mt-4">
          Klikni na obrázok pre zväčšenie
        </p>
      </div>
      {/* Lightbox/fullscreen view */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white hover:text-theme-blue text-3xl"
            aria-label="Zavrieť náhľad"
            onClick={() => setLightboxIdx(null)}
          >
            <FaTimes />
          </button>
          {images.length > 1 && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2"
              aria-label="Predošlý obrázok"
              onClick={handlePrev}
            >
              <FaChevronLeft size={32} />
            </button>
          )}
          <Image
            src={images[lightboxIdx]}
            alt={`${title} - obrázok ${lightboxIdx + 1}`}
            width={400}
            height={600}
            className="rounded-xl object-contain max-w-[90vw] max-h-[80vh] shadow-xl"
            priority
          />
          {images.length > 1 && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2"
              aria-label="Ďalší obrázok"
              onClick={handleNext}
            >
              <FaChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PhoneGalleryModal;