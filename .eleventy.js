module.exports = function (eleventyConfig) {
  let markdownIt = require("markdown-it");
  let mila = require("markdown-it-link-attributes");

  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });

  let markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };;

  let milaOptions = {
    pattern: /^(?!(https:\/\/hydraulics\.nyc|#)).*$/gm,
    attrs: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  };

  let markdownLib = markdownIt(markdownItOptions).use(mila, milaOptions);

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "views",
      includes: "elements",
      layouts: "layouts",
    },
  };
};
