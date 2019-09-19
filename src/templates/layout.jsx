import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";
import Footer from "../components/footer";
import SEO from "../components/seo";

const Layout = ({ children, title }) => (
  <React.Fragment>
    <SEO title={title} />
    {children}
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Layout;
