"use client";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Hero = () => {
  const [, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="h-screen relative"
      style={{
        backgroundImage: "url(/assets/images/hero-bg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="hero"
    >
      <div className="bg opacity-85 absolute w-full h-full"></div>
      <Navbar />
      <div className="p-8 lg:p-16 xl:p-24">
        <div className="max-w-6xl space-y-4">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl leading-tight montserrat-black relative z-10">
            <span className="text-green-700">
              IGNITE YOUR IGAMING SUCCESS{" "}
              <span className="text-black">WITH</span>
            </span>
            <br />
            <span className="text-black">CARLYLE INVESTMENT</span>
          </h1>
          <p className="text-black leading-loose relative z-10 w-[90%]">
            At Carlyle, we don&apos;t just help gaming and gambling brands
            succeed. We propel them into the heart of emerging markets with
            powerful localization, bold strategies, and unrivaled marketing
            expertise.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-2 relative z-10 pt-8 lg:pt-0">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-black rounded-sm w-44 h-12 font-semibold text-white block hover:cursor-pointer hover:bg-transparent hover:border hover:text-black"
            >
              Get Started
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg border border-black rounded-sm w-44 h-12 font-semibold text-black block hover:cursor-pointer hover:bg-transparent hover:border-none"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
