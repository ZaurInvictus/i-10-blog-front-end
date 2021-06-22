import React from "react";
//import Button from "react-bootstrap/Button";
import imgHome from '../img/home-bg.jpg'

const Jumbotron = () => {
  return (
    <header className="masthead" style={{ backgroundImage: `url(${imgHome})` }}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>gökAYten</h1>
            <span className="subheading">
              “Lovers don't finally meet somewhere. They're in each other all along...” Mevlana
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Jumbotron;
