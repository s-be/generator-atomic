/**
 * grunt-contrib-jade options
 * @type {Object}
 */

module.exports = function (grunt, data) {
  return {
    options: {
      client: false,
      pretty: true,
      basedir: 'app/',
      data: function (dest, src) {
        var page = src[0].replace('app/', ' ');
        page = page.replace('.jade','');
        page = page.replace(/\//g,'-');
        page = page.replace(' ','');
        var level = src[0].split('/').length - 2;
        var path = '';

        for(var i=0;i<level;i++) {
          path += '../';
        }

        return {
          page: page,
          path: path,
          level: level,
          lang:  data.lang,
          language: data.language,
          timestamp: data.timestamp
        };
      }
    },
    html: {
      expand: true,
      //flatten: true,
      //cwd: '<%= folders.app %>/jade',
      src: ['<%= folders.app %>/{,*/,**/}*.jade', '!**/_*'],
      dest: '<%= folders.tmp %>',
      ext: '.html',
      rename: function(dest, src) {
        return src.replace('app/', '.tmp/');
      }
    }
  }
};
