/*global module:false*/
module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! CRUD TESTE */\n',
    
    // injector
    injector: {
      options: {
        template: 'src/index.html',
        ignorePath: 'www/'
      },
      local_dependencies: {
        files: {
          'www/index.html': ['www/dist/bundle*.css', 'www/dist/bundle*.js', 'www/dist/font-awesome.min.css']
        }
      }
    },
    
    // Chokidar
    chokidar: {
      files: ['src/**/*.js', 'src/**/*.css', 'src/**/*.scss', 'src/**/*.html'],
      tasks: ['dev']
    },
    // Task configuration.
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          'tmp/_app.js': [
            'src/app.config.js',
            'src/**/*.module.js',
            'src/**/*.filter.js',
            'src/**/*.directive.js',
            'src/**/*.routes.js',
            'src/app.routes.js',
            'src/**/*.config.js',
            'src/**/*.factory.js',
            'src/**/*.service.js',
            'src/**/*.controller.js'
          ]
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'tmp/_all_cct.css': ['tmp/_all_cct.css']
        }
      }
    },
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded',
        },
        files: {
          'tmp/_app.css': 'src/main.scss'
        },
      },
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          'tmp/_app.css': 'src/main.scss'
        }
      }
    },
    concat: {
      // app_css: {
      //   src: ['src/**/*.css'],
      //   dest: 'tmp/_app.css',
      // },
      css: {
        src: ['tmp/_lib.css', 'tmp/_app.css'],
        dest: 'tmp/_all_cct.css'
      },
      js: {
        src: ['tmp/_lib.js', 'tmp/_app.js', 'tmp/_templates.js'],
        dest: 'tmp/_all_cct.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: true
      },
      dist: {
        src: 'tmp/_all_cct.js',
        dest: 'tmp/_all_cct.js'
      }
    },
    bower_concat: {
      all: {
        dest: {
          js: 'tmp/_lib.js',
          css: 'tmp/_lib.css'
        }
      }
    },
    assets_versioning: {
      options: {
        tag: 'date'
      },
      css: {
        //src: 'tmp/app.min.css',
        src: 'tmp/_all_cct.css',
        dest: 'dist/bundle.css'
      },
      js: {
        //src: 'tmp/app.min.js',
        src: 'tmp/_all_cct.js',
        dest: 'dist/bundle.js'
      }
    },
    clean: {
      all: ['tmp', 'dist', 'www/dist'],
      temp: ['tmp']
    },
    ngtemplates: {
      app: {
        cwd: 'src',
        src: '**/*.html',
        dest: 'tmp/_templates.js'
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: 'img', src: '**', dest: 'www/dist/img/' },
          { expand: true, cwd: 'fonts', src: '**', dest: 'www/dist/fonts/' },
          { expand: true, cwd: 'src/fonts', src: '**', dest: 'www/dist/fonts/' },
          { expand: true, cwd: 'src/files', src: '**', dest: 'www/src/files/' },
          
          //replicando desnecessariamente porque no codigo cada hora chama de um local, depois tem que atualizar o codigo
          { expand: true, cwd: 'img', src: '**', dest: 'www/img/' },
          { expand: true, cwd: 'fonts', src: '**', dest: 'www/fonts/' },
          { expand: true, cwd: 'src/fonts', src: '**', dest: 'www/fonts/' },
          
          { expand: true, cwd: 'src/img', src: '**', dest: 'www/img/' },
          { expand: true, cwd: 'dist', src: '*.js', dest: 'www/dist/' },
          { expand: true, cwd: 'dist', src: '*.css', dest: 'www/dist/' },
          
          //copiando font awesome e o css
          { expand: true, cwd: 'bower_components/font-awesome/fonts', src: '**', dest: 'www/fonts/' },
          { expand: true, cwd: 'bower_components/font-awesome/css', src: 'font-awesome.min.css', dest: 'www/dist/' },
          
          //copiando favicon da raiz
          { expand: true, src: 'favicon.ico', dest: 'www/' },
          
          //copiando o manifest
          { expand: true, src: 'manifest.json', dest: 'www/' },
          
          //copiando imagem do select2 pra pasta css porque a lib é ruim
          { expand: true, cwd: 'bower_components/select2', src: '*.png', dest: 'www/dist/' },
        ]
      }
    }
  });
  
  
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-chokidar');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-assets-versioning');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask('dev', ['clean:all', 'ngAnnotate', 'bower_concat', 'ngtemplates', 'sass:dev', 'concat:css', 'concat:js', 'assets_versioning', 'clean:temp', 'copy:main', 'injector', 'chokidar']);
  grunt.registerTask('prod', ['clean:all', 'ngAnnotate', 'bower_concat', 'ngtemplates', 'sass:dist', 'concat:css', 'concat:js', 'cssmin', 'uglify', 'assets_versioning', 'clean:temp', 'copy:main', 'injector']);
};