var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var wiredep = require('wiredep');
var $ = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');

var paths = {
  sass: ['./scss/**/*.scss'],
  bower: ['./www/lib/**/*.js'],
  js: ['./www/js/**/*.js'],
  html: ['./www/**/*.html'],
  fonts: './www/fonts'
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch([paths.js, paths.html], ['inject']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('wiredep', function () {
  return gulp.src('www/index.html')
    // exclude ionic scss since we're using ionic sass
    .pipe(wiredep.stream({exclude: ['./www/lib/ionic/release/css']}))
    .pipe(gulp.dest('www/'));
});

gulp.task('inject', ['wiredep', 'bower-fonts'], function () {
  return gulp.src('www/index.html')
    .pipe(
      $.inject(
        gulp.src(paths.js)
          .pipe($.plumber()) // use plumber so watch can start despite js errors
          .pipe($.naturalSort())
          .pipe($.angularFilesort()),
        {relative: true}))
    .pipe(gulp.dest('www'));
});

// copy bower fonts
gulp.task('bower-fonts', function () {
  var fontFiles = mainBowerFiles({filter: /\.(eot|otf|svg|ttf|woff|woff2)$/i})
    .concat(paths.fonts + '/**/*');

  return gulp.src(fontFiles)
    .pipe($.changed(paths.fonts))
    .pipe(gulp.dest(paths.fonts));
});