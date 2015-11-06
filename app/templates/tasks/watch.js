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
      '<%= folders.tmp %>/{,*/,**/}*.html',
      '<%= folders.tmp %>/{,*/}*.css',
      '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ],
    tasks: ['express']
  },

  javascript: {
    files: ['<%= folders.app %>/{,*/,**/}*.js'],
    tasks: ['newer:babel', 'newer:eslint' ]
  },

  less: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/**/*.less'],
    tasks: ['less:server', 'autoprefixer']
  },

  jade: {
    files: ['<%= folders.app %>/{,*/,**/}*.jade', '!**/_*']
  },

  jadeincludes: {
    files: '<%= folders.app %>/{,*/,**/}_*.jade',
    tasks: ['concat:jadeincludes']
  },

  content: {
    files: '<%= folders.app %>/{,*/,**/}*.yaml',
  }
};
