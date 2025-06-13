"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sectionIds = ["about", "experience", "projects"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const links = [
    { href: "#about", label: "O mne" },
    { href: "#experience", label: "Skúsenosti" },
    { href: "#projects", label: "Projekty" },
  ];

  return (
    <nav className="hidden sm:flex flex-col mt-12 space-y-6 w-40">
      {links.map(({ href, label }) => {
        const id = href.replace("#", "");
        const isActive = activeSection === id;

        return (
          <a
            key={href}
            href={href}
            className={clsx(
              "relative group text-left text-xl font-medium transition-all duration-300 transform hover:scale-105",
              isActive ? "text-theme-blue" : "text-primary hover:text-theme-blue"
            )}
          >
            {label}
            <span
              className={clsx(
                "absolute left-0 -bottom-1 h-[2px] bg-theme-background transition-all duration-300",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default NavBar;