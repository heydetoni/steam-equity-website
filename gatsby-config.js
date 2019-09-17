const { join } = require("path");

module.exports = {
  /** This path is subpath of your hosting https://domain.tld/subpath */
  pathPrefix: "/",
  siteMetadata: {
    /** Title of the website */
    title: "STEAM Equity",
    /** Description of the website */
    description: "STEAM Equity Club at SJHS",
    author: {
      /* Title of the author. */
      name: "Jonah Snider",
      /** Twitter username (ex. `@gatsbyjs`). */
      twitter: ""
    },
    /** The URL the site is hosted at. Used for generating a sitemap. */
    siteUrl: "https://steam.zws.im",
    /** Info displayed in the contact component at the bottom of the main page. */
    contact: {
      /** Social media links. Don't just randomly add stuff here, it has to get programmed to read the config. */
      socialMedia: {
        instagram: "https://instagram.com/sjhssteamequityy",
        gitHub: "https://github.com/pizzafox/steam-equity-website"
      },
      /** Email to display in contact component. */
      email: "example@example.com",
      /** Phone number to display in contact component. */
      phone: "(000) 000-0000",
      /** Address to show in contact form. Each item gets its own line. */
      address: [
        { key: "streetAddress", value: "275 N 24th St" },
        { key: "city", value: "San Jose" },
        { key: "stateAndZip", value: "CA 95116" }
      ]
    }
  },
  plugins: [
    // {
    //   // This is the very first plugin on purpose
    //   // If it isn't Gatsby will throw `ERROR #85909 GRAPHQL Field "image" must not have a selection since type "String" has no subfields`
    //   // See Gatsby Remark relative images plugin FAQ https://www.gatsbyjs.org/packages/gatsby-remark-relative-images/#im-getting-the-error-field-image-must-not-have-a-selection-since-type-string-has-no-subfields
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: join(__dirname, "content", "images"),
    //     name: "images"
    //   }
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: join(__dirname, "content", "pages"),
        name: "pages"
      }
    },
    { resolve: "gatsby-transformer-sharp" },
    { resolve: "gatsby-plugin-sharp" },
    { resolve: "gatsby-plugin-react-helmet" },
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
        icon: "content/website-icon.png"
      }
    },
    { resolve: "gatsby-plugin-sass" },
    // This goes after all the CSS stuff is finished
    { resolve: "gatsby-plugin-purgecss", options: { printRejected: true } },
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
      resolve: "gatsby-plugin-offline",
      options: { precachePages: ["/*"] }
    },
    { resolve: "gatsby-plugin-netlify-cms" }
  ]
};
