const minify = require('gulp-minify');

var gulp = require('gulp'),
	watch = require('gulp-watch');
  
gulp.task('compress', function() {
  gulp.src(['lib/*.js', 'lib/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});

gulp.task('stream', function () {
    // Endless stream mode
    return watch('main.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
 
gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('main.css', function () {
        gulp.src('main.css')
            .pipe(gulp.dest('build'));
    });
});

