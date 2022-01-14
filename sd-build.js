const StyleDictionary = require("style-dictionary");

const BUILD_THEMES = ["globals", "site", "organisms", "elements"];

const BUILD_PATHS = {
  buildPath: `tokens/output/`,
  withTheme: {
    source: (theme) => [`tokens/input/${theme}.json`],
    destination: (theme) => `_${theme}.scss`,
  },
};

/**
 * Creates a config that outputs a theme with a prefix
 * @param {object} theme A tokens object describing a theme
 * @returns {string} A Style Dictionary config
 */
function getStyleDictionaryConfig(theme) {
  const config = {
    source: BUILD_PATHS.withTheme.source(theme),
    prefix: `${theme}--`,
    buildPath: BUILD_PATHS.buildPath,
    platforms: {
      scss: {
        transformGroup: "scss",
        files: [
          {
            destination: BUILD_PATHS.withTheme.destination(theme),
            format: "scss/variables",
          },
        ],
      },
    },
  };

  return config;
}

/**
 * Processes a name theme with Style Dictionary
 * @param {string} theme A theme name
 */
function processWithTheme(theme) {
  console.log(`Processing ${theme}... `);
  const sdInstance = StyleDictionary.extend(getStyleDictionaryConfig(theme));
  sdInstance.buildPlatform("scss");
  console.log(`Done!`);
  console.log("\n");
}

console.log("Started Style Dictionary build...");
console.log("\n");

BUILD_THEMES.map((theme) => processWithTheme(theme));
