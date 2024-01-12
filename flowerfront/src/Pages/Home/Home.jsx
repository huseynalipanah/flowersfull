import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import Mission from "../../Components/MissionSection/Mission";
import PricingSection from "../../Components/PricingSection/PricingSection";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <HeaderSlider />
        <Mission />
        <PricingSection />
      </div>
    </>
  );
};

export default Home;
