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
      className="h-auto lg:h-screen relative"
      style={{
        backgroundImage: "url(/assets/images/hero-bg-2.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="hero"
    >
      <div className="bg opacity-85 absolute w-full h-full"></div>
      <Navbar />
      <div className="px-8 lg:px-16 xl:px-24 relative top-[20%] py-12 lg:py-0 text-center">
        <div className="max-w-6xl space-y-4">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl leading-tight montserrat-black relative z-10">
            <span className="text-green-700">
              UNLEASH YOUR IGAMING POTENTIAL
            </span>
            <br />
            <span className="text-black">WITH AFRICA'S LEADING PARTNER</span>
          </h1>
          <p className="text-black text-base lg:text-lg leading-loose relative z-10">
            At Carlyle, we don&apos;t just drive success for gaming and gambling
            brands. We elevate them at the forefront of Africa&apos;s booming
            markets. With tailored localization, dynamic strategies, and
            unmatched marketing expertise, we help your brand thrive where
            opportunity meets innovation.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 relative z-10 pt-8 lg:pt-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black rounded-sm w-44 h-12 font-semibold text-white block hover:cursor-pointer hover:bg-transparent hover:border hover:text-black"
            >
              Get Started
            </button>

            <button
              onClick={() => scrollToSection("services")}
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
