/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',  
  coverageReporters: ['json', 'lcov', 'text', 'clover','html'],
  collectCoverageFrom: [
    'src/Day2/12-Advanced-Testing-Strategies/src/*.ts',
    '!src/**/index.ts',
    '!src/**/*.d.ts',
  ],
};