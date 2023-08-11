import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./example.css";

const Example = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    setShowHeader(true);
  }, []);

  const handleService = () => {
    const elem = document.getElementById("serviceId");
    elem.scrollIntoView({ behavior: "smooth" });
    console.log(elem);
  };
  const handleBook = () => {
    const elem = document.getElementById("bookId");
    elem.scrollIntoView({ behavior: "smooth" });
    console.log(elem);
  };
  return (
    <div className="container">
      <div className="nav">
        <div className="logo">ExpandVolume</div>
        <div className="btns">
          <div onClick={handleService} className="service-btn">
            Our service
          </div>
        </div>
      </div>
      <CSSTransition
        in={showHeader}
        timeout={1000}
        classNames="alert"
        unmountOnExit
      >
        <div className="header-section">
          <div className="inner-header-section">
            <h1>
              Revolutionizing Health and Fitness Engagement with AI Chatbots
            </h1>
            <p>Your Health and Fitness Chatbot Partner</p>
          </div>
          <div className="header-btns">
            <button onClick={handleBook}>Let's Talk</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Example;
