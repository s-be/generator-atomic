'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('atomic:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({ name: 'Test Project' })
      .withPrompts({ namespace: 'mse' })
      .withPrompts({ author: 'Test Runner' })
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates project files', function () {
    assert.file([
      'bower.json',
      'package.json',
      '.gitignore',
      'README.md'
    ]);
  });

  it('creates editor config files', function () {
    assert.file([
      '.editorconfig',
      '.jshintrc',
      '.csscomb.json',
      '.csslintrc',
      '.eslintrc',
      '.jshintrc'
    ]);
  });

  it('creates jade source files', function () {
    assert.file([
      'app/index.jade',
      'app/0_basics/_default.jade',
      'app/1_atoms/index.jade',
      'app/2_molecules/index.jade',
      'app/3_organisms/index.jade',
      'app/4_templates/index.jade',
      'app/5_pages/index.jade'
    ]);
  });

  it('creates javascript source files', function () {
    assert.file([
      'app/0_basics/controller.js'
    ]);
  });

  it('creates stylesheet files', function () {
    assert.file([
      'app/0_basics/main.less',
      'app/0_basics/ie9.less',
      'app/0_basics/nojs.less',
      'app/0_basics/variables.less'
    ]);
  });

  it('creates content files', function () {
    assert.file([
      'app/0_basics/basics.yaml'
    ]);
  });
});
