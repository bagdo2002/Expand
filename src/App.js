import React from "react";
import Example from "./components/Example";
import Three from "./components/Three";
import "./App.css";
import Second from "./components/Second";
import Third from "./components/Third";
import Footer from "./components/Footer";
import Calendy from "./components/Calendy";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Example />
      </div>
      <div className="animation">
        <Three />
      </div>
      <div className="second">
        <Second />
      </div>
      <div className="third">
        <div className="inner-third-app">
          <Third />
        </div>

        <div className="third-animation">
          <Three />
        </div>
      </div>
      <div className="four">
        <Calendy />
      </div>
      <div className="five">
        <div className="inner-footer-app">
          <Footer />
        </div>

        <div className="footer-animation">
          <Three />
        </div>
      </div>
    </div>
  );
}

export default App;



// 

// tV72O0clU1KvC0lhMOcp2TgXX9u9mp2rfV0yx5nw



// 