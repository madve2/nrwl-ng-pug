const path = require('path');
const isNgCommand =
  process.argv
    .map(arg => arg.split(path.sep))
    .filter(argParts => argParts[argParts.length - 1] === 'ng').length !== 0;

module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
    '^.+\\.(pug)$': `${__dirname}/tools/pug-jest`
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  ...(isNgCommand
    ? {}
    : {
        projects: [
          '<rootDir>/libs/ng-pug-sample-lib',
          '<rootDir>/apps/ng-pug-sample-app'
        ]
      })
};