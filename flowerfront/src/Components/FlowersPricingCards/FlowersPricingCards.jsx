import React, { useEffect, useState } from "react";
import "./FlowersPricingCards.scss";

const FlowersPricingCards = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/flower/`);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <div className="flowers-pricing-cards">
      {data.map((x) => (
        <div className="flowers-pricing-card" key={x._id}>
          <img src={x.img} alt="" />
          <h3>{x.name}</h3>
          <span>${x.price}</span>
        </div>
      ))}
    </div>
  );
};

export default FlowersPricingCards;
