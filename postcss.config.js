const postcssBanner = require('postcss-banner');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssPretty = require('postcss-prettify');

const banner = `Do not edit directly.
This file is built from source code hosted at
http://www.github.com/marxists-org/stylesheets.
Instructions to build and/or contribute can be found there.

Current maintained by Philip Mooney <philipm@marxists.org>.`;

module.exports = {
  plugins: [
    postcssBanner({banner}),
    postcssPresetEnv(),
    postcssMixins(),
    postcssNested(),
    postcssPretty(),
  ]
};
