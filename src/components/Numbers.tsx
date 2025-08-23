interface NumbersProps {
  stat: string;
  title: string;
  desc: string;
}

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
      <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-tight montserrat-black">
        The Numbers That{" "}
        <span className="text-green-700">Speak for Themselves</span>
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {numbers.slice(0, 3).map((statistics, index) => {
            const { stat, title, desc } = statistics;
            return (
              <div key={index} className="relative">
                <div className="absolute bg-green-700 z-10 left-0.5 top-0.5 w-full h-64"></div>
                <article className="border border-green-700 relative z-20 p-4 space-y-4 w-full h-64 bg">
                  <p className="text-5xl lg:text-6xl montserrat-black">{stat}+</p>
                  <h3 className="text-2xl leading-tight montserrat-black relative z-20">
                    {title}
                  </h3>
                  <p className="leading-loose relative z-20">{desc}</p>
                </article>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {numbers.slice(3, numbers.length).map((statistics, index) => {
            const { stat, title, desc } = statistics;
            return (
              <div key={index} className="relative">
                <div className="absolute bg-green-700 z-10 left-0.5 top-0.5 w-full h-64"></div>
                <article className="border border-green-700 relative z-20 p-4 space-y-4 w-full h-64 bg">
                  <p className="text-6xl montserrat-black">{stat}+</p>
                  <h3 className="text-xl lg:text-2xl leading-tight montserrat-black relative z-20">
                    {title}
                  </h3>
                  <p className="leading-loose relative z-20">{desc}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
