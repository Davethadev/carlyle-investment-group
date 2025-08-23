interface OperationsProps {
  title: string;
  desc: string;
}

const LocalizedOperations = () => {
  const operations: OperationsProps[] = [
    {
      title: "Local Customer Service",
      desc: "Your players interact with native-speaking teams who understand local customs and communication styles. This builds trust, ensures clear resolution of issues, and transforms customer support into a powerful retention tool. We empower seamless, culturally-attuned player experiences.",
    },
    {
      title: "Native Development Teams",
      desc: "Our local UI/UX, frontend, and backend developers ensure your platform is designed for local preferences, integrating regional payment methods and optimizing for specific market infrastructure. This native approach guarantees an intuitive and seamless experience that resonates deeply with your audience.",
    },
  ];

  return (
    <section className="py-16 px-8 lg:px-16 xl:px-24 space-y-8 w-full">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-tight montserrat-black">
        Tailoring for Triumph:{" "}
        <span className="text-green-700">Localized Operations</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {operations.map((operation, index) => {
          const { title, desc } = operation;
          return (
            <article key={index} className="space-y-4 w-full h-auto lg:h-72 bg">
              <h3 className="text-xl lg:text-2xl leading-tight montserrat-black relative z-20">
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

export default LocalizedOperations;
