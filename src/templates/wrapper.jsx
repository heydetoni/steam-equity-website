import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";
import Header from "../components/header";
import Layout from "./layout";

const Page = ({ children, title }) => (
  <Layout title={title}>
    <Header />
    <div id="wrapper">{children}</div>
  </Layout>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Page;
