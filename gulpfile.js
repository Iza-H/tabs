/**
 * Created by izabela on 24/07/16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require("gulp-minify-css");
var clean = require('gulp-clean');

var paths = {
    'bower':'./bower_components',
    'assets':"./assets",
    'libs': [
        './bower_components/angular/angular.min.js'
    ],
    'destination_libs' : './app/libs'
};

gulp.task('styles', function(){
    return gulp.src([
        paths.assets + '/_scss/main.scss'
    ])
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./app/styles/css'))

});

// Delete the directory with libraries:
gulp.task('clean_libs', function() {
    return gulp.src( paths.destination_libs )
        .pipe(clean());
});

//Copy libraries to the folder with libs
gulp.task('copy', ['clean_libs'], function() {
        gulp.src(paths.libs)
            .pipe(gulp.dest( paths.destination_libs ));
    }
)

gulp.task('watch', function(){
    gulp.watch('./assets/styles/**/*.sccs', ['styles']);
});

gulp.task('default', ['styles', 'copy']);