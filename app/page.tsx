import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import IconBar from "@/components/IconBar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
<div className="flex flex-col md:flex-row">
  {/* Left side (desktop) or top (mobile) */}
  <div className="w-full md:w-1/2 flex flex-col md:h-screen pl-4">
    {/* Shared left margin wrapper for consistency */}
    <div className="mx-auto ">
      <Hero />
      <IconBar />
      <NavBar />
    </div>
</div>

      {/* Right side: scrollable on desktop, part of flow on mobile */}
      <div className="flex flex-col w-full md:w-1/2 overflow-y-auto md:h-screen">
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <div className="text-gray-500 mt-10 ml-4 text-sm">Coded in Visual Studio Code. Built with Next.js and Tailwind CSS.</div>
        
      </div>
    </div>
  );
}
