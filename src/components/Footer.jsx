import React from "react";
import "./example.css";

const Footer = () => {
  const handleBookingUp = () => {
    const elm = document.getElementById("bookId");
    elm.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer-section">
      <div className="footer-logo"> ExpandVolume</div>
      <div className="footer-text">
        <div className="inner-first">
          <button onClick={handleBookingUp}>Let's Talk </button>
          <p>
            By partnering with ExpandVolume, health, supplement, and fitness
            companies can elevate their customer engagement strategies, increase
            brand loyalty, and drive revenue growth.
          </p>
        </div>
        <div className="combine">
          <div className="inner-second">
            <h3>Address</h3>
            <p style={{ marginTop: "8px" }}>Georgia, Tbillisi</p>
          </div>
          <div className="inner-third">
            <h3>Contact</h3>
            <p style={{ marginTop: "8px" }}>Email: luka@expandvolume.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
