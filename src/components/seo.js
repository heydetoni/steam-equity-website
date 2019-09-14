/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              twitter
            }
            siteUrl
          }
        }
      }
    `
  );

  const siteInfo = site.siteMetadata;

  const seoTags = [
    {
      property: "og:site_name",
      content: siteInfo.title
    },
    {
      property: "og:title",
      content: siteInfo.title
    },
    {
      name: "twitter:title",
      content: siteInfo.title
    },
    {
      property: "og:url",
      content: siteInfo.siteUrl
    },
    {
      name: "description",
      content: siteInfo.description
    },
    {
      name: "twitter:description",
      content: siteInfo.description
    },
    {
      property: "og:description",
      content: siteInfo.description
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

  if (siteInfo.author.twitter) {
    seoTags.push({
      name: "twitter:creator",
      content: siteInfo.author.twitter
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={siteInfo.title}
      titleTemplate={`%s | ${siteInfo.title}`}
      meta={seoTags}
    />
  );
};

export default SEO;
