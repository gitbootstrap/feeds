var jshint  = require('gulp-jshint');
var gulp    = require('gulp');
var concat  = require('gulp-concat');
var cssmin  = require('gulp-cssmin');

gulp.task('init',   ['apache', 'fontawesome']);
gulp.task('make',   ['cssmin']);

gulp.task('lint', function() {
  return gulp.src('feeds.json')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('apache', function () {
    gulp.src(['node_modules/apache-server-configs/dist/.htaccess'])
    .pipe(concat('.htaccess'))
    .pipe(gulp.dest('./'))
});

gulp.task('cssmin', function() {
    gulp.src([
       'src/style.css',
       'node_modules/font-awesome/css/*.*'
     ])
     .pipe(concat('style.min.css'))
     .pipe(cssmin())
     .pipe(gulp.dest('dist/css/'));
});

gulp.task('fontawesome', function() {
    gulp.src([
       'node_modules/font-awesome/fonts/*.*'
     ])
     .pipe(gulp.dest('dist/fonts/'));
});