"use client";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ServicesProps {
  title: string;
  desc: string;
  section: string;
}

const Hero = () => {
  const router = useRouter();
  const [, setActiveSection] = useState("hero");
  const services: ServicesProps[] = [
    {
      title: "Platform Operator",
      desc: "Launch and run your iGaming franchise in Nigeria.",
      section: "services",
    },
    {
      title: "People Operations",
      desc: "Cultural-centric talent and customer service teams.",
      section: "operations",
    },
    {
      title: "Compliance",
      desc: "Simplify licensing and regulatory requirements.",
      section: "compliance",
    },
    {
      title: "Marketing",
      desc: "High-impact campaigns to acquire and retain players.",
      section: "marketing",
    },
  ];

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
      className="h-auto relative"
      style={{
        backgroundImage: "url(/assets/images/hero-bg-2.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="hero"
    >
      <div className="bg opacity-85 absolute w-full h-full"></div>
      <Navbar />
      <div className="px-8 lg:px-16 xl:px-24 relative top-[10%] lg:py-0 text-center">
        <div className="max-w-6xl space-y-4">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl leading-tight montserrat-black relative z-10 pt-24">
            <span className="text-green-700">
              UNLEASH YOUR IGAMING POTENTIAL
            </span>
            <br />
            <span className="text-black">
              WITH AFRICA&apos;S LEADING PARTNER
            </span>
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
              className="bg-black rounded-sm w-44 h-12 font-semibold text-white block hover:cursor-pointer hover:bg-transparent hover:border hover:text-black transition-all duration-500 ease-in-out"
            >
              Get Started
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="bg border border-black rounded-sm w-44 h-12 font-semibold text-black block hover:cursor-pointer hover:bg-transparent hover:border-none transition-all duration-500 ease-in-out"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 px-8 lg:px-16 xl:px-24 py-24">
        {services.map((service, index) => {
          const { title, desc, section } = service;
          return (
            <article
              key={index}
              onClick={() => router.push(`#${section}`)}
              className={`bg-green-600 rounded-sm relative z-20 pt-4 px-4 pb-6 space-y-3 w-full h-auto text-center hover:cursor-pointer transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:bg-green-500 shadow-lg shadow-green-700/40 rotate-0 hover:rotate-1 group`}
            >
              <h3 className="text-base lg:text-lg xl:text-xl leading-tight montserrat-black relative z-20 transition-transform duration-300 group-hover:scale-110">
                {title}
              </h3>
              <p className="leading-relaxed relative z-20 text-base transition-all duration-300 group-hover:font-medium">
                {desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
