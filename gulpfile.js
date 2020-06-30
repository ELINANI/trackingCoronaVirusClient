const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const notify = require('gulp-notify');

gulp.task('sassMapBoxInfo',function(){
    return  gulp.src('sass/_mapBoxInfo.scss')
             .pipe(sass())
             .pipe(concat('map-box-info.component.css'))
             .pipe(gulp.dest('src/app/map-box-info'))
             .pipe(notify('sass Task is  done'));
});