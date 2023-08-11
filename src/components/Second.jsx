import Reactm, { useState, useEffect, useRef } from "react";
import "./example.css";
import Typewriter from "./Typewriter ";

const Second = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = textRef.current;

      if (textElement) {
        const { top } = textElement.getBoundingClientRect();
        const isVisible = top <= window.innerHeight * 0.75; // Adjust the percentage as needed

        setIsTextVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about" id="aboutId">
      <div className="inner-about">
        <div className="about-header">
          <h1 ref={textRef}>ABOUT US</h1>
        </div>
        <div className="box-for-text">
          {isTextVisible ? (
            <Typewriter
              classP={"paragrap"}
              text={
                "ExpandVolume is a pioneering company at the forefront of leveraging advanced AI technology to transform the way health, supplement, and fitness companies interact with their customers. Specializing in the development and implementation of AI-driven chatbots, ExpandVolume is redefining customer engagement and enhancing brand experiences across the health and wellness industry.  At ExpandVolume, our mission is to empower health, supplement, and fitness businesses to forge stronger connections with their clients by providing cutting-edge AI chatbot solutions. We believe that every interaction between a company and its customers is an opportunity to educate, inspire, and support, and our AI chatbots are designed to seamlessly facilitate this exchange."
              }
              delay={1}
            />
          ) : (
            <div>...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Second;
