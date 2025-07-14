"use client";
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const projects = [

  {
    title: 'Crypto Tracker',
    description:
      'Webová aplikácia na sledovanie kryptomien a správu investičných portfólií. Umožňuje sledovať ceny, výkonnosť a pokročilé metriky v reálnom čase pomocou GeckoAPI. Integrácia s Binance API umožňuje zobraziť zostatky v peňaženke a vykonávať automatizované obchody na platforme Binance.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS', 'Redux', 'Node.js', 'JWT'],
    images: [
      '/images/Crypto1.png',
      '/images/Crypto2.png',
    ],
    link: 'https://github.com/SamueEel90/Crypto-Tracker',
  },
   {
    title: 'Weather App',
    description:
      'Jednoduchá jednostránková webová aplikácia na počasie. Využíva API OpenWeatherMap.',
    tech: ["React", "TypeScript", "CSS"],
    images: [
      '/images/WeatherApp.png',
    ],
    link: 'https://github.com/SamueEel90/Weather-App',
  },
  {
    title: 'Moja osobná webstránka',
    description:
      'Moja osobná webová stránka vytvorená pomocou Next.js a Tailwind CSS.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    images: [
      '/images/portfolioofsamuel.png',
    ],
    link: 'https://github.com/SamueEel90/Portfolio-of-Samuel',
  },
];

const Projects = () => {
  // Set up image index for each project
  const [imgIndexes, setImgIndexes] = useState(projects.map(() => 0));

  const handlePrev = (idx: number, imagesLength: number) => {
    setImgIndexes((prev) =>
      prev.map((cur, i) =>
        i === idx ? (cur - 1 + imagesLength) % imagesLength : cur
      )
    );
  };

  const handleNext = (idx: number, imagesLength: number) => {
    setImgIndexes((prev) =>
      prev.map((cur, i) =>
        i === idx ? (cur + 1) % imagesLength : cur
      )
    );
  };

  return (
    <section id="projects" className="my-16 mt-26 max-w-3xl mx-auto">
      <h1 className="flex md:hidden pl-4 text-white mb-4 text-2xl">Projekty</h1>

      <div className="space-y-16 p-4">
        {projects.map(({ title, description, tech, images, link }, idx) => (
          <div
            key={title}
            className="flex flex-col md:flex-row gap-6 rounded-xl p-6 hover:bg-theme-background/60 hover:scale-105 hover:shadow-lg transform transition duration-300"
          >
            <div className="md:w-1/2 w-full relative flex items-center justify-center">
              {images.length > 1 && (
                <button
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 bg-theme-blue/80 hover:bg-theme-blue text-white rounded-full shadow transition disabled:opacity-50"
                  onClick={() => handlePrev(idx, images.length)}
                  disabled={images.length <= 1}
                  style={{ outline: 'none', border: 'none' }}
                >
                  <FaChevronLeft size={24} />
                </button>
              )}
              <div className="w-full flex justify-center">
                <Image
                  src={images[imgIndexes[idx]]}
                  alt={title}
                  className="rounded-xl object-cover"
                  width={1920}
                  height={1080}
                  style={{
                    aspectRatio: '16/9',
                    width: '100%',
                    maxWidth: '700px',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover',
                  }}
                  priority
                />
              </div>
              {images.length > 1 && (
                <button
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 bg-theme-blue/80 hover:bg-theme-blue text-white rounded-full shadow transition disabled:opacity-50"
                  onClick={() => handleNext(idx, images.length)}
                  disabled={images.length <= 1}
                  style={{ outline: 'none', border: 'none' }}
                >
                  <FaChevronRight size={24} />
                </button>
              )}
              {/* Dots for images */}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 rounded-full transition bg-theme-blue ${
                        imgIndexes[idx] === i
                          ? 'opacity-90 scale-125'
                          : 'opacity-30'
                      }`}
                      style={{ outline: 'none', border: 'none' }}
                      onClick={() => {
                        setImgIndexes((prev) =>
                          prev.map((cIdx, pIdx) =>
                            pIdx === idx ? i : cIdx
                          )
                        );
                      }}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="md:w-1/2 w-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-white transition duration-300"
                  >
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <>
                      <FaGithub className="text-2xl" />
                      <span className="text-4xl ml-1">↗</span>
                    </>
                  </a>
                </div>
                <p className="text-secondary text-s mb-4">{description}</p>
              </div>
              <div className="flex flex-wrap gap-1 text-xs text-theme-blue mt-4">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="dark:bg-theme-background text-xs px-2 py-1 rounded-md transition duration-200 hover:bg-theme-blue hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;