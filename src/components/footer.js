import React from "react";
import "../assets/sass/main.scss";

const Footer = () => (
  <footer id="footer" className="wrapper style1-alt">
    <div className="inner">
      <ul className="menu">
        <li>Copyright {new Date().getFullYear()} STEAM Equity Club</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
