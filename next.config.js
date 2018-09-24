const withPlugins = require("next-compose-plugins");
const withSass = require('@zeit/next-sass');
const withImages = require("next-images");
const withFonts = require('next-fonts');
// const withCSS = require('@zeit/next-css');

const plugins = [
  withSass,
  withImages,
  withFonts,
  // withCSS
];

module.exports = withPlugins([...plugins], {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})

