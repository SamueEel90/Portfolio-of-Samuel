import React from 'react';
import { FaGithub } from 'react-icons/fa';
const projects = [
  {
    title: 'Native Weather App',
    description:
      'Jednoduchá a rýchla mobilná aplikácia, ktorá poskytuje aktuálne počasie. Využíva API OpenWeatherMap na získavanie meteorologických dát a ponúka prehľadné a intuitívne používateľské rozhranie.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS', 'Redux'],
    image: '/images/WeatherAppNative.png',
    link: 'https://github.com/SamueEel90/Expo-Weather-App',
  },
    {
    title: 'Crypto Tracker',
    description:
      'Webové API na sledovanie kryptomien a správu investičného portfólia.Umožňuje monitorovanie cien, výkonnosti a pokročilých metrík kryptomien v reálnom čase pomocou GeckoAPI. Integrácia s Binance API umožňuje zobrazenie hodnoty peňaženky používateľa a vykonávanie automatizovaných obchodov na platforme Binance.',
    tech: ['React Native', 'Expo', 'TypeScript', 'TailwindCSS', 'Redux', 'Node js','JWT'],
    image: '/images/crypto2.png',
    link: 'https://github.com/SamueEel90/Crypto-Tracker',
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
              <img
                src={image}
                alt={title}
                className="rounded-xl h-40 object-cover"
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
                    <FaGithub className="text-2xl" />
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
