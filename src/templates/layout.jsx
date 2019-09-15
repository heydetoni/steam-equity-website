import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";
import Footer from "../components/footer";
import SEO from "../components/seo";

const Layout = ({ children }) => (
  <React.Fragment>
    <SEO />
    {children}
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
