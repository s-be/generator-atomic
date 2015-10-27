'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('atomic:atom', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../atom'))
      .withPrompts({ modulename: 'Test module-name_name' })
      .withPrompts({ description: 'Test Description' })
      .withPrompts({ author: 'Test Runner' })
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates jade source files', function () {
    assert.file([
      'app/1_atoms/TestModuleNameName/TestModuleNameName.jade',
      'app/1_atoms/TestModuleNameName/_TestModuleNameName.jade'
    ]);
  });

  it('creates javascript source file', function () {
    assert.file([
      //'app/1_atoms/TestModuleNameName/TestModuleNameName.js'
    ]);
  });

  it('creates stylesheet file', function () {
    assert.file([
      'app/1_atoms/TestModuleNameName/TestModuleNameName.less'
    ]);
  });

  it('creates content file', function () {
    assert.file([
      'app/1_atoms/TestModuleNameName/TestModuleNameName.yaml'
    ]);
  });

  it('creates spec file', function () {
    assert.file([
      'app/1_atoms/TestModuleNameName/TestModuleNameName.spec'
    ]);
  });
});
