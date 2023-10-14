import React from "react";
import MainSection from "../sections/MainSection";
import ServiceCards from "../sections/ServiceCards";
import StepsSection from "../sections/StepsSection";
import FeaturesSection from "../sections/FeaturesSection";
import InfoSection from "../sections/InfoSection";
import Faqs from "../sections/Faqs";
import Footer from "../sections/Footer";
import Login from "../authentication/Login";

const Home = () => {
  return (
    <div>
      <MainSection />
      <ServiceCards />
      <StepsSection />
      <FeaturesSection />
      <InfoSection />
      <Faqs />
      <Footer />
      {/* <Login /> */}
    </div>
  );
};

export default Home;
