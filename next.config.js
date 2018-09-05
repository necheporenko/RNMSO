const withPlugins = require("next-compose-plugins");
const withSass = require('@zeit/next-sass');
const withImages = require("next-images");
const withFonts = require('next-fonts');

const plugins = [
  withSass,
  withImages,
  withFonts
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

