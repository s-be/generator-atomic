/**
 * grunt-svgstore options
 * @type {Object}
 */

module.exports = {
  dist: {
    files: {
      '<%= folders.tmp %>/images/svg/build/svg-defs.svg': ['<%= folders.dist %>/images/svg/*.svg']
    },
  },
  options: {
    cleanup: true
  }
};
