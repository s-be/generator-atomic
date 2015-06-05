/**
 * grunt-contrib-stylus options
 * @type {Object}
 */

module.exports = {
  options: {
    paths: ['<%= folders.app %>/'],
  },
  dist: {
    options: {
      compress: true,
      cleancss: true,
      sourceMap: true,
      sourceMapURL: 'main.less.map',
      sourceMapFilename: '<%= folders.dist %>/0_basics/main.less.map',
      outputSourceFiles: true
    },
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/0_basics',
      src: ['*.less', '!**/_*'],
      dest: '<%= folders.tmp %>/0_basics',
      ext: '.css'
    }],
  },
  server: {
    options: {
      dumpLineNumbers: 'all'
    },
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/0_basics',
      src: ['*.less', '!**/_*'],
      dest: '<%= folders.tmp %>/0_basics',
      ext: '.css'
    }],
  }
};
