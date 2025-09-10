"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [, setActiveSection] = useState("hero");

  const openMobileNav = () => {
    setIsMobileNav(true);
  };

  const closeMobileNav = () => {
    setIsMobileNav(false);
  };

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
    <>
      <nav className="flex w-full justify-between pt-8 px-[34px] lg:px-[50px] xl:px-[98px]">
        <div className="space-y-0 text-center">
          <h2 className="uppercase montserrat-black relative z-20 tracking-widest leading-none">
            Carlyle
          </h2>
          <p className="uppercase montserrat-regular text-[11px] relative z-20 tracking-widest">
            Investment
          </p>
        </div>

        <button onClick={openMobileNav} className="md:hidden relative z-20">
          <Menu strokeWidth={1.5} color="black" />
        </button>
        <div className="hidden md:flex gap-8">
          {["Services", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-black hover:text-green-700 transition-colors duration-200 relative z-20 hover:cursor-pointer`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
      {/* MOBILE NAV */}
      <AnimatePresence>
        {isMobileNav && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ease: "easeInOut", duration: 0.25, type: "spring" },
            }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden w-[90%] mx-auto pt-4 pb-16 px-0 absolute top-16 right-0 left-0 text-center z-20 bg-black h-auto rounded-sm"
          >
            <button
              className="md:hidden absolute right-8"
              onClick={closeMobileNav}
            >
              <X strokeWidth={1.5} color="white" />
            </button>
            <a
              href="#services"
              onClick={closeMobileNav}
              className="uppercase montserrat-regular text-white text-sm mt-16 mx-auto text-center block"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={closeMobileNav}
              className="uppercase montserrat-regular text-white text-sm mt-4 mx-auto text-center block"
            >
              Contact us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
