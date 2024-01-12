import React from "react";
import "./FlowersPricing.scss";
import FlowersPricingCards from "./../FlowersPricingCards/FlowersPricingCards";
const FlowersPricing = () => {
  return (
    <>
      <div className="flowers-pricing-header">
        <p>Devoted to wonderful beauty</p>
        <h1>Flowers Pricing</h1>
      </div>
      <div className="flowers-cards">
        <FlowersPricingCards />
      </div>
      </>
  );
};

export default FlowersPricing;
