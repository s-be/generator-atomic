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
        require('autoprefixer')({
          browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 35',
            'Firefox >= 31',
            'Edge >= 12',
            'Explorer >= 9',
            'iOS >= 7',
            'Opera >= 12',
            'Safari >= 7.1'
          ]
        }),
        require('cssnano')() // minify the result
      ]
    }
  },
  server: {
    options: {
      processors: [
        require('autoprefixer')({
          browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 35',
            'Firefox >= 31',
            'Edge >= 12',
            'Explorer >= 9',
            'iOS >= 7',
            'Opera >= 12',
            'Safari >= 7.1'
          ]
        })
      ]
    }
  },
  stylelint: {
    src: ['<%= folders.app %>/{,*/,**/}*.less', '!<%= folders.app %>/0_basics/{,*/,**/}*.less'],
    options: {
      writeDest: false,
      map: false,
      failOnError: true,
      processors: [
        require('stylelint')(),
        require('postcss-reporter')({
          clearMessages: true,
          throwError: true,
          noPlugin: true
        })
      ]
    }
  }
};
