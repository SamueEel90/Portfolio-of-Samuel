import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'Attend Flow',
    description:
      'Mobilná aplikácia, ktorú som vyvinul na podporu mojej pracovnej pozície. Umožňuje vedúcim smien mať vždy prehľad o príchodoch, prestávkach a odchodoch zamestnancov na danej smene, čím rieši zásadný problém na veľkých pobočkách. Do budúcnosti plánujem pridať možnosť úpravy, pridania a vymazania zmien priamo v hlavnom systéme plánovania zmien, čo je mojím ďalším projektom Shift Planner.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS'],
    image: '/images/WeatherAppNative.png',
    link: 'https://github.com/SamueEel90/Expo-Weather-App',
  },
  {
    title: 'Native Weather App',
    description:
      'Jednoduchá a rýchla mobilná aplikácia, ktorá poskytuje aktuálne informácie o počasí. Využíva OpenWeatherMap API na získavanie meteorologických údajov a ponúka prehľadné, intuitívne používateľské rozhranie.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS', 'Redux'],
    image: '/images/WeatherAppNative.png',
    link: 'https://github.com/SamueEel90/Expo-Weather-App',
  },
  {
    title: 'Crypto Tracker',
    description:
      'Webová aplikácia na sledovanie kryptomien a správu investičných portfólií. Umožňuje sledovať ceny, výkonnosť a pokročilé metriky v reálnom čase pomocou GeckoAPI. Integrácia s Binance API umožňuje zobraziť zostatky v peňaženke a vykonávať automatizované obchody na platforme Binance.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS', 'Redux', 'Node.js', 'JWT'],
    image: '/images/crypto2.png',
    link: 'https://github.com/SamueEel90/Crypto-Tracker',
  },
  {
    title: 'Moja osobná webstránka',
    description:
      'Moja osobná webová stránka vytvorená pomocou Next.js a Tailwind CSS.',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    image: '/images/portfolioofsamuel.png',
    link: 'https://github.com/SamueEel90/Portfolio-of-Samuel',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-16 mt-26 max-w-xl">
      <h1 className="flex md:hidden pl-4 text-white mb-4 text-2xl">Projekty</h1>

      <div className="space-y-16 p-4">
        {projects.map(({ title, description, tech, image, link }) => (
          <div
            key={title}
            className="flex flex-col md:flex-row gap-6 rounded-xl p-6 hover:bg-theme-background/60 hover:scale-105 hover:shadow-lg transform transition duration-300"
          >
            <div className="md:w-1/2 w-full">
              <Image
                src={image}
                alt={title}
                className="rounded-xl object-cover"
                width={400}
                height={160}
                style={{ height: '160px', width: '100%', objectFit: 'cover' }}
                priority
              />
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
