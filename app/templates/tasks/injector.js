/**
 * grunt-injector options
 * @type {Object}
 */

module.exports = {
  options: {

  },
  // Inject application script files into index.html (doesn't include bower)
  jade: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/jade/', '/');
        return 'include ' + filePath;
      },
      starttag: '//- [injector:jade]',
      endtag: '//- [endinjector]'
    },
    files: {
      '<%= folders.app %>/jade/_default.jade': [
        '<%= folders.app %>/jade/1_atoms/_*.jade',
        '<%= folders.app %>/jade/2_molecules/_*.jade',
        '<%= folders.app %>/jade/3_organisms/_*.jade',
      ]
    }
  },
  // Inject application script files into index.html (doesn't include bower)
  scripts: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '');
        return '<script src="/' + filePath + '"></script>';
      },
      starttag: '// [injector:js]',
      endtag: '// [endinjector]'
    },
    files: {
      '<%= folders.app %>/jade/_default.jade': [
        '<%= folders.app %>/scripts/**/*.js',
        //'!<%= folders.app %>/scripts/main.js'
      ]
    }
  },
  // Inject component less into main.less
  less: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/styles/', '');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// [injector]',
      endtag: '// [endinjector]'
    },
    files: {
      '<%= folders.app %>/styles/main.less': [
        '<%= folders.app %>/styles/**/*.less',
        '!<%= folders.app %>/styles/main.less'
      ]
    }
  }
};
