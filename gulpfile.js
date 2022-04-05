const { reload } = require('browser-sync');
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();


// Sass task
function scssTask() {
    return src('style/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.'}));
}

// js task

function jstask() {
    return src('js/script.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// browsersync tasks
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// watchtask
function watchtask() {
    watch('*.html', browsersyncReload);
    watch(['style/**/*.scss', 'js/**/*.js'], series(scssTask, jstask, browsersyncReload));
}

// Default gulp task
exports.default = series(
    scssTask,
    jstask,
    browsersyncServe,
    watchtask
);



