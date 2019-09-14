module.exports = {
  // This path is subpath of your hosting https://domain.tld/portfolio
  pathPrefix: "/",
  siteMetadata: {
    title: "STEAM Equity",
    description: "STEAM Equity Club at SJHS",
    author: {
      /* Title of the author */
      name: "Jonah Snider",
      /** Twitter username (ex. `@gatsbyjs`) */
      twitter: ""
    },
    siteUrl: "https://steam.zws.im"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      /* eslint-disable camelcase */
      options: {
        name: "STEAM Equity",
        short_name: "STEAM Equity",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        // This path is relative to the root of the site.
        icon: "src/assets/img/website-icon.png"
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-offline",
      options: { precachePages: ["/index"] }
    }
  ]
};
