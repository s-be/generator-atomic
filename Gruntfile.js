module.exports = function(grunt) {

  grunt.initConfig({

    release: {
      options: {
        changelog: true, //default: false
      }
    }
  });


  grunt.loadNpmTasks('grunt-release');
};
