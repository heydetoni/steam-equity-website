import PropTypes from "prop-types";
import React from "react";
import "../../assets/sass/main.scss";
import Layout from "./layout";

const Page = ({ children }) => (
  <Layout>
    <div id="wrapper">{children}</div>
  </Layout>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
