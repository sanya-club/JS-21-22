module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        //        files: {
        //          'dist/app.js': 'src/app.js'
        //        }
        files: [{
          expand: true,
          cwd: 'ES-6/js/src',
          src: ['*.js'],
          dest: 'ES-6/js/dest',
          ext: '.js',
          extDot: 'first'
        }]
      }
    },
    watch: {
      babel: {
        files: 'ES-6/js/src/*.js',
        tasks: ['babel']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel', 'watch']);
};