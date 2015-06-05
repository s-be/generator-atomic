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
      '<%= folders.tmp %>/*.html',
      '<%= folders.tmp %>/{,*/}*.css',
      '<%= folders.app %>/{,*/}*.js',
      '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  },

  less: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/{,*/}.less'],
    tasks: ['less:server', 'autoprefixer']
  },

  jade: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/{,*/}.jade', '!**/_*'],
    tasks: ['newer:jade:html']
  },

  jadeincludes: {
    options: {
      livereload: false
    },
    files: '<%= folders.app %>/{,*/}_*.jade',
    tasks: ['jade:speed']
  },

  content: {
    options: {
      livereload: false
    },
    files: '<%= folders.app %>/{,*/}.json',
    tasks: ['jade:speed']
  }
};



