/**
 * grunt-contrib-watch options
 * @type {Object}
 */

module.exports = {
  options: {
  livereload: true
  },
  server: {
    files: [
      '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ],
  },

  javascript: {
    files: ['<%= folders.app %>/{,*/,**/}*.js'],
    tasks: ['newer:babel' ]
  },

  javascripttest: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/{,*/,**/}*.js'],
    tasks: ['newer:eslint', 'karma' ]
  },

  scss: {
    options: {
      livereload: true
    },
    files: ['<%= folders.app %>/{,*/,**/}*.scss'],
    tasks: ['sass', 'postcss:server']
  },

  jade: {
    files: ['<%= folders.app %>/{,*/,**/}*.jade', '!**/_*']
  },

  jadeincludes: {
    files: '<%= folders.app %>/{,*/,**/}_*.jade',
  },

  content: {
    files: '<%= folders.app %>/{,*/,**/}*.yaml',
  }
};
