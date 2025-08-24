"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, AnimationPlaybackControls } from 'framer-motion';

interface NumbersProps {
  stat: string;
  title: string;
  desc: string;
}

interface AnimatedStatProps {
  stat: string;
  duration: number;
}

const AnimatedStat = ({ stat, duration = 2.5 }: AnimatedStatProps) => {
  const ref = useRef(null);
  const count = useMotionValue(1);
  
  const targetValue = parseInt(stat);

  const [displayValue, setDisplayValue] = useState('1');
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);
  

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      setDisplayValue(Math.round(latest).toString());
    });

    if (isInView) {
      controlsRef.current = animate(count, targetValue, { 
        duration,
        ease: "easeOut"
      });
    }

    return () => {
      unsubscribe();
      if (controlsRef.current) {
        controlsRef.current.stop();
      }
    };
  }, [count, targetValue, duration, isInView]);

  return (
    <span ref={ref}>
      {displayValue}+
    </span>
  );
};

const Numbers = () => {
  const numbers: NumbersProps[] = [
    {
      stat: "3000",
      title: "Risk & Licensing Partners",
      desc: "Ensuring compliant operations across global markets",
    },
    {
      stat: "4000",
      title: "Native Translators",
      desc: "Creating culturally resonant messaging that connects",
    },
    {
      stat: "200",
      title: "Influencers & Affiliates",
      desc: "Driving authentic engagement and quality traffic",
    },
    {
      stat: "100",
      title: "SEO-Optimized Pieces",
      desc: "Fueling organic visibility and establishing authority",
    },
    {
      stat: "10",
      title: "Mobile-First Designs",
      desc: "Creating seamless user experiences that convert",
    },
  ];

  return (
    <section className="py-16 px-8 lg:px-16 xl:px-24 mx-auto space-y-8">
      <motion.h2 
        className="text-2xl lg:text-3xl xl:text-4xl leading-tight montserrat-black"
        whileInView={{ opacity: [0, 1], y: [30, 0] }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        The Numbers That{" "}
        <span className="text-green-700">Speak for Themselves</span>
      </motion.h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {numbers.slice(0, 3).map((statistics, index) => {
            const { stat, title, desc } = statistics;
            return (
              <motion.div 
                key={index} 
                className="relative"
                whileInView={{ 
                  opacity: [0, 1], 
                  y: [50, 0],
                  scale: [0.9, 1]
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute bg-green-700 z-10 left-0.5 top-0.5 w-full h-64"></div>
                <article className="border border-green-700 relative z-20 p-4 space-y-4 w-full h-64 bg">
                  <motion.p 
                    className="text-5xl lg:text-6xl montserrat-black"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.15) + 0.3 }}
                  >
                    <AnimatedStat stat={stat} duration={2.5 + (index * 0.2)} />
                  </motion.p>
                  
                  <motion.h3 
                    className="text-2xl leading-tight montserrat-black relative z-20"
                    whileInView={{ opacity: [0, 1], y: [20, 0] }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index * 0.15) + 0.4 
                    }}
                    viewport={{ once: true }}
                  >
                    {title}
                  </motion.h3>
                  
                  <motion.p 
                    className="leading-loose relative z-20"
                    whileInView={{ opacity: [0, 1], y: [20, 0] }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index * 0.15) + 0.5 
                    }}
                    viewport={{ once: true }}
                  >
                    {desc}
                  </motion.p>
                </article>
              </motion.div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {numbers.slice(3, numbers.length).map((statistics, index) => {
            const { stat, title, desc } = statistics;
            return (
              <motion.div 
                key={index} 
                className="relative"
                whileInView={{ 
                  opacity: [0, 1], 
                  y: [50, 0],
                  scale: [0.9, 1]
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index + 3) * 0.15,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute bg-green-700 z-10 left-0.5 top-0.5 w-full h-64"></div>
                <article className="border border-green-700 relative z-20 p-4 space-y-4 w-full h-64 bg">
                  <motion.p 
                    className="text-6xl montserrat-black"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ((index + 3) * 0.15) + 0.3 }}
                  >
                    <AnimatedStat stat={stat} duration={2.5 + ((index + 3) * 0.2)} />
                  </motion.p>
                  
                  <motion.h3 
                    className="text-xl lg:text-2xl leading-tight montserrat-black relative z-20"
                    whileInView={{ opacity: [0, 1], y: [20, 0] }}
                    transition={{ 
                      duration: 0.5, 
                      delay: ((index + 3) * 0.15) + 0.4 
                    }}
                    viewport={{ once: true }}
                  >
                    {title}
                  </motion.h3>
                  
                  <motion.p 
                    className="leading-loose relative z-20"
                    whileInView={{ opacity: [0, 1], y: [20, 0] }}
                    transition={{ 
                      duration: 0.5, 
                      delay: ((index + 3) * 0.15) + 0.5 
                    }}
                    viewport={{ once: true }}
                  >
                    {desc}
                  </motion.p>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Numbers;