'use strict';
var s = require("underscore.string");
var yeoman = require('yeoman-generator');

module.exports = function(moduletype) {

  var moduleconfig;

  var Generator = function(args, options) {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('modulename', { type: String, required: false });
    this.argument('description', { type: String, required: false });
    this.pkg = require('./package.json');
  };

  var prompts = [
    {
      name: 'modulename',
      message: 'Name this ' + moduletype
    },
    {
      name: 'description',
      message: 'Describe this' + moduletype
    },
    {
      name: 'author',
      message: 'Whats your name? (the author)',
      store: true
    }
  ];

  var promptConfig = function() {


    var cb = this.async(),
      welcomeMsg = 'generator-atomic:' + moduletype + ' version: ' + this.pkg.version;

    console.log(welcomeMsg);

    if(this.modulename) {
      prompts = [];
    }

    this.prompt(prompts, function(props) {

      moduleconfig = this.config.get(moduletype);

      this.modulename = props.modulename || this.modulename;
      this.modulename = s.slugify(this.modulename);

      this.author = props.author || ' ';
      this.description = props.description || this.description || moduletype + ' description here';

      this.appname   = this.config.get('appname');
      this.projectName = this.config.get('projectName');
      this.namespace = this.config.get('namespace');
      this.cssPreprocessor = this.config.get('cssPreprocessor') || 'less';
      this.cssPreprocessorExtension = this.config.get('cssPreprocessorExtension') || 'less';

      this.galen = this.config.get('galen');
      this.karma = this.config.get('karma');
      this.camelized = this.config.get('camelized');

      this.modulenameAlwaysCamelized = s.camelize(this.modulename);
      this.modulenameCamelized = (this.camelized) ? this.modulenameAlwaysCamelized : this.modulename;

      cb();
    }.bind(this));
  };

  var sourceFiles = function() {
    this.copy('../../templates/module.jade', 'app/' + moduleconfig.modulefolder + '/' + this.modulenameCamelized + '/' + this.modulenameCamelized + '.jade');

    if (moduleconfig.markupmixins) {
      this.copy('../../templates/_module.jade', 'app/' + moduleconfig.modulefolder + '/' + this.modulenameCamelized + '/_' + this.modulenameCamelized + '.jade');
    }
    if (moduleconfig.content) {
      this.copy('../../templates/module.yaml', 'app/' + moduleconfig.modulefolder + '/' + this.modulenameCamelized + '/' + this.modulenameAlwaysCamelized + '.yaml');
    }
    if (moduleconfig.styles) {
      this.copy('../../templates/module.' + this.cssPreprocessorExtension, 'app/' + moduleconfig.modulefolder + '/' + this.modulenameCamelized + '/' + this.modulenameCamelized + '.' + this.cssPreprocessorExtension);
    }
    if (moduleconfig.scripts) {
      this.copy('../../templates/module.js', 'app/' + moduleconfig.modulefolder + '/' + this.modulenameCamelized + '/' + this.modulenameCamelized + '.js');
    }
    if (this.karma) {
      this.copy('../../templates/module.unit.js', 'app/' + moduleconfig.modulefolder + '/' + this.modulenameCamelized + '/' + this.modulenameCamelized + '.unit.js');
    }
    if (this.galen) {
      this.copy('../../templates/module.spec', 'app/' + moduleconfig.modulefolder + '/' + this.modulenameCamelized + '/' + this.modulenameCamelized + '.spec');
    }
  };


  var install = function() {
    if (this.options['skip-install']) {
      return;
    }
    // this.spawnCommand('grunt', ['injector']);
  };

  return {
    Generator: Generator,
    promptConfig: promptConfig,
    sourceFiles: sourceFiles,
    install: install
  };
};
