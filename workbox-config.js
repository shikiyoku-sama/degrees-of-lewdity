module.exports = {
  globDirectory: '.',
  globPatterns: [
    'img/**/*.{png,gif,svg,js,css}',
    'DolSettingsExport.json',
    'style.css',
    'register-service-worker.js',
    'manifest.json',
    'index.html',
  ],
  maximumFileSizeToCacheInBytes: 41943040, // 40 MB
  cacheId: 'DoL',
  cleanupOutdatedCaches: true,

  swDest: 'sw.js',
  inlineWorkboxRuntime: true,
  babelPresetEnvTargets: ['last 5 Chrome versions'],
  sourcemap: false,

  mode: 'production'
};
