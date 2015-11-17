'use strict';
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var fs = require('fs-extra');
var s = require("underscore.string");

module.exports = function(options) {
  return function(subgenerator) {
    var config = {};
    switch (subgenerator) {
      case 'atom':
        config.modulefolder= '1_atoms';
        config.markupmixins= true;
        config.content= true;
        config.scripts= false;
        config.styles= true;
        break;
      case 'molecule':
        config.modulefolder= '2_molecules';
        config.markupmixins= true;
        config.content= true;
        config.scripts= true;
        config.styles= true;
        break;
      case 'organism':
        config.modulefolder= '3_organisms';
        config.markupmixins= true;
        config.content= true;
        config.scripts= true;
        config.styles= true;
        break;
      case 'template':
        config.modulefolder= '4_templates';
        config.markupmixins= false;
        config.content= true;
        config.scripts= false;
        config.styles= false;
        break;
      case 'page':
        config.modulefolder= '5_pages';
        config.markupmixins= false;
        config.content= true;
        config.scripts= false;
        config.styles= false;
        break;
    }

    describe('atomic:' + subgenerator, function() {
      var cssPreprocessor = options.cssPreprocessor;
      var cssPreprocessorExtension = cssPreprocessor.replace('sass', 'scss');

      var moduleName = 'Test module-name_name';

      var moduleNameCamelized = s.camelize(moduleName);
      var moduleNameAlwaysCamelized = moduleNameCamelized;
      if (!options.camelized) {
        moduleNameCamelized = s.slugify(moduleName);
      }

      before(function (done) {
        helpers.run(path.join(__dirname, './' + subgenerator))
          .inTmpDir(function (dir) {
            fs.copySync(path.join(__dirname, './templates/common/'+cssPreprocessor), dir)
          })
          .withPrompts({ modulename: moduleName })
          .withPrompts({ description: 'Test Description' })
          .withPrompts({ author: 'Test Runner' })
          .withOptions({ skipInstall: true })
          .on('end', done);
      });

      it('creates jade source files', function() {
        assert.file([
          'app/' + config.modulefolder + '/' + moduleNameCamelized + '/' + moduleNameCamelized + '.jade'
        ]);
      });

      if (config.markupmixins) {
        it('creates jade mixin files', function() {
          assert.file([
            'app/' + config.modulefolder + '/' + moduleNameCamelized + '/_' + moduleNameCamelized + '.jade'
          ]);
        });
      }

      if (config.scripts) {
        it('creates javascript source file', function() {
          assert.file([
            'app/' + config.modulefolder + '/' + moduleNameCamelized + '/' + moduleNameCamelized + '.js'
          ]);
        });
      }

      if (config.styles) {
        it('creates stylesheet file: ' + cssPreprocessorExtension, function() {
          assert.file([
            'app/' + config.modulefolder + '/' + moduleNameCamelized + '/' + moduleNameCamelized + '.' + cssPreprocessorExtension
          ]);
        });
      }

      if (config.content) {
        it('creates content file', function() {
          assert.file([
            'app/' + config.modulefolder + '/' + moduleNameCamelized + '/' + moduleNameAlwaysCamelized + '.yaml'
          ]);
        });
      }

      if (options.karma) {
        it('creates javascript unit test', function() {
          assert.file([
            'app/' + config.modulefolder + '/' + moduleNameCamelized + '/' + moduleNameCamelized + '.unit.js'
          ]);
        });
      }

      if(options.galen) {
        it('creates spec file', function() {
          assert.file([
            'app/' + config.modulefolder + '/' + moduleNameCamelized + '/' + moduleNameCamelized + '.spec'
          ]);
        });
      }

    });
  }
};
