module.exports = function(grunt) {
'use strict';
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["src/css"]
        },
        files: {
          "dist/css/result.css": "src/css/src.less"
        }
      }
    },
    jslint: {
    	development: {        
          src: [
          	"src/js/*.js"
          ],
          exclude: [
            "src/js/yoToyRoto.js", "src/js/*.min.js"
          ]
    	}
    },
    watch: {
    	scripts: {
    		files: [
    			"src/js/*.js"
    		],
    		tasks: [
    			"jslint"
    		]
    	}
    },
    uglify: {
      options: {
        mangle: true, //no changes to vairables and functions names
      },
      my_target: {
         files: {
           'src/js/data.min.js': ['src/js/data.js'],
           'src/js/data2.min.js': ['src/js/data2.js']
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src : ['src/js/*.min.js'],
        dest : 'dist/js/eje1.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('check', ['less','jslint','watch']);
  grunt.registerTask('afierate', ['less','jslint','uglify','concat']);
};
				