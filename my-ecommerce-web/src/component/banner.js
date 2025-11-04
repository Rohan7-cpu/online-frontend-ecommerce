import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner-slider">
      <div className="slide-track">
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="Banner 1" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Banner 2" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" alt="Banner 3" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0" alt="Banner 4" />
        </div>
        {/* Repeat same images to create seamless loop */}
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="Banner 1" />
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Banner 2" />
        </div>
      </div>
    </div>
  );
}
