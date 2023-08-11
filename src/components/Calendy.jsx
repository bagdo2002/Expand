import React, { useRef } from "react";
import "./example.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Calendy = () => {
  const ref = useRef();
  return (
    <div className="section-four">
      <div className="calendar" id="bookId">
        {/* calendy widget */}
      </div>
      <div className="four-text">
        <div className="image-div-box">
          <div className="image-container">
            <img className="circle-image" alt="Circle" />
          </div>
        </div>
        <p className="header1">SCHEDULE YOUR CALL WITH LUKA</p>
        <p className="header2">Free 15-Minute Demo Call</p>
        <p className="paragrap">
          By the end of this Audit call, you will have a clear understanding of
          the next steps you can take for your business to start generating
          consistent and reliable results online with AI Chat.
        </p>
        <p className="paragrap2">
          Find a time on Luka’s calendar to schedule your call today and we look
          forward to speaking to you soon!
        </p>
      </div>

      <div className="four-text-end">
        <p className="header3">THIS AUDIT CALL IS PERFECT FOR:</p>
        <ul className="perfect-for">
          <li>
            <span className="inner-check">
              <AiFillCheckCircle />
            </span>
            <span className="inner-perfect-four">
              Businesses looking to
              <span>Reduced Support Costs.</span>
            </span>
          </li>
          <li>
            <span className="inner-check">
              <AiFillCheckCircle />
            </span>
            <span className="inner-perfect-four">
              Businesses looking to
              <span>Increase Lifetime Value (LTV)</span>
            </span>
          </li>
          <li>
            <span className="inner-check">
              <AiFillCheckCircle />
            </span>
            <span className="inner-perfect-four">
              Businesses looking to
              <span>Optimize Growth .</span>
            </span>
          </li>
          <li>
            <span className="inner-check">
              <AiFillCheckCircle />
            </span>
            <span className="inner-perfect-four">
              Businesses looking to
              <span>
                Automate Sales Support With Our Unique Product
                DiscoveryExperience
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calendy;
