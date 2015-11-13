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
    files: ['<%= folders.tmp %>/{,*/,**/}*.js'],
    tasks: ['newer:eslint', 'karma' ]
  },

  <%= cssPreprocessor %>: {
    files: ['<%= folders.app %>/{,*/,**/}*.scss'],
    tasks: ['<%= cssPreprocessor %>', 'postcss:server']
  }

};
