import React from 'react';

const Hero = () => {
  return (
    <section className="mt-24 ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Samuel <span>Štofik</span>
        </h1>

        <h2 className="text-primary text-xl sm:text-2xl md:text-2xl ">
         Frontend / Full Stack Developer
        </h2>

        <h3 className="text-primary text-l max-w-sm">
          Vedúci oddelenia Kaufland <br className="sm:block" />
          Študent aplikovanej informatiky a automatizácie v priemysle STU MTF
        </h3>

   
        <div className="mt-6">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-theme-background text-theme-blue font-medium rounded-xl shadow hover:opacity-90 transition"
          >
            Moje projekty
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
