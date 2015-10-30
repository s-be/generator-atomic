/**
 * grunt-postcss options
 * @type {Object}
 */

module.exports = {
  files: [{
    expand: true,
    cwd: '<%= folders.tmp %>/0_basics',
    src: ['*.css'],
    dest: '<%= folders.tmp %>/0_basics',
    ext: '.css'
  }],
  options: {
    paths: ['<%= folders.tmp %>/'],
    map: {
      inline: false, // save all sourcemaps as separate files...
      annotation: '.tmp/0_basics' // ...to the specified directory
    }
  },
  dist: {
    options: {
      processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    }
  },
  server: {
    options: {
      processors: [
        require('autoprefixer')({browsers: 'last 2 versions'})// add vendor prefixes
      ]
    },
  }
};
