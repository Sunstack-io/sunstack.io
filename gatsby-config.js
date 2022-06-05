const config = {
  siteMetadata: {
    title: `Sunstack`,
    siteUrl: `https://www.sunstack.io`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-RV7TTTM173"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        siteUrl: `https://sunstack.io/`,
        redirect: true,
        // you can pass any i18next options
        // i18nextOptions: {
        //   interpolation: {
        //     escapeValue: false // not needed for react as it escapes by default
        //   },
        //   keySeparator: false,
        //   nsSeparator: false
        // },
        // pages: [
        //   {
        //     matchPath: "/:lang?/blog/:uid",
        //     getLanguageFromPath: true,
        //     excludeLanguages: ["es"],
        //   },
        // ],
      },
    },
  ],
};

module.exports = config;
