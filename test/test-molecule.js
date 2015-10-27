'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('atomic:molecule', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../molecule'))
      .withPrompts({ modulename: 'Test module-name_name' })
      .withPrompts({ description: 'Test Description' })
      .withPrompts({ author: 'Test Runner' })
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates jade source files', function () {
    assert.file([
      'app/2_molecules/TestModuleNameName/TestModuleNameName.jade',
      'app/2_molecules/TestModuleNameName/_TestModuleNameName.jade'
    ]);
  });

  it('creates javascript source file', function () {
    assert.file([
      'app/2_molecules/TestModuleNameName/TestModuleNameName.js',
      'app/2_molecules/TestModuleNameName/TestModuleNameName.unit.js'
    ]);
  });

  it('creates stylesheet file', function () {
    assert.file([
      'app/2_molecules/TestModuleNameName/TestModuleNameName.less'
    ]);
  });

  it('creates content file', function () {
    assert.file([
      'app/2_molecules/TestModuleNameName/TestModuleNameName.yaml'
    ]);
  });

  it('creates spec file', function () {
    assert.file([
      'app/2_molecules/TestModuleNameName/TestModuleNameName.spec'
    ]);
  });
});
