const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssPretty = require('postcss-prettify');

module.exports = {
  plugins: [
    postcssPresetEnv(),
    postcssMixins(),
    postcssNested(),
    postcssPretty(),
  ]
};
