import Image from "next/image";
import { CircleCheck } from "lucide-react";

const LicensingCompliance = () => {
  return (
    <section className="py-16 px-8 lg:px-16 xl:px-24 mx-auto space-y-8">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-tight montserrat-black">
        <span className="text-green-700">Seamless</span> Licensing & Compliance
      </h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <Image
          src={"/assets/images/compliance-2.jpeg"}
          alt=""
          width={400}
          height={400}
          className="w-full max-w-md aspect-square object-cover"
        />
        <article className="space-y-4">
          <h3 className="text-xl lg:text-2xl leading-tight montserrat-black lg:whitespace-nowrap">
            Navigate Complex Regulations With Confidence
          </h3>
          <p className="leading-loose text-base lg:text-lg">
            Licensing doesn&apos;t have to be a maze. With Carlyle by your side,
            navigating complex regulations becomes simple, ensuring you&apos;re
            always compliant, operational, and ready for growth.
          </p>
          <div className="bg-green-300 px-4 py-8 rounded-sm flex gap-4">
            <CircleCheck color="green" size={20} strokeWidth={1.5} className="shrink-0" />
            <p className="text-black text-base lg:text-lg">
              <span className="font-semibold">
                3000+ Risk & Licensing Partners
              </span>{" "}
              across emerging markets give you unparalleled access to local
              expertise and fast-track compliance solutions
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default LicensingCompliance;
