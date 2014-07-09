module.exports = function(grunt) {

  grunt.initConfig({

    // JS TASKS ================================================================
    jshint: {
      all: ['public/src/js/**/*.js'] 
    },

    uglify: {
      build: {
        files: {
          'public/dist/js/app.min.js': ['public/src/js/**/*.js', 'public/src/js/*.js']
        }
      }
    },

    // CSS TASKS ===============================================================
    cssmin: {
      build: {
        files: {
          'public/dist/css/style.min.css': ['public/src/css/**/*.css', 'public/src/css/*.css']
        }
      }
    },

    // COOL TASKS ==============================================================
    watch: {
      css: {
        files: ['public/src/css/**/*.css'],
        tasks: ['cssmin']
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['cssmin', 'jshint', 'uglify', 'concurrent']);

};