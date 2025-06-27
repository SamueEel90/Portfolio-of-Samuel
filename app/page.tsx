import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import IconBar from "@/components/IconBar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col md:h-screen pl-4">
        <div className="mx-auto">
          <Hero />
          <IconBar />
          <div className="text-primary text-l mt-4 hover:text-white transition duration-300">
            stofiksamuel@gmail.com
          </div>
          <NavBar />
        </div>
      </div>

     
      <div className="flex flex-col w-full md:w-1/2 overflow-y-auto md:h-screen">
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
          <div className="text-primary text-xl font-bold max-w-xl pl-5">
            <a
              className="transform transition duration-200 hover:scale-105 hover:text-theme-blue inline-block"
              href="/Zivotopis%20Stofik.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Celý životopis ↗
            </a>
          </div>
        </section>
        <section id="projects" className="min-h-5">
          <Projects />
        
        <Link
          className="text-primary text-xl font-bold pl-5"
          href="/projects"
        >
          Všetky projekty ↗
        </Link>
        <div className="text-gray-500 mt-10 ml-4 text-sm">
          Coded in Visual Studio Code. Built with Next.js and Tailwind CSS.
        </div>
        </section>
      </div>
    </div>
  );
}
