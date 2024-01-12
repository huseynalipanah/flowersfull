import React from "react";
import OurPricingCards from "./../OurPricingCard/OurPricingCards";
import "./OurPricing.scss";

const OurPricing = () => {
  return (
    <div className="ours-pricing-section">
      <div className="our-pricing-header">
        <p>Devoted to wonderful beauty</p>
        <h1>Events Pricing</h1>
      </div>
      <div className="Our-cards">
        <OurPricingCards />
      </div>
    </div>
  );
};

export default OurPricing;
