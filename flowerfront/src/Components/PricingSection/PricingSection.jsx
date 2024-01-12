import React from 'react'
import FlowersPricing from './../FlowersPricing/FlowersPricing';
import './PricingSection.scss'
import OurPricing from './../OurPricing/OurPricing';
const PricingSection = () => {
  return (
    <div className='pricing-section'>
        <FlowersPricing />
        <OurPricing />
    </div>
  )
}

export default PricingSection