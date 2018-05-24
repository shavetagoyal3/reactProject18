import React from "react";
import { Switch, Route } from 'react-router-dom';

import Nav from "./nav.jsx";
import MainContent from './main_content.jsx';
import Footer from "./footer.jsx";

import "../assets/5be2fa1f/iconse770.css";
import "../assets/5be2fa1f/vendor/javascript.fullPage3d2e.css";
import "../assets/5be2fa1f/vendor/owl.carousel.min3d2e.css";
import "../assets/5be2fa1f/vendor/swiper.min3d2e.css";
import "../assets/5be2fa1f/bundle3d2e.css";

class Main extends React.Component {
componentWillMount() {
    const script = document.createElement("script");
    script.src = "../../custom.js";
    script.async = true;
    document.body.appendChild(script);
    }
  render() {
    	return (
    	<div id="o-wrapper" className="wrapper overflow-hidden">
      
        <Nav />
    		 
    	<MainContent />

        <Footer />
        
      </div>
    	);
    }
}

export default Main;