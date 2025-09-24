"use client";
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

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
  // Keep image index per project
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
    <section id="projects" className="my-10 px-4 mx-auto w-full">
      <h1 className="flex md:hidden pl-4 text-white mb-6 text-2xl font-bold">Projekty</h1>
      <div className="space-y-10 p-2 sm:p-4">
        {projects.map(({ title, description, tech, images, link }, idx) => (
          <div
            key={title}
            className="flex flex-col md:flex-row gap-4 sm:gap-6 rounded-xl p-4 sm:p-6 hover:bg-theme-background/60 hover:scale-105 hover:shadow-lg transform transition-all duration-300"
          >
            <div className="md:w-1/2 w-full flex flex-col items-center">
              <div className="relative w-full flex flex-col items-center">
                <div className="relative w-full flex justify-center items-center h-[470px] sm:h-[600px]">
                  <button
                    aria-label="Previous image"
                    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 hover:bg-theme-blue text-white rounded-full shadow transition disabled:opacity-50"
                    onClick={() => handlePrev(idx, images.length)}
                    disabled={images.length <= 1}
                  >
                    <FaChevronLeft size={22} className="sm:size-6" />
                  </button>
                  <div className="flex items-center justify-center">
                    <Image
                      src={images[imgIndexes[idx]]}
                      alt={title}
                      className="rounded-xl object-cover"
                      width={230}
                      height={480}
                      style={{
                     
                      }}
                      priority
                    />
                  </div>
                  <button
                    aria-label="Next image"
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 hover:bg-theme-blue text-white rounded-full shadow transition disabled:opacity-50"
                    onClick={() => handleNext(idx, images.length)}
                    disabled={images.length <= 1}
                  >
                    <FaChevronRight size={22} className="sm:size-6" />
                  </button>
                </div>
                {/* Dots for images */}
                <div className="flex gap-1 justify-center mt-2">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhoneProjects;