import React from "react";
import "./example.css";

const Third = () => {
  return (
    <div id="serviceId" className="third-section">
      <div className="service-header">
        <h1>OUR SERVICE</h1>
      </div>
      <div className="service-box">
        <div className="service-item">
          <h3>Intelligent Conversations</h3>
          <p>
            Engage in contextually relevant conversations about health,
            supplements, workouts, and nutrition.
          </p>
        </div>
        <div className="service-item">
          <h3>Personalized Recommendations</h3>
          <p>
            Analyze user preferences and health profiles to deliver customized
            product suggestions.
          </p>
        </div>
        <div className="service-item">
          <h3>24/7 Availability</h3>
          <p>
            Accessible round-the-clock for customers seeking assistance,
            information, or guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
