const StyleDictionary = require("style-dictionary");

/**
 * Theme names to build — these must match the theme names in Figma Tokens
 * @see https://docs.tokens.studio/sync/github
 */
const BUILD_THEMES = ["global", "site", "components", "elements", "darkmode"];

/**
 * Style Dictionary paths
 * @see https://amzn.github.io/style-dictionary/#/config
 */
const BUILD_PATHS = {
  buildPath: `tokens/output/`,
  withTheme: {
    source: (theme) => [`tokens/input/_${theme}.json`],
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
    platforms: {
      scss: {
        transformGroup: "scss",
        buildPath: BUILD_PATHS.buildPath,
        prefix: `${theme}--`,
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

/**
 * Execute
 */
BUILD_THEMES.map((theme) => processWithTheme(theme));
