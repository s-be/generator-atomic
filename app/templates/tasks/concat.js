/**
 * grunt-contrib-concat options
 * @type {Object}
 */

module.exports = {
  jadeincludes: {
    src: ['<%= folders.app %>/{,*/,**/}_*.jade', '!<%= folders.app %>/0_basics/*'],
    dest: '<%= folders.tmp %>/mixins.jade',
    options: {
      separator: '\n'
    }
  }
};
