import React from "react";
import MainSection from "../sections/MainSection";
import ServiceCards from "../sections/ServiceCards";
import StepsSection from "../sections/StepsSection";
import FeaturesSection from "../sections/FeaturesSection";

const Home = () => {
  return (
    <div>
      <MainSection />
      <ServiceCards />
      <StepsSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
