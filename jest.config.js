module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    'src/**/*.module.css',
    '!src/app/**', // should be tested in e2e
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/styles/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/.jest/__mocks__/styleMock.js'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx|css)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
