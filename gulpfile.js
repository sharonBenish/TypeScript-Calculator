const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }

function buildStyles(){
    return src('./scss/styles.scss')
        .pipe(sass())
        .pipe(dest('./public/css'))
}

function watchTask(){
    watch(['./scss/styles.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)