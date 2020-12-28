import React from "react";
//import Button from "react-bootstrap/Button";
import imgHome from '../img/home-bg.jpg'

const HeaderNav = () => {
  return (
    <header class="masthead" style={{ backgroundImage: `url(${imgHome})` }}>
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>gökAYten</h1>
            <span class="subheading">
              “Lovers don't finally meet somewhere. They're in each other all along...” Mevlana
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default HeaderNav;
