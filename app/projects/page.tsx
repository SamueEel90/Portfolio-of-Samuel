"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Attend Flow",
    image: "/images/AttendFlow1.png",
    link: "https://github.com/SamueEel90/Attend-Flow",
  },
  {
    title: "Native Weather App",
    image: "/images/WeatherAppNative.png",
    link: "https://github.com/SamueEel90/Expo-Weather-App",
  },
  {
    title: "Crypto Tracker",
    image: "/images/crypto2.png",
    link: "https://github.com/SamueEel90/Crypto-Tracker",
  },
  {
    title: "Moja osobná webstránka",
    image: "/images/portfolioofsamuel.png",
    link: "https://github.com/SamueEel90/Portfolio-of-Samuel",
  },
  {
    title: "Weather App",
    image: "/images/WeatherApp.png",
    link: "https://github.com/SamueEel90/Weather-App",
  },
  {
    title: "Mythic Miles",
    image: "/images/runningshop1.png",
    link: "https://github.com/SamueEel90/Mythic-Miles",
  },
  {
    title: "EG Photography Portfolio",
    image: "/images/egphotography.png",
    link: "https://github.com/SamueEel90/EG-Photography",
  }
];

const Page = () => {
  return (
    <main className="min-h-screen  text-white px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center tracking-tight">
        🚀 Všetky Projekty
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map(({ title, image, link }, i) => (
          <motion.div
            key={title}
            className="group perspective"
            style={{ perspective: "1000px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-64 relative"
            >
              <div className="flip-card-inner absolute inset-0 w-full h-full rounded-xl shadow-lg overflow-hidden">
                {/* Predná strana */}
                <div className="flip-card-front absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    objectFit="cover"
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                </div>

                {/* Zadná strana */}
                <div className="flip-card-back absolute inset-0 bg-theme-background flex flex-col items-center justify-center p-4 rounded-xl gap-3">
                  <FaGithub className="text-3xl text-white mb-2" />
                  <span className="text-center font-medium">
                    Pozrieť na GitHub
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* flip animácia */}
      <style jsx>{`
        .flip-card-inner {
          transition: transform 0.7s;
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
