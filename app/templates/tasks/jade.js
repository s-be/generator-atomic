/**
 * grunt-contirb-jade options
 * @type {Object}
 */

module.exports = {
  options: {
    client: false,
    pretty: true,
    basedir: 'app/jade',
    data: function (dest, src) {
      var page = src[0].replace('app/jade/', ' ');
      page = page.replace('.jade','');
      page = page.replace(/\//g,'-');
      page = page.replace(' ','');
      var level = src[0].split('/').length - 3;
      var path = '';

      for(var i=0;i<level;i++) {
        path += '../';
      }

      return {
        page: page,
        path: path,
        level: level,
        //lang: grunt.file.readJSON('app/content/'+ language +'.json'),
        //language: language,
        //timestamp: grunt.template.today('dd.mm.yyyy HH:MM:ss')
      };
    }
  },
  speed: {
    expand: true,
    //flatten: true,
    //cwd: '<%= folders.app %>/jade',
    src: ['<%= folders.app %>/jade/**/*.jade', '!**/_*'],
    dest: '<%= folders.tmp %>',
    ext: '.html',
    rename: function(dest, src) {
      return src.replace('app/jade/', '.tmp/');
    }
  },
  html: {
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/jade',
      src: ['{,*/}*.jade', '!**/_*'],
      dest: '<%= folders.tmp %>/',
      ext: '.html'
    }],
  }
};
