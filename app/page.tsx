import CustomCursor from "../src/components/ui/CustomCursor";
import ScrollProgress from "../src/components/ui/ScrollProgress";

import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";

import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Academics from "../src/components/sections/Academics";
import Campus from "../src/components/sections/Campus";
import LifeAtTIS from "../src/components/sections/LifeAtTIS";
import Sports from "../src/components/sections/Sports";
import WhyTIS from "../src/components/sections/WhyTIS";
import Admissions from "../src/components/sections/Admissions";
import TISExperience from "../src/components/sections/TISExperience";
import Rankings from "../src/components/sections/Rankings";
import Testimonials from "../src/components/sections/Testimonials";
import Collaborations from "../src/components/sections/Collaborations";
import LocationContact from "../src/components/sections/LocationContact";

export default function Home() {
  return (
    <>
      {/* Global UI */}
      <CustomCursor />
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Core sections */}
        <Hero />
        <About />
        <Academics />
        <Campus />
        <Sports /> 
        <LifeAtTIS />
        <TISExperience />
        <Rankings />
        <WhyTIS />
        <Testimonials />
        <Collaborations />
        <LocationContact />
        <Admissions />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}