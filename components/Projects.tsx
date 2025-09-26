"use client";
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import ProjectGalleryModal from './ProjectGalleryModal';

const projects = [
  {
    title: 'EG Photography - Webové portfólio',
    description: 'Webová stránka pre fotografa Erika G. , ktorá prezentuje jeho portfólio, umožňuje rezerváciu fotografických služieb a obsahuje dynamické zobrazenia a slidery. Stránka je plne responzívna a navrhnutá podľa požiadaviek klienta.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'TailwindCSS'],
    images: [
      '/images/erik1.png',
      '/images/erik2.png',
      '/images/erik3.png',
      '/images/erik4.png',
      '/images/erik5.png',
      '/images/erik6.png',
    ],
    link: 'https://github.com/SamueEel90/EG-Photography',
  },
  {
    title: 'Mythic Miles',
    description:
      'E-commerce webový E-shop na predaj bežeckého a cyklistického vybavenia, oblečenia a doplnkov. Umožňuje používateľom prehliadať produkty, pridávať ich do košíka a dokončiť nákup. Obsahuje aj administrátorské rozhranie na správu produktov, objednávok a používateľov.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'TailwindCSS'],
    images: [
      '/images/runningshop1.png',
      '/images/runningshop2.png',
      '/images/runningshop3.png',
      '/images/runningshop4.png',
    ],
    link: 'https://github.com/SamueEel90/Mythic-Miles',
  },
  {
    title: 'Crypto Tracker',
    description:
      'Webová aplikácia na sledovanie kryptomien a správu investičných portfólií. Umožňuje sledovať ceny, výkonnosť a pokročilé metriky v reálnom čase pomocou GeckoAPI. Integrácia s Binance API umožňuje zobraziť zostatky v peňaženke a vykonávať automatizované obchody na platforme Binance.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS', 'Redux', 'Node.js', 'JWT'],
    images: [
      '/images/Crypto1.png',
      '/images/CryptoSecond.png',  
      '/images/CryptoThird.png',

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
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="my-16 mt-26 py-20 px-6 mx-auto">
      <h1 className="flex md:hidden pl-4 text-white mb-4 text-2xl">Projekty</h1>
      <div className="space-y-16 p-4">
        {projects.map(({ title, description, tech, images, link }, idx) => (
          <button
            key={title}
            className="flex flex-col md:flex-row gap-6 rounded-xl py-6 w-full hover:bg-theme-background/60 hover:scale-105 hover:shadow-lg transform transition duration-300 text-left cursor-pointer group"
            style={{ outline: 'none', border: 'none', background: 'none', padding: 0 }}
            onClick={() => setSelectedProjectIdx(idx)}
            aria-label={`Zobraziť galériu pre ${title}`}
          >
            <div className="md:w-1/2 w-full relative flex items-center justify-center">
              <div className="w-full flex justify-center relative">
                <Image
                  src={images[0]}
                  alt={title}
                  className="rounded-xl object-cover"
                  width={1920}
                  height={1080}
                  style={{
                    aspectRatio: '16/9',
                    width: '100%',
                    maxWidth: '700px',
                    height: 'auto',
                    maxHeight: '600px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                  priority
                />
                {/* Overlay clickable indication */}
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-theme-blue px-4 py-2 rounded-md text-sm opacity-80 group-hover:opacity-100 transition">
                  Klikni pre náhľad obrázkov
                </span>
              </div>
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
          </button>
        ))}
      </div>
      {/* Modal for gallery */}
      {selectedProjectIdx !== null && (
        <ProjectGalleryModal
          project={projects[selectedProjectIdx]}
          onClose={() => setSelectedProjectIdx(null)}
        />
      )}
    </section>
  );
};

export default Projects;