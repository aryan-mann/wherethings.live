module.exports = {
  siteMetadata: {
    title: "Where Things Live",
    siteUrl: "https://wherethings.live/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: "./src/assets/",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: process?.env?.INSTA || "3998316794",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
  ],
};
