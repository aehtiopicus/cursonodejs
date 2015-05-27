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
            "src/js/yoToyRoto.js"
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('default', ['less','jslint','watch']);
};
				