// next.config.js
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap,
      '/app': { page: '/app' },
    };
  },
};
