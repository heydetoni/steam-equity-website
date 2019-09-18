import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";

const Feature = props => (
  <section>
    <span className="icon major">
      <i className={props.icon} />
    </span>
    {props.title && <h3>{props.title}</h3>}
    {props.children && <p>{props.children}</p>}
  </section>
);

Feature.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  icon: PropTypes.string.isRequired
};

export default Feature;
