interface MediaProps {
  stat: string;
  title: string;
  desc: string;
}

const PaidMedia = () => {
  const media: MediaProps[] = [
    {
      stat: "47%",
      title: "Higher CTR",
      desc: "Than industry average across search, social, and display networks",
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
      <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-tight montserrat-black">
        <span className="text-green-700">Precision-Targeted</span> Paid Media
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {media.map((item, index) => {
          const { stat, title, desc } = item;
          return (
            <article
              key={index}
              className="relative z-20 p-4 space-y-4 w-full h-auto lg:h-52 text-center"
            >
              <p className="text-5xl xl:text-6xl montserrat-black">{stat}</p>
              <h3 className="text-2xl leading-tight montserrat-black relative z-20">
                {title}
              </h3>
              <p className="leading-loose relative z-20">{desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PaidMedia;
