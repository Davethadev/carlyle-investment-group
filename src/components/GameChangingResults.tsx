interface ResultsProps {
  title: string;
  desc: string;
}

const GameChangingResults = () => {
  const results: ResultsProps[] = [
    {
      title: "20-35% Higher Conversions",
      desc: "Outperform traditional advertising with our proven methods.",
    },
    {
      title: "Influence Across Markets",
      desc: "Leverage our network of 200+ gaming and gambling influencers.",
    },
    {
      title: "Precise ROI Tracking",
      desc: "Custom attribution models to prove your campaign's true impact.",
    },
  ];

  return (
    <section className="py-16 px-8 lg:px-16 xl:px-24 mx-auto space-y-8">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl text-center leading-tight montserrat-black">
        Achieve Game-Changing Results
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {results.map((result, index) => {
          const { title, desc } = result;
          return (
            <article
              key={index}
              className="bg-green-400 relative z-20 p-4 space-y-4 w-full h-60"
            >
              <h3 className="text-lg lg:text-2xl xl:text-2xl leading-tight montserrat-black relative z-20">
                {title}
              </h3>
              <p className="leading-loose relative z-20 text-base lg:text-lg">{desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default GameChangingResults;
