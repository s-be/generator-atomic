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
      name: 'projectName',
      message: 'Name of the new Project'
    }
  ];

  this.prompt(prompts, function(props) {
    this.projectName = props.projectName;
    this.appname = s.slugify(this.projectName);
    cb();
  }.bind(this));
};

Generator.prototype.tools = function tools() {
  this.template('bowerrc', '.bowerrc');
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
};

Generator.prototype.editor = function editor() {
  this.copy('csscomb.json', '.csscomb.json');
  this.copy('csslintrc', '.csslintrc');

  this.copy('jscsrc', '.jscsrc');
  this.copy('jshintrc', '.jshintrc');

  this.copy('editorconfig', '.editorconfig');
};

Generator.prototype.git = function git() {
  this.template('_gitignore', '.gitignore');
};

Generator.prototype.gruntfile = function gruntfile() {
  this.template('_Gruntfile.js', 'Gruntfile.js');

  this.copy('tasks/aliases.yaml', 'tasks/aliases.yaml');
  this.copy('tasks/bump.js', 'tasks/bump.js');
  this.copy('tasks/changelog.js', 'tasks/changelog.js');
  this.copy('tasks/clean.js', 'tasks/clean.js');
  this.copy('tasks/connect.js', 'tasks/connect.js');
  this.copy('tasks/copy.js', 'tasks/copy.js');
  this.copy('tasks/jade.js', 'tasks/jade.js');
  this.copy('tasks/less.js', 'tasks/less.js');
  this.copy('tasks/watch.js', 'tasks/watch.js');
  this.copy('tasks/htmlmin.js', 'tasks/htmlmin.js');
  this.copy('tasks/injector.js', 'tasks/injector.js');
  this.copy('tasks/imagemin.js', 'tasks/imagemin.js');
  this.copy('tasks/rev.js', 'tasks/rev.js');
  this.copy('tasks/svgmin.js', 'tasks/svgmin.js');
  this.copy('tasks/usemin.js', 'tasks/usemin.js');
  this.copy('tasks/wiredep.js', 'tasks/wiredep.js');
  this.copy('tasks/useminPrepare.js', 'tasks/useminPrepare.js');
  this.copy('tasks/autoprefixer.js', 'tasks/autoprefixer.js');

};


Generator.prototype.sourceFiles = function sourceFiles() {
  this.directory('content', 'app/content');
  this.directory('jade', 'app/jade');
  this.directory('scripts', 'app/scripts');
  this.directory('styles', 'app/styles');
  this.directory('tests', 'app/tests');

};

Generator.prototype.install = function() {
  /*if (this.options['skip-install']) {
    return;
  }*/

  //var done = this.async();
  this.installDependencies(/*{
    //skipMessage: this.options['skip-install-message'],
    //skipInstall: this.options['skip-install'],
    //callback: done
  }*/);
};
