'use client';
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Attend Flow',
    image: '/images/AttendFlow.png',
    link: 'https://github.com/SamueEel90/Attend-Flow',
  },
  {
    title: 'Native Weather App',
    image: '/images/WeatherAppNative.png',
    link: 'https://github.com/SamueEel90/Expo-Weather-App',
  },
  {
    title: 'Crypto Tracker',
    image: '/images/crypto2.png',
    link: 'https://github.com/SamueEel90/Crypto-Tracker',
  },
  {
    title: 'Moja osobná webstránka',
    image: '/images/portfolioofsamuel.png',
    link: 'https://github.com/SamueEel90/Portfolio-of-Samuel',
  },
];

const Page = () => {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Všetky Projekty</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map(({ title, image, link }) => (
          <div
            key={title}
            className="group perspective"
            style={{ perspective: '1000px' }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-60 relative"
            >
              <div className="flip-card-inner absolute inset-0 w-full h-full rounded-lg">
                {/* Predná strana */}
                <div
                  className="flip-card-front absolute inset-0 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                </div>

                {/* Zadná strana */}
                <div
                  className="flip-card-back absolute inset-0 bg-theme-background text-white flex items-center justify-center p-4 rounded-lg"
                >
                  <span className="text-center">Detail na GitHub ↗</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      
      <style jsx>{`
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </main>
  );
};

export default Page;
