var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
   return gulp.src('./gulp/sass/*.scss')
       .pipe(sass())
       .pipe(cleanCSS())
       .pipe(rename({suffix:'.min'}))
       .pipe(gulp.dest('css'));
});
gulp.task('js', function(){
    return gulp.src('./js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js/dist'))
});
gulp.task('watch',function(){
    gulp.watch('./gulp/sass/*.scss', ['sass']);
    gulp.watch('./js/*.js', ['js']);
});
gulp.task('default', ['sass', 'js', 'watch']);