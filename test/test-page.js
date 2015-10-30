'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('atomic:page', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../page'))
      .withPrompts({ modulename: 'Test module-name_name' })
      .withPrompts({ description: 'Test Description' })
      .withPrompts({ author: 'Test Runner' })
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates jade source files', function () {
    assert.file([
      'app/5_pages/TestModuleNameName/TestModuleNameName.jade'
    ]);
  });

  it('creates stylesheet file', function () {
    assert.file([
      //'app/5_pages/TestModuleNameName/TestModuleNameName.scss'
    ]);
  });

  it('creates content file', function () {
    assert.file([
      'app/5_pages/TestModuleNameName/TestModuleNameName.yaml'
    ]);
  });

  it('creates spec file', function () {
    assert.file([
      'app/5_pages/TestModuleNameName/TestModuleNameName.spec'
    ]);
  });
});
