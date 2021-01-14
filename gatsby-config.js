module.exports = {
  siteMetadata: {
    title: "Gatsby Starter Styled Tailwind",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: "./src/assets/",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
  ],
};
