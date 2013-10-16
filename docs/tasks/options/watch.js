module.exports = {
  main: {
    files: ['app/**/*', 'public/**/*', 'vendor/**/*', 'tests/**/*', 'contents/**/*', 'templates/**/*'],
    tasks: ['build:debug']
  },
  test: {
    files: ['app/**/*', 'public/**/*', 'vendor/**/*', 'tests/**/*', 'contents/**/*', 'templates/**/*'],
    tasks: ['build:debug', 'karma:server:run']
  },
  options: {
    debounceDelay: 200
  }
};
