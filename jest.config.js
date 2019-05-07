module.exports = {
  collectCoverageFrom: [
    'src/components/**/*.*',
  ],
  coverageReporters: [
    'cobertura',
    'html',
    'text',
    'text-summary',
  ],
  setupFiles: [
    './setupTests.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

};
