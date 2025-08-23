import { Compass, Handshake, Rocket, LucideIcon } from "lucide-react";

interface EntryProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const MarketEntry = () => {
  const entries: EntryProps[] = [
    {
      icon: Compass,
      title: "Strategic Navigation",
      desc: "We craft precise market entry strategies that minimize risk and maximize opportunity, ensuring compliance while accelerating your path to revenue.",
    },
    {
      icon: Handshake,
      title: "Local Partnerships",
      desc: "Leverage our extensive network of regional partners to fast-track your market presence and avoid common expansion pitfalls.",
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      desc: "From strategy to launch in record time, with localized campaigns ready to capture market share from day one.",
    },
  ];

  return (
    <section id="services" className="py-16 px-8 lg:px-16 xl:px-24 mx-auto space-y-8">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl text-center leading-tight montserrat-black">
        Market Entry <span className="text-green-700">Without Barriers</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {entries.map((entry, index) => {
          const { icon: Icon, title, desc } = entry;
          return (
            <div key={index} className="relative">
              <div className="absolute bg-green-700 z-10 left-0.5 top-0.5 w-full h-[416px]"></div>
              <article className="border border-green-700 relative z-20 p-4 space-y-4 w-full h-[416px] bg">
                <div className="w-16 h-16 bg-green-700 rounded-full flex justify-center items-center">
                  <Icon color="white" strokeWidth={1.5} size={28} />
                </div>
                <h3 className="text-lg lg:text-2xl leading-tight montserrat-black relative z-20">
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

export default MarketEntry;
