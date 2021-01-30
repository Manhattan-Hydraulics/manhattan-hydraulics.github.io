module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("CNAME");


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
