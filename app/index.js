'use strict';
var util = require('util');
var path = require('path');
var s = require("underscore.string");
var yeoman = require('yeoman-generator');
//var chalk = require('chalk');
//var yosay = require('yosay');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.pkg = require('../package.json');

};

util.inherits(Generator, yeoman.generators.Base);



Generator.prototype.promptConfig = function promptConfig() {
  var cb = this.async(),
    welcomeMsg = 'generator-atomic version: ' + this.pkg.version,
    prompts;

  console.log(welcomeMsg);

  prompts = [
    {
      name:     'projectName',
      message:  'Name of the new Project'
    },
    {
      name: 'namespace',
      message: 'Choose the javascript namespace (should be short, lowercase, no special-chars)'
    },
    {
      name:    'author',
      message: 'Whats your name? (the author)',
      store:    true
    },
    {
      type: 'list',
      name: 'cssPreprocessor',
      message: 'What would you like to use to ' + 'write styles'.blue + '?',
      choices: ['Sass', 'Less'],
      filter: function(val) {
        var filterMap = {
          'Sass': 'sass',
          'Less': 'less'
        };

        return filterMap[val];
      }
    }
  ];

  this.prompt(prompts, function(props) {
    this.projectName = props.projectName;
    this.appname = s.slugify(this.projectName);
    this.namespace = props.namespace.replace(/[^\w\s]/gi, '');
    this.author = props.author;
    this.cssPreprocessor = props.cssPreprocessor;
    this.cssPreprocessorExtension = this.cssPreprocessor.replace('sass','scss');

    this.config.save();
    this.config.set('appname', this.appname);
    this.config.set('projectName', this.projectName);
    this.config.set('namespace', this.namespace);
    this.config.set('author', this.author);
    this.config.set('cssPreprocessor', this.cssPreprocessor);
    this.config.set('cssPreprocessorExtension', this.cssPreprocessorExtension);
    cb();
  }.bind(this));
};

Generator.prototype.tools = function tools() {
  this.template('bowerrc', '.bowerrc');
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
};

Generator.prototype.editor = function editor() {
  this.copy('csscomb.json', '.csscomb.json');
  this.copy('_stylelintrc', '.stylelintrc');

  this.copy('eslintrc', '.eslintrc');

  this.copy('editorconfig', '.editorconfig');
};

Generator.prototype.git = function git() {
  this.template('_gitignore', '.gitignore');
};

Generator.prototype.gruntfile = function gruntfile() {
  this.template('_Gruntfile.js', 'Gruntfile.js');

  this.copy('tasks/aliases.yaml', 'tasks/aliases.yaml');
  this.copy('tasks/babel.js', 'tasks/babel.js');
  this.copy('tasks/bump.js', 'tasks/bump.js');
  this.copy('tasks/changelog.js', 'tasks/changelog.js');
  this.copy('tasks/clean.js', 'tasks/clean.js');
  this.copy('tasks/connect.js', 'tasks/connect.js');
  this.copy('tasks/copy.js', 'tasks/copy.js');
  this.copy('tasks/jade.js', 'tasks/jade.js');
  this.copy('tasks/' + this.cssPreprocessor + '.js', 'tasks/' + this.cssPreprocessor + '.js');
  this.copy('tasks/watch.js', 'tasks/watch.js');
  this.copy('tasks/htmlmin.js', 'tasks/htmlmin.js');
  this.copy('tasks/injector.js', 'tasks/injector.js');
  this.copy('tasks/imagemin.js', 'tasks/imagemin.js');
  this.copy('tasks/rev.js', 'tasks/rev.js');
  this.copy('tasks/svgmin.js', 'tasks/svgmin.js');
  this.copy('tasks/usemin.js', 'tasks/usemin.js');
  this.copy('tasks/wiredep.js', 'tasks/wiredep.js');
  this.copy('tasks/useminPrepare.js', 'tasks/useminPrepare.js');
  this.copy('tasks/postcss.js', 'tasks/postcss.js');
  this.copy('tasks/parallelize.js', 'tasks/parallelize.js');
  this.copy('tasks/eslint.js', 'tasks/eslint.js');
  this.copy('tasks/combine_mq.js', 'tasks/combine_mq.js');
  this.copy('tasks/galen.js', 'tasks/galen.js');
  this.copy('tasks/karma.js', 'tasks/karma.js');
  this.copy('tasks/concat.js', 'tasks/concat.js');
  this.copy('tasks/express.js', 'tasks/express.js');
  this.copy('tasks/open.js', 'tasks/open.js');
};

Generator.prototype.tests = function tests() {
  this.directory('tests', 'tests');
};


Generator.prototype.sourceFiles = function sourceFiles() {
  this.directory('0_basics/nx-helpers', 'app/0_basics/nx-helpers');
  this.template('0_basics/_default.jade', 'app/0_basics/_default.jade');
  this.template('0_basics/controller.js', 'app/0_basics/controller.js');
  this.template('0_basics/ie9.' + this.cssPreprocessorExtension, 'app/0_basics/ie9.' + this.cssPreprocessorExtension);
  this.template('0_basics/main.' + this.cssPreprocessorExtension, 'app/0_basics/main.' + this.cssPreprocessorExtension);
  this.template('0_basics/nojs.' + this.cssPreprocessorExtension, 'app/0_basics/nojs.' + this.cssPreprocessorExtension);
  this.template('0_basics/variables.' + this.cssPreprocessorExtension, 'app/0_basics/variables.' + this.cssPreprocessorExtension);
  this.template('0_basics/basics.yaml', 'app/0_basics/basics.yaml');

  this.directory('1_atoms', 'app/1_atoms');
  this.directory('2_molecules', 'app/2_molecules');
  this.directory('3_organisms', 'app/3_organisms');
  this.directory('4_templates', 'app/4_templates');
  this.directory('5_pages', 'app/5_pages');
  this.copy('index.jade', 'app/index.jade');

  this.directory('images', 'app/images');
  this.directory('fonts', 'app/fonts');

  this.copy('server.js', 'server.js');
};



Generator.prototype.install = function() {
  if (this.options['skip-install']) {
    return;
  }

  //var done = this.async();
  this.installDependencies({/*
    skipMessage: this.options['skip-install-message'],
    skipInstall: this.options['skip-install'],
    callback: done*/
  });
};

Generator.prototype.installBaseModules = function() {
  if (this.options['skip-install']) {
    return;
  }
  this.composeWith('atomic:molecule', { args: [
    "mainmenu", "The mainmenu"
  ]});
  this.composeWith('atomic:molecule', { args: [
    "breadcrumb", "The breadcrumb"
  ]});
  this.composeWith('atomic:organism', { args: [
    "header", "The page header"
  ]});
  this.composeWith('atomic:organism', { args: [
    "footer", "The page footer"
  ]});

};
