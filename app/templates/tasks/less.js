/**
 * grunt-contrib-stylus options
 * @type {Object}
 */

module.exports = {
  options: {
    paths: ['<%= folders.app %>/styles'],
  },
  dist: {
    options: {
      compress: true,
      cleancss: true,
      sourceMap: true,
      sourceMapURL: 'main.less.map',
      sourceMapFilename: '<%= folders.dist %>/styles/main.less.map',
      outputSourceFiles: true
    },
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/styles',
      src: ['*.less', '!**/_*'],
      dest: '<%= folders.tmp %>/styles',
      ext: '.css'
    }],
  },
  server: {
    options: {
      dumpLineNumbers: 'all'
    },
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/styles',
      src: ['*.less', '!**/_*'],
      dest: '<%= folders.tmp %>/styles',
      ext: '.css'
    }],
  }
};
