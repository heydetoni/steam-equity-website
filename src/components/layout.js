import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";
import SEO from "./seo";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <SEO />
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
