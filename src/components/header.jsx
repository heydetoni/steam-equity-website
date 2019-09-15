import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import "../assets/sass/main.scss";
const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { siteMetadata } = site;
  return (
    <header id="header">
      <Link className="title" to="/">
        {siteMetadata.title}
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/generic" activeClassName="active">
              Generic
            </Link>
          </li>
          <li>
            <Link to="/elements" activeClassName="active">
              Elements
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
