module.exports = function (grunt) {
    
require('load-grunt-tasks')(grunt);
grunt.registerTask('minify', ['cssmin', 'uglify']);

grunt.initConfig({
    jshint : {
        all : ['Gruntfile.js', 'js/*.js'],
        options : {
            asi : true,
            undef : true,
            globals : {
                module : true,
                require : true,
                console : true
            }
        }
    },
    sass : {
        all : {
            files : {
                'styles/style.css' : 'sass/style.scss'
            }
        }
    },
    imagemin : {
        dynamic : {
            files : [{
                expand : true,
                src : ['images/*.{png,jpg,gif}'],
                dest : 'dest/'
            }]
        }
    },
    jasmine : {
        all : {
            src : ['js/*.js'],
            options : {
                specs : ['specs/**/*Spec.js']
            }
        }
    },
    cssmin : {
        all : {
            files : {
                'dest/app.min.css' : ['css/*.css']
            }
        }
    },
    uglify : {
        all : {
            files : {
                'dest/app.min.js' : ['main.js']
            }
        }
    },
    watch : {
        scripts : {
            files : ['js/*.js'],
            tasks : ['jshint:dev'],
            options : {
                livereload : true
            }
        },
        sass : {
            files : ['sass/*.scss'],
            tasks : ['sass'],
            options : {
                livereload : true
            }
        }
    }
});
grunt.registerTask('default', function(){
    console.log('Grunt has run');
});

};