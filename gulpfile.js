 // Dependencies
const gulp = require('gulp');
const debug = require('gulp-debug');
const jsonlint = require('gulp-jsonlint');

// Supported files
const jsonFiles = [
  'feeds.json'
];

// Lint JSON
gulp.task('lint:json', gulp.series(function(done) { 
  gulp.src(jsonFiles)
    .pipe(debug({title: 'json-lint'}))
    .pipe(jsonlint())
    .pipe(jsonlint.failAfterError())
    .pipe(jsonlint.reporter());
  done();
}));

// Available tasks
gulp.task('lint', gulp.parallel('lint:json', function(done) {
  done();
}));