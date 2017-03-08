/**
 * grunt-wiredep options
 * @type {Object}
 */

module.exports = {
  app: {
    options: {
      ignorePath: '../../bower_components/',
      // Make sure everything has an absolute path (starts with '/')
      fileTypes: {
        pug: {
          replace: {
            js: 'script(src=\'/{{filePath}}\')',
            css: 'link(rel=\'stylesheet\', href=\'/{{filePath}}\')'
          }
        }
      },
      // packages to ignore
      exclude: [
        'bower_components/html5shiv/',
        'bower_components/consolelog/',
        'bower_components/modernizr/',
        'bower_components/jquery/dist/',
        'bower_components/bootstrap/dist/*.js',
        'app/media/'
      ],
      overrides: {
      }
    },
    src: [
      '<%= folders.app %>/0_basics/_default.pug'
    ]
  }
};
