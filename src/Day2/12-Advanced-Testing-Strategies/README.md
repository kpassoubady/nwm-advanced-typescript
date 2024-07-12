# Setting Up Jest in a TypeScript Project

## Prerequisites
Node.js installed on your machine
A TypeScript project set up

## Steps to Set Up Jest

### Initialize your project

```bash
npm init -y
```

### Install Jest and ts-jest
```bash
npm install -D jest ts-jest @types/jest
```

### Create Jest Configuration File

You can generate a basic Jest configuration file using ts-jest:

```bash
npx ts-jest config:init
```
This creates a jest.config.js file with the following content:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

### Configure TypeScript for Jest

Ensure your tsconfig.json includes the following settings:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "jsx": "react",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true,
    "types": ["jest"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "**/*.test.ts"]
}```

### Add Test Script to package.json

```json
"scripts": {
  "test": "jest"
}
```

### Run the Tests

```bash
npm test
```

## Basic Jest Commands and Configuration
Common Jest Commands
1. Running Tests

 * To run all tests: npm test
 * To run tests in watch mode: npm test -- --watch

2. Running Specific Tests
 * To run a specific test file: npx jest path/to/test/file.test.ts
 * To run tests matching a pattern: npx jest -t "pattern"

3. Generating Coverage Reports

 * To generate a code coverage report: npx jest --coverage

4. Updating Snapshots
 * To update all snapshots: npx jest --updateSnapshot

## Basic Jest Configuration Options

**preset**

Preconfigured settings for specific environments. For TypeScript, use ts-jest.

**testEnvironment**

Specifies the environment in which the tests are run. Common values are node and jsdom.

**transform**

Specifies how to transform files before testing. For TypeScript, use ts-jest.

**moduleFileExtensions**

An array of file extensions your modules use. For example, ['ts', 'tsx', 'js', 'jsx'].

**testMatch**

An array of glob patterns indicating the test files to be picked up by Jest. Example: ['**/?(*.)+(spec|test).[tj]s?(x)'].

**setupFilesAfterEnv**

An array of file paths to modules that run some code to configure or set up the testing framework before each test file is executed.

Example jest.config.js:

```json
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',  
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    'src/Day2/12-Advanced-Testing-Strategies/src/*.ts',
    '!src/**/index.ts',
    '!src/**/*.d.ts',
  ],
};
```