/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

const SEO = (props) => {
  const { site, dataJson } = useStaticQuery(
    graphql`
      query {
        dataJson {
          siteMetadata {
            title
            description
            author {
              twitter
            }
          }
        }
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  const seoTags = [
    {
      property: "og:site_name",
      content: dataJson.siteMetadata.title
    },
    {
      property: "og:title",
      content: props.title || dataJson.siteMetadata.title
    },
    {
      name: "twitter:title",
      content: dataJson.siteMetadata.title
    },
    {
      property: "og:url",
      content: site.siteMetadata.siteUrl
    },
    {
      name: "description",
      content: dataJson.siteMetadata.description
    },
    {
      name: "twitter:description",
      content: dataJson.siteMetadata.description
    },
    {
      property: "og:description",
      content: dataJson.siteMetadata.description
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      name: "twitter:card",
      content: "summary"
    }
  ];

  if (dataJson.siteMetadata.author.twitter) {
    seoTags.push({
      name: "twitter:creator",
      content: dataJson.siteMetadata.author.twitter
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={props.title || dataJson.siteMetadata.title}
      titleTemplate={`%s | ${dataJson.siteMetadata.title}`}
      meta={seoTags}
    />
  );
};

SEO.propTypes ={
  title: PropTypes.string
}

export default SEO;
