import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import "../assets/sass/main.scss";
const Header = () => {
  const { dataJson } = useStaticQuery(
    graphql`
      query {
        dataJson {
          siteMetadata {
            title
          }
          header {
            externalLink
            label
            target
          }
        }
      }
    `
  );

  const { siteMetadata, header } = dataJson;
  return (
    <header id="header">
      <Link className="title" to="/">
        {siteMetadata.title}
      </Link>
      {Array.isArray(header) && header.length > 0 && (
        <nav>
          <ul>
            {header.map(item => (
              <li key={item.label}>
                {item.externalLink ? (
                  <a href={item.target}>{item.label}</a>
                ) : (
                  <Link to={item.target} activeClassName="active">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
