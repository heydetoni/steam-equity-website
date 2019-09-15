import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";

const Spotlight = props => (
  <section>
    <Link className="image" to={props.to} style={{ backgroundImage: `url(${props.image})` }}></Link>
    <div className="content">
      <div className="inner">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <ul className="actions">
          <li>
            <Link className="button" to={props.to}>
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

Spotlight.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Spotlight;
