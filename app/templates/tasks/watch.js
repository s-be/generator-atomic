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
      '<%= folders.tmp %>/{,*/,**/}*.html',
      '<%= folders.tmp %>/{,*/}*.css',
      '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  },

  javascript: {
    options: {
      livereload: true
    },
    files: ['<%= folders.app %>/{,*/,**/}*.js'],
    tasks: ['newer:jscs']
  },

  less: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/{,*/,**/}*.less'],
    tasks: ['less:server', 'autoprefixer']
  },

  jade: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/{,*/,**/}*.jade', '!**/_*'],
    tasks: ['newer:jade:html']
  },

  jadeincludes: {
    options: {
      livereload: false
    },
    files: '<%= folders.app %>/{,*/,**/}_*.jade',
    tasks: ['parallelize:jade']
  },

  content: {
    options: {
      livereload: false
    },
    files: '<%= folders.app %>/{,*/,**/}*.json',
    tasks: ['parallelize:jade']
  }
};



