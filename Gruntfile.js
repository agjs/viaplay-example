module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {

      vendor: {
        src: [
          'node_modules/angular/angular.js',
          'node_modules/ui-router/release/angular-ui-router.js'
        ],
        dest: 'client/bundles/vendor.js'
      },



      client: {
        src: ['client/app/app.ngapp.js', 'client/app/app.ngconfig.js', 'client/app/**/*.ngcomponent.js'],
        dest: 'client/bundles/code.js',
        options: {
          watch: false,
          keepAlive: true
        }
      }
    },
    watch: {
      concat: {
        files: ['client/bundles/vendor.js', 'client/bundles/code.js'],
        tasks: ['concat'],
        options: {
          livereload: true,
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['browserify:vendor', 'browserify:client', 'concat']);
  grunt.registerTask('browserifyWithWatch', [
    'browserify:vendor',
    'browserify:watchClient',
    'watch:concat'
  ]);

};