module.exports = {
  name: 'ng-pug-sample-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-pug-sample-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
