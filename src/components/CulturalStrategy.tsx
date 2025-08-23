interface CulturalStrategyProps {
  title: string;
  desc: string;
}

const CulturalStrategy = () => {
  const strategies: CulturalStrategyProps[] = [
    {
      title: "Local Language Mastery",
      desc: "Beyond basic translation, we craft messaging that incorporates cultural nuances, slang, and regional preferences with our network of 4000+ native translators.",
    },
    {
      title: "Cultural Resonance",
      desc: "We align your brand with local values, celebrations, and cultural moments that matter, creating authentic connections that generic marketing can't match.",
    },
    {
      title: "Adaptive Strategies",
      desc: "Market conditions evolve rapidly. Our teams continuously monitor cultural shifts to ensure your messaging remains relevant and impactful.",
    },
  ];
  return (
    <section className="py-16 px-8 lg:px-16 xl:px-24 mx-auto space-y-8">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl text-center leading-tight montserrat-black">
        Cultural Strategy for{" "}
        <span className="text-green-700">Deeper Connections</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {strategies.map((strategy, index) => {
          const { title, desc } = strategy;
          return (
            <div key={index} className="relative">
              <div className="absolute bg-green-700 z-10 left-0.5 top-0.5 w-full h-[352px]"></div>
              <article className="border border-green-700 relative z-20 p-4 space-y-4 w-full h-[352px] bg">
                <h3 className="text-xl lg:text-2xl leading-tight montserrat-black relative z-20">
                  {title}
                </h3>
                <p className="leading-loose relative z-20 text-base lg:text-lg">{desc}</p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CulturalStrategy;
