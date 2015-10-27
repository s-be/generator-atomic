module.exports = function(grunt) {

  grunt.initConfig({

    bump: {
      options: {
        files: ['bower.json','package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
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


  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-conventional-changelog');
};
