module.exports = {
  siteMetadata: {
    title: "Gatsby CMS",
    author: "Lisandro Saez"
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
};
