module.exports = {
  name: 'ng-pug-sample-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-pug-sample-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
