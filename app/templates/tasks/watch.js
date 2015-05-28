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
      '<%= folders.tmp %>/styles/{,*/}*.css',
      '<%= folders.app %>/scripts/{,*/}*.js',
      '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  },

  less: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/styles/**/*.less'],
    tasks: ['less:server', 'autoprefixer']
  },

  jade: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/jade/**/*.jade', '!**/_*'],
    tasks: ['newer:jade:html']
  },

  jadeincludes: {
    options: {
      livereload: false
    },
    files: '<%= folders.app %>/jade/**/_*.jade',
    tasks: ['jade:speed']
  },

  content: {
    options: {
      livereload: false
    },
    files: '<%= folders.app %>/content/**/*.json',
    tasks: ['jade:speed']
  }
};



