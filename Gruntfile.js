module.exports = function(grunt) {

  grunt.initConfig({

    release: {
      options: {
        changelog: true, //default: false
      }
    }
  });

  grunt.registerTask('release', function () {
    this.args.unshift('bump-only');
    grunt.task.run([
      this.args.join(':'),
      'changelog',
      'bump-commit'
    ]);
  });


  grunt.loadNpmTasks('grunt-release');
};
