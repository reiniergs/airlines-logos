'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            jsx : {
                files: ['public/js/src/**/*.jsx'],
                tasks: ['react','browserify']
            },
            css: {
                files: 'public/css/src/**/*.scss',
                tasks: ['compass'],
                options: {
                  livereload: true,
                }
            }    
        },
        react: {
            files: {
              expand: true,
              cwd: 'public/js/src',
              src: ['**/*.jsx'],
              dest: 'public/js/build',
              ext: '.js' 
            }
        },
        compass: {                 
            dev: {                    
                options: {
                  sassDir: 'public/css/src',
                  cssDir:  'public/css'
                }
            }
        },
        browserify : {
            dist : {
                files : {
                    'public/js/main.js' : 'public/js/build/**/*.js'
                },
                options : {
                    browserifyOptions : {
                        debug : true
                    }
                }
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['watch']);
    

    

};