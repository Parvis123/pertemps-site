var gulp = require('gulp'),
    watch = require('gulp-watch');

let cleanCSS = require('gulp-clean-css');


gulp.task('minify-css', () => {
    return gulp.src('main.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('build/minify-css'));
});

gulp.task('stream', function() {
    // Endless stream mode
    return watch('main.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function() {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('main.css', function() {
        gulp.src('main.css')
            .pipe(gulp.dest('build'));
    });
});