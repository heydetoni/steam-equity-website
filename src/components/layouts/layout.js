import PropTypes from "prop-types";
import React from "react";
import "../../assets/sass/main.scss";
import Footer from "../footer";
import Header from "../header";
import SEO from "../seo";

const Layout = ({ children }) => (
  <React.Fragment>
    <SEO />
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
