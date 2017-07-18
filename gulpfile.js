// This is a sample Gulp file for your reference
// Feel free to remove and implement your own build process instead

var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var less = require('gulp-less')
var path = require('path')

gulp.task('copy-images', function(){
return gulp.src(
    ['./assets/images/**']
  )
  .pipe(gulp.dest('./dist/images/'))
})

gulp.task('copy-include', function(){
  return gulp.src(
    ['./assets/include/**']
  )
  .pipe(gulp.dest('./dist/include/'))
})

gulp.task('copy-fonts', function(){
  return gulp.src(
    ['./assets/css/fonts/**']
  )
  .pipe(gulp.dest('./dist/css/fonts/'))
})

gulp.task('copy', ['copy-images', 'copy-fonts'], function(){})


gulp.task('css', function(){
  return gulp.src(
    [
      './assets/css/bootstrap.css',
      './assets/css/style.css',
      './assets/css/dark.css',
      './assets/css/font-icons.css',
      './assets/css/animate.css',
      './assets/css/magnific-popup.css',
      './assets/css/responsive.css',
      './assets/css/settings.css',
      './assets/css/layers.css',
      './assets/css/navigation.css',
      './assets/css/calendar.css',
      './assets/css/fullcalendar.css',
      './assets/css/fullcalendar.min.css',
      './assets/css/fullcalendar.print.css',
      './assets/css/fullcalendar.print.min.css',
    ]
  )
  .pipe(sourcemaps.init())
  .pipe(minifyCSS())
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
  .pipe(gp_concat('style.min.css'))
  .pipe(sourcemaps.write('/'))
  .pipe(gulp.dest('./dist/css/'))
})


gulp.task('style', ['css'], function(){})


gulp.task('js', function(){
  return gulp.src(
    [
      './assets/js/jquery.js',
      './assets/js/jquery.calendario.js',
      './assets/js/plugins.js',
      './assets/js/functions.js',
      './assets/js/events-data.js',
      './assets/js/moment.min.js',
      './assets/js/fullcalendar.min.js',
      './assets/js/gcal.min.js',
      './assets/include/rs-plugin/js/jquery.themepunch.tools.min.js',
      './assets/include/rs-plugin/js/jquery.themepunch.revolution.min.js',
      './assets/include/rs-plugin/js/extensions/revolution.extension.video.min.js',
      './assets/include/rs-plugin/js/extensions/revolution.extension.slideanims.min.js',
      './assets/include/rs-plugin/js/extensions/revolution.extension.actions.min.js',
      './assets/include/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js',
      './assets/include/rs-plugin/js/extensions/revolution.extension.kenburn.min.js',
      './assets/include/rs-plugin/js/extensions/revolution.extension.navigation.min.js',
      './assets/include/rs-plugin/js/extensions/revolution.extension.migration.min.js',
      './assets/include/rs-plugin/js/extensions/revolution.extension.parallax.min.js'
    ]
  )
  .pipe(sourcemaps.init())
  .pipe(gp_concat('gulp-concat.js'))
  .pipe(gulp.dest('./assets/min/'))
  .pipe(gp_uglify())
  .pipe(gp_rename('vendor.min.js'))
  .pipe(sourcemaps.write('/'))
  .pipe(gulp.dest('./dist/js/'))
});

// custom app logic for your project:
gulp.task('app', function(){
  return gulp.src(
    [
      './assets/js/app.js'
    ]
)
  .pipe(sourcemaps.init())
  .pipe(gp_uglify())
  .pipe(gp_rename('app.min.js'))
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('./dist/app/'))
});

// add watch files here:
gulp.task('watch', function() {
  gulp.watch(['./assets/js/**.js', './assets/css/**'], ['prod'])
})

gulp.task('prod', ['copy', 'style', 'js', 'app'], function(){})
gulp.task('default', ['copy', 'style', 'js', 'app', 'watch'], function(){})
