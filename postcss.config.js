const postcssBanner = require('postcss-banner');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssPretty = require('postcss-prettify');

const banner = `Do not edit directly.
This file is built from source code hosted at
http://www.github.com/marxists-org/stylesheets.
Instructions to build and/or contribute can be found there.

Current maintained by Philip Mooney <philipm@marxists.org>.

Special thank you to past maintainers and contributors:
Andy Blunden, Brian Baggins and David Walters.

All Documents:
This stylesheet is one of the basic MIA standards for ordinary texts
(as opposed to indexes). It is imported into a range of styles with different
colour schemes. New elements can be added here, or new stylesheets added
incorporating a volunteer's specific needs.
e.g. https://www.marxists.org/archive/marx/works/1845/theses/index.htm`;

module.exports = {
  plugins: [
    postcssBanner({banner}),
    postcssPresetEnv(),
    postcssMixins(),
    postcssNested(),
    postcssPretty(),
  ]
};
