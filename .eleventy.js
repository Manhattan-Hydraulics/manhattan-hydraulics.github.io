module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });


  return {
    dir: {
      input: "views",
      includes: "elements",
      layouts:"layouts"
    },
  };
};
