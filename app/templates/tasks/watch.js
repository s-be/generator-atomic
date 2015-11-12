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
      '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= folders.app %>/{,*/,**/}*.jade',
      '<%= folders.app %>/{,*/,**/}*.yaml'
    ]
  },

  javascript: {
    files: ['<%= folders.app %>/{,*/,**/}*.js'],
    tasks: ['newer:babel']
  },

  javascripttest: {
    options: {
      livereload: false
    },
    files: ['<%= folders.app %>/{,*/,**/}*.js'],
    tasks: ['newer:eslint']
  },

  less: {
    files: ['<%= folders.app %>/{,*/,**/}*.less'],
    tasks: ['less:server', 'autoprefixer']
  }
};
