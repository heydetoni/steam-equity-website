const { join } = require("path");

module.exports = {
  /** This path is subpath of your hosting https://domain.tld/subpath */
  pathPrefix: "/",
  siteMetadata: {
    /** The URL the site is hosted at. Used for generating a sitemap. */
    siteUrl: "https://steam.zws.im"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: join(__dirname, "static", "images"),
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: join(__dirname, "content"),
        name: "pages"
      }
    },
    {
      resolve: "gatsby-json"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: join(__dirname, "data")
      }
    },
    { resolve: "gatsby-transformer-sharp" },
    { resolve: "gatsby-plugin-sharp" },
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-plugin-sass" },

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "images"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of the content container as this plugin uses this as the base for generating different widths of each image.
              maxWidth: 1390
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    { resolve: "gatsby-plugin-sitemap" },
    { resolve: "gatsby-plugin-robots-txt" },
    {
      resolve: "gatsby-plugin-manifest",
      /* eslint-disable camelcase */
      options: {
        name: "STEAM Equity",
        short_name: "STEAM Equity",
        start_url: "/",
        background_color: "#312450",
        theme_color: "#5E42A6",
        display: "standalone",
        // This path is relative to the root of the site.
        icon: "static/images/website-icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: { precachePages: ["/*"] }
    },
    { resolve: "gatsby-plugin-netlify-cms" }
  ]
};
