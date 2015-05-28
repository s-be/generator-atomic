/*jshint strict:false */
/* global require, module */

(function() {
  var path = require('path'),
    folders = {
      app: 'app',
      dist: 'dist',
      tmp: '.tmp'
    };



  module.exports = function(grunt) {
    require('time-grunt')(grunt);

    //language variable
    if(typeof grunt.option( 'language' ) === 'undefined') {
      var language = 'de'; }
    else {
      var language = grunt.option( 'language' ); }

    require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), 'tasks'),
      data: {
        folders: folders,
        packageJson: require('./package.json'),
        grunt: grunt,
        language: language
      },
      init: true
    });
  };
})();
