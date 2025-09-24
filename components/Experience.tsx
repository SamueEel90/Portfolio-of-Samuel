import React from 'react';

const experiences = [
  {
    date: '2022 – 2024',
    title: 'Shift leader (+oddelenie kvality/HACCP)',
    company: 'McDonald’s',
    bullets: [
      'Zodpovednosť za smenu (25–35 ľudí), rozdelenie a delegovanie úloh',
      'Plnenie cieľových časov a ukazovateľov',
      'Kontrola FoodSafety a kvality tovaru',
      'Práca s hotovosťou, inventúry, uzatváranie POS a systémov',
    ],
  },
  {
    date: '2024',
    title: 'Vedúci skupiny tovaru nonFood (1. level manažmentu)',
    company: 'Kaufland Slovenská republika v.o.s.',
    bullets: [
      'Vedúci oddelenia nonFood',
      'Kontrola kvality a prezentácie tovaru',
      'Zodpovednosť za plnenie cieľov oddelenia',
      'Tréning zamestnancov',
    ],
  },
  {
    date: '2024 – present',
    title: 'Vedúci oddelenia (2. level manažmentu)',
    company: 'Kaufland Slovenská republika v.o.s.',
    bullets: [
      'Vedenie celého nepotravinového oddelenia',
      'Plnenie cieľov zverených oddelení',
      'Vyhodnocovanie strát, plánovanie predaja a objednávok',
      'Inventúry a plánovanie zmien',
    ],
  },
  {
    date: '2025 - present',
    title: 'Freelance Web Developer',
    company: 'EG Photography ',
    bullets: [
      'Vytvorenie webovej stránky pre fotografa Erika G.',
      'Implementácia dynamických zobrazení a componentov',
      'Rezervačný systém fotografických služieb',
      'Plne responzívny dizajn podľa požiadaviek klienta',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="my-16 mt-26 px-4 ">
      <h1 className='flex md:hidden pl-4 text-white mb-4 text-2xl'>Skúsenosti</h1>
      <div className="space-y-6 pl-4">
        {experiences.map(({ date, title, company, bullets }) => (
          <div
            key={title}
            className="group flex  flex-col md:flex-row md:items-start p-8 rounded-lg hover:bg-theme-background/60  hover:shadow-lg transform transition duration-300"
            style={{ perspective: '1000px' }} 
          >
            <time className="text-secondary text-md md:w-1/4 mb-2 md:mb-0">{date}</time><br />
            <div className="md:flex-1">
              <h3 className="text-lg font-semibold text-primary group-hover:text-theme-blue transition-colors duration-200">
                {title}
              </h3>
              <p className="text-secondary text-base mb-2">{company}</p>
              <ul className="list-disc list-inside text-secondary space-y-1">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Experience;