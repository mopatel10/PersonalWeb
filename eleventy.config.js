const handlebars = require("handlebars");
const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");

const fs = require("fs");
const path = require("path");

const { marked } = require("marked");


module.exports = function (eleventyConfig) {
      // Delete the dist folder before the build
      eleventyConfig.on("eleventy.before", () => {
        const distPath = path.join(__dirname, "dist");
        if (fs.existsSync(distPath)) {
            fs.rmSync(distPath, { recursive: true, force: true });
            console.log("Deleted the dist folder.");
        }
    });

   // Watch the CSS folder for changes
  eleventyConfig.addWatchTarget("/src/public/css");
  // Passthrough copy for public files
  eleventyConfig.addPassthroughCopy("src/public");
  handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this); // Render the block inside if true
    }
    return options.inverse(this); // Render the else block if false
  });

  // Register 'add' helper for pagination numbers
  handlebars.registerHelper("add", function(arg1, arg2) {
    return arg1 + arg2;
  });
  // Set Handlebars as the templating engine
  eleventyConfig.setLibrary("hbs", handlebars);

  // Add the Handlebars plugin and override the library instance
  eleventyConfig.addPlugin(handlebarsPlugin, {
    // Override the `ejs` library instance
    eleventyLibraryOverride: handlebars,
  });

     // Register a custom 'markdown' helper to parse markdown content
    handlebars.registerHelper("markdown", function (text) {
        return marked(text); // Convert markdown to HTML
    });

    // Define JSONstringify helper
    handlebars.registerHelper("JSONstringify", function (context) {
      return JSON.stringify(context, null, 2); // Pretty-print JSON
  });
   
  eleventyConfig.addGlobalData("contentfulData", async () => {
    const searchData = await require("./src/_data/search.js")();
    return searchData;
  });
  require('dotenv').config();


  return {
    dir: {
      input: "src", 
      includes: "_includes", 
      layouts: "_includes", 
      output: "dist", 
    }
  };
};
