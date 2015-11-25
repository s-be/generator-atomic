/**
 * grunt-eslint options
 * @type {Object}
 */

module.exports = {
  files: [
    '<%- folders.app %>/{,*/,**/}*.js',
    '!<%- folders.app %>/bower_components/**'
  ],
  options: {
    configFile: ".eslintrc"
  }
};
