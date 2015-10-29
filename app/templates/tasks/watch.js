/**
 * grunt-contrib-watch options
 * @type {Object}
 */

module.exports = {
  server: {
    options: {
      livereload: true
    },
    files: [
      '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  },

  javascript: {
    options: {
      livereload: true
    },
    files: ['<%= folders.app %>/{,*/,**/}*.js'],
    tasks: ['newer:babel' ]
  },

  javascripttest: {
    options: {
      livereload: false
    },
    files: ['<%= folders.tmp %>/{,*/,**/}*.js'],
    tasks: ['newer:eslint', 'karma' ]
  },

  less: {
    options: {
      livereload: true
    },
    files: ['<%= folders.app %>/{,*/,**/}*.less'],
    tasks: ['less:server', 'autoprefixer']
  },

  jade: {
    options: {
      livereload: true
    },
    files: ['<%= folders.app %>/{,*/,**/}*.jade', '!**/_*'],
    tasks: ['newer:jade:html']
  },

  jadeincludes: {
    options: {
      livereload: true
    },
    files: '<%= folders.app %>/{,*/,**/}_*.jade',
    tasks: ['parallelize:jade']
  },

  content: {
    options: {
      livereload: true
    },
    files: '<%= folders.app %>/{,*/,**/}*.yaml',
    tasks: ['parallelize:jade']
  }
};
