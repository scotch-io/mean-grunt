module.exports = function(grunt) {

  grunt.initConfig({

    uglify: {
      build: {
        files: {
          'public/dist/js/app.js': ['public/src/js/**/*.js']
        }
      }
    },
    concat: {
      build: {
        src: ['public/src/js/**/*.js'],
        dest: 'public/dist/js/app.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['uglify']);

};