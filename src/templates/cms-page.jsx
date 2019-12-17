import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Page from "./page";

export default function CMSPageTemplate({ data: { mdx } }) {
  return (
    <Page
      title={mdx.frontmatter.title}
      image={mdx.frontmatter.image && <Img key="image" fluid={mdx.frontmatter.image.childImageSharp.fluid} />}
    >
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Page>
  );
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxHeight: 400, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
