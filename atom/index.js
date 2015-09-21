'use strict';
var util = require('util');
var path = require('path');
var s = require("underscore.string");
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('modulename', { type: String, required: false });
  this.argument('description', { type: String, required: false });
  this.pkg = require('../package.json');
};

util.inherits(Generator, yeoman.generators.Base);



Generator.prototype.promptConfig = function promptConfig() {
  var cb = this.async(),
    welcomeMsg = 'generator-atomic:atom version: ' + this.pkg.version,
    prompts;

  console.log(welcomeMsg);

  prompts = [
    {
      name: 'modulename',
      message: 'Name this atom'
    },
    {
      name: 'description',
      message: 'Describe this atom'
    },
    {
      name: 'author',
      message: 'Whats your name? (the author)',
      store: true
    }
  ];

  if(this.modulename) {
    prompts = [];
  }

  this.prompt(prompts, function(props) {
    this.modulename = props.modulename || this.modulename;
    this.author = props.author || this.config.get('author');
    this.description = props.description || this.description || 'Atom description here';

    this.appname   = this.config.get('appname');
    this.projectName = this.config.get('projectName');
    this.namespace = this.config.get('namespace');
    this.modulenameCamelized = s.camelize(this.modulename);

    this.config.set('author', this.author);

    this.config.save();

    cb();
  }.bind(this));
};

Generator.prototype.sourceFiles = function sourceFiles() {

  this.copy('_module.jade', 'app/1_atoms/'+ this.modulename +'/_'+ this.modulename +'.jade');
  this.copy('module.jade', 'app/1_atoms/'+ this.modulename +'/'+ this.modulename +'.jade');
  this.copy('module.less', 'app/1_atoms/'+ this.modulename +'/'+ this.modulename +'.less');
  this.copy('module.yaml', 'app/1_atoms/'+ this.modulename +'/'+ this.modulenameCamelized +'.yaml');

};

Generator.prototype.install = function() {

  this.spawnCommand('grunt', ['injector']);

};
