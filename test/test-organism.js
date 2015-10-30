'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('atomic:organism', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../organism'))
      .withPrompts({ modulename: 'Test module-name_name' })
      .withPrompts({ description: 'Test Description' })
      .withPrompts({ author: 'Test Runner' })
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates jade source files', function () {
    assert.file([
      'app/3_organisms/TestModuleNameName/TestModuleNameName.jade',
      'app/3_organisms/TestModuleNameName/_TestModuleNameName.jade'
    ]);
  });

  it('creates javascript source file', function () {
    assert.file([
      'app/3_organisms/TestModuleNameName/TestModuleNameName.js',
      'app/3_organisms/TestModuleNameName/TestModuleNameName.unit.js'
    ]);
  });

  it('creates stylesheet file', function () {
    assert.file([
      'app/3_organisms/TestModuleNameName/TestModuleNameName.scss'
    ]);
  });

  it('creates content file', function () {
    assert.file([
      'app/3_organisms/TestModuleNameName/TestModuleNameName.yaml'
    ]);
  });

  it('creates spec file', function () {
    assert.file([
      'app/3_organisms/TestModuleNameName/TestModuleNameName.spec'
    ]);
  });
});
