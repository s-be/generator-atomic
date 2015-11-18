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
      'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      'app/{,*/,**/}*.jade',
      'app/{,*/,**/}*.yaml'
    ]
  },

  script: {
    files: [ 'app/{,*/,**/}*.js' ],
    tasks: [ 'newer:babel' ]
  },

  scripttest: {
    options: {
      livereload: false
    },
    files: [ '.tmp/{,*/,**/}*.js' ],
    tasks: [ 'newer:eslint'<%if (karma) { %>, 'karma' <% } %> ]
  },

  style: {
    files: [ 'app/{,*/,**/}*.scss' ],
    tasks: [ '<%= cssPreprocessor %>', 'postcss:server' ]
  },
  styletest: {
    options: {
      livereload: false
    },
    files: [ '.tmp/{,*/,**/}*.css' ],
    tasks: [ 'postcss:stylelint' ]
  }

};
