
import Hero from "@/components/Hero";
import MarketEntry from "@/components/MarketEntry";
// import PowerOfInfluence from "@/components/PowerOfInfluence";
import GameChangingResults from "@/components/GameChangingResults";
import PaidMedia from "@/components/PaidMedia";
import CRMRetention from "@/components/CRMRetention";
import LicensingCompliance from "@/components/LicensingCompliance";
import CulturalStrategy from "@/components/CulturalStrategy";
import LocalizedOperations from "@/components/LocalizedOperations";
import MarketResearch from "@/components/MarketResearch";
import Numbers from "@/components/Numbers";
import ContactUs from "@/components/ContactUs";
import MarketingExcellence from "@/components/MarketingExcellence";

import { Toaster } from "@/components/ui/sonner";

const page = () => {
  return (
    <>
      <Toaster />
      <main className="bg">
        <Hero />
        {/* <PowerOfInfluence /> */}
        <MarketingExcellence />
        <GameChangingResults />
        <MarketEntry />
        <PaidMedia />
        <CRMRetention />
        <LicensingCompliance />
        <CulturalStrategy />
        <LocalizedOperations />
        <MarketResearch />
        <Numbers />
        <ContactUs />
      </main>
    </>
  );
};

export default page;
