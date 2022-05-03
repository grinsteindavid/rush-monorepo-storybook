module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    const { dirname } = require("path");

    // https://github.com/eirslett/storybook-builder-vite/issues/55
    config.root = dirname(require.resolve("@storybook/builder-vite"));
    // config.server.fsServe = {};
    return config;
  },
};