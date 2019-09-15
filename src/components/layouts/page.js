import PropTypes from "prop-types";
import React from "react";
import "../../assets/sass/main.scss";
import Layout from "./layout";

const Page = props => (
  <Layout>
    <section key="section" id="main" className="wrapper">
      <div key="inner" className="inner">
        <h1 key="title" className="major">
          {props.title}
        </h1>
        {props.image && (
          <span key="imageWrapper" className="image fit">
            <img key="image" src={props.image} />
          </span>
        )}
        {props.children}
      </div>
    </section>
  </Layout>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Page;
