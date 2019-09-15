import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";

const Feature = props => (
  <section>
    <span className="icon major">
      <FontAwesomeIcon icon={props.icon} />
    </span>
    <h3>{props.title}</h3>
    <p>{props.body}</p>
  </section>
);

Feature.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  icon: PropTypes.string
};

export default Feature;
