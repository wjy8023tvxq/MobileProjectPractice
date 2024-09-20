const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  return {
    ...defaultConfig,
    watchFolders: ['.'],
    resolver: {
      ...defaultConfig.resolver,
      nodeModulesPaths: ['./node_modules'],
    },
    watcher: {
      ...defaultConfig.watcher,
      watchman: {
        crawlSymlinks: false,
      },
    },
  };
})();