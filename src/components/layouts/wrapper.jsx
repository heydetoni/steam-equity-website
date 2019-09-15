import PropTypes from "prop-types";
import React from "react";
import "../../assets/sass/main.scss";
import Header from "../header";
import Layout from "./layout";

const Page = ({ children }) => (
  <Layout>
    <Header />
    <div id="wrapper">{children}</div>
  </Layout>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
