"use client";
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

import PhoneGalleryModal from './PhoneGalleryModal';

const projects = [
  {
    title: 'Attend Flow',
    description:
      'Mobilná aplikácia, ktorú som vyvinul na podporu svojej pracovnej pozície. Aplikácia spracováva pípnutia čipom zamestnancov na dochádzkových termináloch a v reálnom čase posiela vedúcemu smeny notifikácie o príchode, odchode a prestávkach zamestnanca. Zobrazuje rozdiely oproti plánu smeny, nárok na prestávku podľa dĺžky smeny a úlohy naplánované pre zamestnanca nadriadeným vedúcim. Funkcia floorplanu zobrazuje celodenný plán nasadenia pre jednoduchšie rozloženie zamestnancov na smene a prácu s hodinovou produktivitou.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS', 'Express', 'MongoDB'],
    images: [
      '/images/Attendflow1.png', 
      '/images/Attendflow4.png',
      '/images/Attendflow5.png',
      '/images/Attendflow3.png',
      '/images/Attendflow2.png',
      '/images/Attendflow6.png',
    ],
    link: 'https://github.com/SamueEel90/Attend-Flow',
  },
  {
    title: 'Kaufland Scanner Api',
    description:
      'Replika softvéru, ktorý používa Kaufland v skeneroch. Poskytuje informácie o artikloch, kontrolu cien, dátumov spotreby a správu zásob, naskladnenie a vrátenie tovaru, nastavenie skladových miest, maximálnych kapacít a odpisy.',
    tech: [],
    images: [
      '/images/KauflandScannerApi1.png',
    ],
    link: 'https://github.com/SamueEel90/Kaufland-Scanner-Api',
  },
  {
    title: 'Native Weather App',
    description:
      'Jednoduchá a rýchla mobilná aplikácia, ktorá poskytuje aktuálne informácie o počasí. Využíva OpenWeatherMap API na získavanie meteorologických údajov.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS', 'Redux'],
    images: [
      '/images/WeatherAppNative1.png',
      '/images/WeatherAppNative2.png',
    ],
    link: 'https://github.com/SamueEel90/Expo-Weather-App',
  },
];

const PhoneProjects = () => {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="my-10 px-4 mx-auto w-full">
      <h1 className="flex md:hidden pl-4 text-white mb-6 text-2xl font-bold">Projekty</h1>
      <div className="space-y-10 p-2 sm:p-4">
        {projects.map(({ title, description, tech, images, link }, idx) => (
          <button
            key={title}
            className="flex flex-col md:flex-row gap-4 sm:gap-6 rounded-xl p-4 sm:p-6 hover:bg-theme-background/60 hover:scale-105 hover:shadow-lg transform transition-all duration-300 text-left w-full cursor-pointer group relative"
            style={{ outline: 'none', border: 'none', background: 'none', padding: 0 }}
            onClick={() => setSelectedProjectIdx(idx)}
            aria-label={`Zobraziť galériu pre ${title}`}
          >
            <div className="md:w-1/2 w-full flex flex-col items-center">
              <div className="relative w-full flex flex-col items-center">
                <div className="relative w-full flex justify-center items-center h-[470px] sm:h-[600px]">
                  <Image
                    src={images[0]}
                    alt={title}
                    className="rounded-xl object-cover"
                    width={230}
                    height={480}
                    style={{
                      cursor: 'pointer',
                    }}
                    priority
                  />
                  {/* Clickable overlay indication */}
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60  text-theme-blue px-3 py-1 rounded-md text-sm opacity-80 group-hover:opacity-100 transition">
                    Klikni pre náhľad obrázkov
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-between mt-4 md:mt-0">
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
                <p className="text-secondary text-sm sm:text-base mb-4">{description}</p>
              </div>
              <div className="flex flex-wrap gap-1 text-xs text-theme-blue mt-2 sm:mt-4">
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
  <PhoneGalleryModal
    images={projects[selectedProjectIdx].images}
    title={projects[selectedProjectIdx].title}
    onClose={() => setSelectedProjectIdx(null)}
  />
)}
    </section>
  );
};

export default PhoneProjects;