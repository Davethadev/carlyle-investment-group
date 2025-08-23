"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactUsForm from "./ContactUsForm";

import { useDialog } from "@/hooks/useDialog";

const ContactUs = () => {
  const { isOpen, onOpen, onClose } = useDialog();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show button when user is within 100px of the bottom
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 200;

      setShowBackToTop(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const reasons = [
    <>
      <span className="font-semibold">Strategic Mastery</span> - We give you the
      insight and edge to dominate in every market.
    </>,
    <>
      <span className="font-semibold">Creative Brilliance</span> - Our campaigns
      aren&apos;t just smart, they&apos;re memorable and impactful.
    </>,
    <>
      <span className="font-semibold">Results-Driven Growth</span> - Data fuels
      every decision. We deliver growth consistently.
    </>,
  ];

  return (
    <>
      <section id="contact" className="p-8 lg:p-16 py-28 bg-green-700">
        <div className="relative">
          <div className="w-full h-auto lg:h-[896px] bg-black absolute top-2 left-2 z-10"></div>
          <div className="bg-green-100 h-auto lg:h-[896px] p-6 lg:p-16 mx-auto space-y-8 border border-black rounded-sm relative z-20">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl text-center leading-tight montserrat-black">
              <span className="text-green-700">Ready to Revolutionize</span>{" "}
              Your Brand?
            </h2>
            <p className="text-black text-base lg:text-lg">
              Let&apos;s start something extraordinary. Contact us today to
              discuss your specific market challenges and growth objectives.
            </p>
            <div className="flex flex-col lg:flex-row gap-8">
              <Image
                src={"/assets/images/contact-us-2.jpg"}
                alt=""
                width={400}
                height={400}
                className="w-full max-w-md aspect-square object-cover"
              />
              <div className="space-y-6">
                <h2 className="text-xl lg:text-2xl montserrat-black">
                  Contact Us
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {reasons.map((reason, index) => {
                    return (
                      <div key={index} className="relative">
                        <div className="absolute bg-black z-10 left-0.5 top-0.5 w-full h-auto lg:h-28 rounded-sm"></div>
                        <article className="border-2 border-black rounded-sm relative z-20 p-4 space-y-4 w-full h-auto lg:h-28 bg-green-100">
                          <p className="leading-loose relative z-20 text-base lg:text-lg">
                            {reason}
                          </p>
                        </article>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={onOpen}
                  className="bg-black rounded-sm w-full lg:w-72 h-12 font-semibold text-white block hover:cursor-pointer hover:bg-transparent hover:border hover:text-black"
                >
                  Schedule a Consultation
                </button>
                <Dialog
                  open={isOpen}
                  defaultOpen={isOpen}
                  onOpenChange={onClose}
                  modal
                >
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-lg lg:text-xl">
                        Send us a message
                      </DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <ContactUsForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        href="#hero"
        className={`fixed z-30 bottom-4 right-4 h-10 w-10 flex justify-center items-center bg-black rounded-sm ${
          showBackToTop ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 hover:bg-gray-800`}
      >
        <ArrowUp size={20} color="white" strokeWidth={1.5} />
      </a>
    </>
  );
};

export default ContactUs;
