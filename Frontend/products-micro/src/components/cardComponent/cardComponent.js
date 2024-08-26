import React from "react";
import "./cardComponent.css";

export const CardComponent = ({ product }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="container">
      <div className="img">
        <img src={product.imgURL} alt="Product Image" />
      </div>
      <div className="data" dir="rtl">
        <div className="price">
          <div >
            <span className="discounted-price">{product.discountedPrice}₪</span>
            <span className="original-price">{product.originalPrice}</span>
          </div>

          <div className="rating" dir="ltr">{renderStars(product.rating)}</div>
        </div>

        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};
