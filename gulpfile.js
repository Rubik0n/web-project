const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const cssFiles = [
    // порядок './css/'
]

const jsFiles = [
    //'./scripts/...'
]

function styles() {
    return gulp.src('./css/**/*.css')
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('.build/css'))
}

function scripts() {
    return gulp.src('./scripts/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel: true;
        }))
        .pipe(gulp.dest('./build/js'));
}

gulp.task('styles', styles);
gulp.task('script', script);