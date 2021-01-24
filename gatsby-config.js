module.exports = {
  siteMetadata: {
    title: "Where Things Live",
    siteUrl: "https://wherethings.live/",
    // siteUrl: process.env.SITE_URL || "https://wherethings.live/",
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
        username: "3998316794",
        // username: process.env.INSTA || "3998316794",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
};
