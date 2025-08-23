"use client";

import {
  motion,
  useMotionValue,
  animate,
  useInView,
  AnimationPlaybackControlsWithThen,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface MediaProps {
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
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Parse different stat formats
  const parseStatValue = (statString: string) => {
    if (statString.includes("%")) {
      return {
        value: parseFloat(statString.replace("%", "")),
        suffix: "%",
        decimals: 0,
      };
    } else if (statString.includes("x")) {
      return {
        value: parseFloat(statString.replace("x", "")),
        suffix: "x",
        decimals: 1,
      };
    }
    return {
      value: parseFloat(statString),
      suffix: "",
      decimals: 0,
    };
  };

  const { value, suffix, decimals } = parseStatValue(stat);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      if (decimals > 0) {
        setDisplayValue((Math.round(latest * 10) / 10).toFixed(1));
      } else {
        setDisplayValue(Math.round(latest).toString());
      }
    });

    let controls: AnimationPlaybackControlsWithThen;

    if (isInView) {
      controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
    }

    return () => {
      unsubscribe();
      if (controls) {
        controls.stop();
      }
    };
  }, [count, value, duration, decimals, isInView]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const PaidMedia = () => {
  const media: MediaProps[] = [
    {
      stat: "47%",
      title: "Higher CTR",
      desc: "Than industry average across search and social networks",
    },
    {
      stat: "32%",
      title: "Lower CPA",
      desc: "Through advanced targeting and continuous optimization",
    },
    {
      stat: "3.2x",
      title: "ROAS",
      desc: "Average return on ad spend across our gaming clients",
    },
  ];

  return (
    <section className="py-16 px-8 lg:px-16 xl:px-24 mx-auto space-y-8">
      <motion.h2
        className="text-2xl lg:text-3xl xl:text-4xl text-center leading-tight montserrat-black"
        whileInView={{ opacity: [0, 1], y: [30, 0] }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="text-green-700">Precision-Targeted</span> Paid Media
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {media.map((item, index) => {
          const { stat, title, desc } = item;
          return (
            <motion.article
              key={index}
              className="relative z-20 p-4 space-y-4 w-full h-auto lg:h-60 text-center"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                scale: [0.9, 1],
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                className="text-5xl xl:text-6xl montserrat-black"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <AnimatedStat stat={stat} duration={2 + index * 0.3} />
              </motion.p>

              <motion.h3
                className="text-2xl leading-tight montserrat-black relative z-20"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.4,
                }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h3>

              <motion.p
                className="leading-loose relative z-20 text-base lg:text-lg"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.5,
                }}
                viewport={{ once: true }}
              >
                {desc}
              </motion.p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default PaidMedia;
