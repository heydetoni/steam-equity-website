import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";

const Spotlight = props => (
  <section>
    <Link className="image" to={props.to} style={{ backgroundImage: `url(${props.image})` }}></Link>
    <div className="content">
      <div className="inner">
        {props.title && <h2>{props.title}</h2>}
        {props.message && <p>{props.message}</p>}
        {props.to && (
          <ul className="actions">
            <li>
              <Link className="button" to={props.to}>
                Learn more
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  </section>
);

Spotlight.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default Spotlight;
