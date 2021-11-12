import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-info">
          <h1 className="banner-title">
            FullSuspension <br /> Mountain Bicycle
          </h1>

          <h5 className="banner-text">
            Bicycles are widely used for transportation, recreation, and sport
            (see cycling). Throughout the world, bicycles are essential to
            moving people and goods in areas where there are few automobiles.
          </h5>
          <button className="banner-btn">Shop Now →</button>
        </div>
        <div className="empty"></div>
      </div>
    </div>
  );
};

export default Banner;
