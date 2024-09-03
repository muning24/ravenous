import React from "react";
import "./Business.css";

const business = {
  image_src:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zip_code: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const Business = () => {
  return (
    <div className="business">
      <div className="image_container">
        <img src={business.image_src} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className="information">
        <div className="address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zip_code}`}</p>
        </div>
        <div className="reviews">
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className="rating">{`${business.rating} stars`}</h3>
          <p>{`${business.review_count} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
