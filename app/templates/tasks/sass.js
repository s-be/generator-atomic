/**
 * grunt-sass options
 * @type {Object}
 */

module.exports = {
  options: {
    paths: ['<%= folders.app %>/']
  },
  default: {
    options: {

    },
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/0_basics',
      src: ['*.scss', '!**/_*', '!variables.scss'],
      dest: '<%= folders.tmp %>/0_basics',
      ext: '.css'
    }],
  }
};
