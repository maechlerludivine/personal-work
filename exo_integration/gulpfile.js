var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
	gulp.watch('app/scss/styles.scss', ['sass']);
});

gulp.task('default', ['watch']);