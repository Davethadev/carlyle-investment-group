// "use client";

// import { useState, useEffect } from "react";
// import {
//   ChevronRight,
//   Globe,
//   Users,
//   TrendingUp,
//   Shield,
//   Target,
//   Zap,
//   Award,
//   Phone,
//   Mail,
//   ArrowRight,
// } from "lucide-react";

// const CarlyleWebsite = () => {
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       const scrollPos = window.scrollY + 100;

//       sections.forEach((section) => {
//         if (
//           scrollPos >= section.offsetTop &&
//           scrollPos < section.offsetTop + section.offsetHeight
//         ) {
//           setActiveSection(section.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//   };

//   const stats = [
//     {
//       number: "3000+",
//       label: "Risk & Licensing Partners",
//       desc: "Ensuring compliant operations across global markets",
//     },
//     {
//       number: "4000+",
//       label: "Native Translators",
//       desc: "Creating culturally resonant messaging that connects",
//     },
//     {
//       number: "200+",
//       label: "Influencers & Affiliates",
//       desc: "Driving authentic engagement and quality traffic",
//     },
//     {
//       number: "100+",
//       label: "SEO-Optimized Pieces",
//       desc: "Fueling organic visibility and establishing authority",
//     },
//   ];

//   const services = [
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Market Entry Without Barriers",
//       items: [
//         {
//           title: "Strategic Navigation",
//           desc: "Craft precise market entry strategies that minimize risk and maximize opportunity",
//         },
//         {
//           title: "Local Partnerships",
//           desc: "Leverage extensive network of regional partners to fast-track market presence",
//         },
//         {
//           title: "Rapid Deployment",
//           desc: "From strategy to launch in record time with localized campaigns",
//         },
//       ],
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Harness the Power of Influence",
//       stats: [
//         "20-35% higher conversion rates",
//         "Network of 200+ gaming influencers",
//         "Custom attribution models",
//       ],
//       desc: "Connect your brand with authentic voices who speak directly to your target audience",
//     },
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Precision-Targeted Paid Media",
//       metrics: [
//         {
//           value: "47%",
//           label: "Higher CTR",
//           desc: "Than industry average across all networks",
//         },
//         {
//           value: "32%",
//           label: "Lower CPA",
//           desc: "Through advanced targeting and optimization",
//         },
//         {
//           value: "3.2x",
//           label: "ROAS",
//           desc: "Average return on ad spend across gaming clients",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               CARLYLE
//             </div>
//             <div className="hidden md:flex space-x-8">
//               {["Services", "Results", "About", "Contact"].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="hover:text-purple-400 transition-colors duration-200"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//             <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="pt-16 min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
//               IGNITE YOUR IGAMING SUCCESS
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-300">
//               WITH CARLYLE INVESTMENT
//             </h2>
//             <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
//               We don't just help gaming and gambling brands succeed. We propel
//               them into the heart of emerging markets with powerful
//               localization, bold strategies, and unrivaled marketing expertise.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
//                 Get Started <ArrowRight className="ml-2 w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => scrollToSection("services")}
//                 className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all duration-200 flex items-center justify-center"
//               >
//                 Explore Services
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronRight className="w-6 h-6 rotate-90 text-purple-400" />
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-black/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Our Services
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Breaking into emerging markets isn't just about translation. It's
//               about transformation.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
//               >
//                 <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-200">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-6 text-white">
//                   {service.title}
//                 </h3>

//                 {service.items && (
//                   <div className="space-y-4">
//                     {service.items.map((item, idx) => (
//                       <div key={idx}>
//                         <h4 className="font-semibold text-purple-300 mb-2">
//                           {item.title}
//                         </h4>
//                         <p className="text-gray-400 text-sm">{item.desc}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {service.stats && (
//                   <div className="space-y-3">
//                     {service.stats.map((stat, idx) => (
//                       <div key={idx} className="flex items-center text-sm">
//                         <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
//                         <span className="text-gray-300">{stat}</span>
//                       </div>
//                     ))}
//                     <p className="text-gray-400 text-sm mt-4">{service.desc}</p>
//                   </div>
//                 )}

//                 {service.metrics && (
//                   <div className="grid grid-cols-1 gap-4">
//                     {service.metrics.map((metric, idx) => (
//                       <div key={idx} className="text-center">
//                         <div className="text-3xl font-bold text-purple-400 mb-1">
//                           {metric.value}
//                         </div>
//                         <div className="text-white font-semibold mb-1">
//                           {metric.label}
//                         </div>
//                         <div className="text-gray-400 text-xs">
//                           {metric.desc}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Additional Services Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-400/30">
//               <Shield className="w-8 h-8 text-purple-400 mb-4" />
//               <h3 className="text-lg font-bold mb-2">Licensing & Compliance</h3>
//               <p className="text-sm text-gray-400">
//                 Navigate complex regulations with 3000+ partners
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl p-6 border border-blue-400/30">
//               <Globe className="w-8 h-8 text-blue-400 mb-4" />
//               <h3 className="text-lg font-bold mb-2">Cultural Strategy</h3>
//               <p className="text-sm text-gray-400">
//                 4000+ native translators for authentic connections
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl p-6 border border-green-400/30">
//               <Zap className="w-8 h-8 text-green-400 mb-4" />
//               <h3 className="text-lg font-bold mb-2">Localized Operations</h3>
//               <p className="text-sm text-gray-400">
//                 Native teams for seamless player experiences
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-6 border border-orange-400/30">
//               <TrendingUp className="w-8 h-8 text-orange-400 mb-4" />
//               <h3 className="text-lg font-bold mb-2">Market Research</h3>
//               <p className="text-sm text-gray-400">
//                 Intelligence-driven insights for competitive advantage
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Results Section */}
//       <section id="results" className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               The Numbers That Speak for Themselves
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               These aren't just numbers—they're proof of our commitment to
//               delivering measurable results
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
//                   <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
//                     {stat.number}
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-white">
//                     {stat.label}
//                   </h3>
//                   <p className="text-gray-400 text-sm">{stat.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CRM & Retention */}
//       <section className="py-20 bg-black/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Players Become Advocates
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Our retention strategies don't just reduce churn—they create
//               passionate communities
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center group">
//               <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
//                 <Users className="w-10 h-10 text-green-400" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Acquisition</h3>
//               <p className="text-gray-400">
//                 Strategic onboarding that establishes value from the first
//                 interaction
//               </p>
//             </div>
//             <div className="text-center group">
//               <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
//                 <Target className="w-10 h-10 text-blue-400" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Engagement</h3>
//               <p className="text-gray-400">
//                 Personalized experiences that keep players coming back
//               </p>
//             </div>
//             <div className="text-center group">
//               <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
//                 <Award className="w-10 h-10 text-purple-400" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Loyalty</h3>
//               <p className="text-gray-400">
//                 Reward systems that transform users into brand champions
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About/Why Choose Us */}
//       <section id="about" className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Why Choose Carlyle?
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-400/20">
//               <div className="text-6xl mb-4">⚡</div>
//               <h3 className="text-2xl font-bold mb-4 text-purple-300">
//                 Strategic Mastery
//               </h3>
//               <p className="text-gray-400">
//                 We give you the insight and edge to dominate in every market.
//               </p>
//             </div>
//             <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-400/20">
//               <div className="text-6xl mb-4">✨</div>
//               <h3 className="text-2xl font-bold mb-4 text-blue-300">
//                 Creative Brilliance
//               </h3>
//               <p className="text-gray-400">
//                 Our campaigns aren't just smart—they're memorable and impactful.
//               </p>
//             </div>
//             <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-600/10 to-teal-600/10 border border-green-400/20">
//               <div className="text-6xl mb-4">📈</div>
//               <h3 className="text-2xl font-bold mb-4 text-green-300">
//                 Results-Driven Growth
//               </h3>
//               <p className="text-gray-400">
//                 Data fuels every decision. We don't just promise growth; we
//                 deliver it consistently.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50"
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Revolutionize Your Brand?
//           </h2>
//           <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
//             Let's start something extraordinary. Contact us today to discuss
//             your specific market challenges and growth objectives.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
//               <Phone className="w-5 h-5 mr-2" />
//               Schedule a Consultation
//             </button>
//             <button className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all duration-200 flex items-center justify-center">
//               <Mail className="w-5 h-5 mr-2" />
//               Contact Us
//             </button>
//           </div>

//           <div className="text-sm text-gray-400">
//             Transform your iGaming success story with Carlyle Investment
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black/40 py-8 border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
//               CARLYLE INVESTMENT
//             </div>
//             <p className="text-gray-400 text-sm">
//               © 2024 Carlyle Investment. Igniting iGaming success worldwide.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CarlyleWebsite;

import Hero from "@/components/Hero";
import MarketEntry from "@/components/MarketEntry";
import PowerOfInfluence from "@/components/PowerOfInfluence";
import GameChangingResults from "@/components/GameChangingResults";
import PaidMedia from "@/components/PaidMedia";
import CRMRetention from "@/components/CRMRetention";
import LicensingCompliance from "@/components/LicensingCompliance";
import CulturalStrategy from "@/components/CulturalStrategy";
import LocalizedOperations from "@/components/LocalizedOperations";
import MarketResearch from "@/components/MarketResearch";
import Numbers from "@/components/Numbers";
import ContactUs from "@/components/ContactUs";

const page = () => {
  return (
    <main className="bg">
      <Hero />
      <MarketEntry />
      <PowerOfInfluence />
      <GameChangingResults />
      <PaidMedia />
      <CRMRetention />
      <LicensingCompliance />
      <CulturalStrategy />
      <LocalizedOperations />
      <MarketResearch />
      <Numbers />
      <ContactUs />
    </main>
  );
};

export default page;
