interface MarketResearchProps {
  title: string;
  desc: string;
}

const MarketResearch = () => {
  const entries: MarketResearchProps[] = [
    {
      title: "Competitive Intelligence",
      desc: "Gain visibility into competitor strategies, strengths, and weaknesses with our comprehensive monitoring and analysis tools.",
    },
    {
      title: "Growth Opportunities",
      desc: "Identify untapped market segments and emerging trends before your competitors do, positioning your brand to capture first-mover advantage.",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "url(/assets/images/market-research-bg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
      className="px-8 lg:px-16 xl:px-24 py-28"
    >
      <div className="relative">
        <div className="w-full h-auto lg:h-[342px] bg-black absolute top-2 left-2 z-10"></div>
        <div className="bg h-auto lg:h-[342px] p-8 lg:p-16 mx-auto space-y-8 border border-black rounded-sm relative z-20">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-tight montserrat-black">
            <span className="text-green-700">Intelligence-Driven</span> Market
            Research
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {entries.map((item, index) => {
              const { title, desc } = item;
              return (
                <article
                  key={index}
                  className="relative z-20 space-y-4 w-full h-auto lg:h-52 text-left"
                >
                  <h3 className="text-xl lg:text-2xl leading-tight montserrat-black relative z-20">
                    {title}
                  </h3>
                  <p className="leading-loose relative z-20">{desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketResearch;
