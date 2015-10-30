'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('atomic:template', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../template'))
      .withPrompts({ modulename: 'Test module-name_name' })
      .withPrompts({ description: 'Test Description' })
      .withPrompts({ author: 'Test Runner' })
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates jade source files', function () {
    assert.file([
      'app/4_templates/TestModuleNameName/TestModuleNameName.jade'
    ]);
  });

  it('creates stylesheet file', function () {
    assert.file([
      //'app/4_templates/TestModuleNameName/TestModuleNameName.scss'
    ]);
  });

  it('creates content file', function () {
    assert.file([
      'app/4_templates/TestModuleNameName/TestModuleNameName.yaml'
    ]);
  });

  it('creates spec file', function () {
    assert.file([
      'app/4_templates/TestModuleNameName/TestModuleNameName.spec'
    ]);
  });
});
