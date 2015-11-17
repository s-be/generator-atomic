/**
 * grunt-injector options
 * @type {Object}
 */

module.exports = {
  options: {

  },
  // Inject application script files into index.html (doesn't include bower)
  jademixins: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '/');
        return 'include ' + filePath;
      },
      starttag: '//- [injector:jademixins]',
      endtag: '//- [endinjector]'
    },
    files: {
      'app/0_basics/_default.jade': [
        'app/{,*/,**/}_*.jade',
        '!app/0_basics/_default.jade'
      ]
    }
  },
  jadelinks: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('.jade', '.html').replace('/app/', '../');
        linkTitle = filePath.split('/').pop().replace('.html', '');
        linkTitle = linkTitle.charAt(0).toUpperCase() + linkTitle.substr(1);
        return 'p: a(href="' + filePath + '") ' + linkTitle ;
      },
      starttag: '//- [injector:jadelinks]',
      endtag: '//- [endinjector]'
    },
    files: {
      'app/1_atoms/index.jade': [
        'app/1_atoms/{,*/}*.jade',
        '!app/1_atoms/index.jade',
        '!app/1_atoms/{,*/}_*.jade'
      ],
      'app/2_molecules/index.jade': [
        'app/2_molecules/{,*/}*.jade',
        '!app/2_molecules/index.jade',
        '!app/2_molecules/{,*/}_*.jade'
      ],
      'app/3_organisms/index.jade': [
        'app/3_organisms/{,*/}*.jade',
        '!app/3_organisms/index.jade',
        '!app/3_organisms/{,*/}_*.jade'
      ],
      'app/4_templates/index.jade': [
        'app/4_templates/{,*/}*.jade',
        '!app/4_templates/index.jade',
        '!app/4_templates/{,*/}_*.jade'
      ],
      'app/5_pages/index.jade': [
        'app/5_pages/{,*/}*.jade',
        '!app/5_pages/index.jade',
        '!app/5_pages/{,*/}_*.jade'
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
      'app/0_basics/_default.jade': [
        'app/{,*/,**/}*.js',
        '!app/{,*/,**/}*.unit.js',
        '!app/0_basics/**'
      ]
    }
  },
  // Inject component <%= cssPreprocessorExtension %> into main.<%= cssPreprocessorExtension %>
  style: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '');
        return '@import \'../' + filePath + '\';';
      },
      starttag: '// [injector]',
      endtag: '// [endinjector]'
    },
    files: {
      'app/0_basics/main.<%= cssPreprocessorExtension %>': [
        'app/{,*/,**/}*.<%= cssPreprocessorExtension %>',
        '!app/0_basics/**'
      ]
    }
  }<%if (galen) { %>,
  specs: {
    options: {
      transform: function(filePath) {
        filePath = filePath.replace('/app/', '/');
        htmlPath = filePath.replace('.spec', '.html');
        linkTitle = filePath.split('/').pop().replace('.spec', '');
        linkTitle = linkTitle.charAt(0).toUpperCase() + linkTitle.substr(1);
        return "test('"+ linkTitle + " on ' + device.deviceName, function () { gl.openPage(device, config.getProjectPage()+'" + htmlPath + "'); gl.runSpecFile(device, 'app" + filePath + "', device.tags);});";
      },
      starttag: '// [injector:spec]',
      endtag: '// [endinjector]'
    },
    files: {
      'tests/galen.test.js': [
        'app/{,*/,**/}*.spec'
      ]
    }
  }<% } %>
};
