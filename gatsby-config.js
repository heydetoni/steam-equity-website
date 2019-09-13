module.exports = {
  // This path is subpath of your hosting https://domain.tld/portfolio
  pathPrefix: "/",
  siteMetadata: {
    title: "STEAM Equity"
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
    "gatsby-plugin-offline"
  ]
};
