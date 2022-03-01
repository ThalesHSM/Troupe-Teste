module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./src/setupTests.ts'],
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'lcov'],
  testPathIgnorePatterns: ['/cypress/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },

  moduleNameMapper: {
    '@Assets/(.*)': './src/assets/',
  },
};
