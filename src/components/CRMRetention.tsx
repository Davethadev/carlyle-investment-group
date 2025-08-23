import { UserRoundPlus, UsersRound, Dog, LucideIcon } from "lucide-react";

interface CRMProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const CRMRetention = () => {
  const crmCards: CRMProps[] = [
    {
      icon: UserRoundPlus,
      title: "Acquisition",
      desc: "Strategic onboarding that establishes value from the first interaction",
    },
    {
      icon: UsersRound,
      title: "Engagement",
      desc: "Personalized experiences that keep players coming back",
    },
    {
      icon: Dog,
      title: "Loyalty",
      desc: "Reward systems that transform users into brand champions",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "url(/assets/images/crm-retention-bg.jpg)",
      }}
      className="px-8 lg:px-16 xl:px-24 py-36"
    >
      <div className="relative">
        <div className="w-full h-auto lg:h-[456px] bg-black absolute top-2 left-2 z-10"></div>
        <div className="bg h-auto lg:h-[456px] p-8 lg:p-12 xl:p-16 mx-auto space-y-2 border border-black rounded-sm relative z-20">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-tight montserrat-black">
            CRM & Retention:{" "}
            <span className="text-green-700">Players Become Advocates</span>
          </h2>
          <div className="grid grid-cols-3 gap-2 pt-4">
            {crmCards.map((card, index) => {
              const { icon: Icon } = card;
              return (
                <div
                  key={index}
                  className="chevron w-full h-20 bg-black grid grid-cols-1 place-items-center place-content-center"
                >
                  <div className="chevron w-[98.5%] h-[76px] bg flex items-center justify-center">
                    <Icon strokeWidth={1.5} size={28} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {crmCards.map((item, index) => {
              const { title, desc } = item;
              return (
                <article
                  key={index}
                  className="relative z-20 p-4 space-y-4 w-full h-auto lg:h-52 text-left"
                >
                  <h3 className="text-2xl leading-tight montserrat-black relative z-20">
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

export default CRMRetention;
