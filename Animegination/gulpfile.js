/// <binding AfterBuild='copyToLibs, copyToAnime' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

function getPaths() {
    return {
        'nm': 'node_nodules/',
        'appScripts': 'wwwroot/appScripts/',
        'anime': '../Animegination Mobile/',
        'animeScripts': '../Animegination Mobile/scripts/'
    };
}

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('copyToLibs', function (done) {
    gulp.src([
        'node_modules/angular2/bundles/js',
        'node_modules/angular2/bundles/angular2.*.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/angular2/bundles/http.*.js*',
        'node_modules/angular2/bundles/router.*.js*',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-shim/es6-shim.map',
        'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
        'node_modules/systemjs/dist/*.*',
        'node_modules/jquery/dist/jquery.*js',
        'node_modules/bootstrap/dist/js/bootstrap*.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/whitelist/lib/whitelist.js'
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
        //'node_modules/bootstrap/dist/css/bootstrap.css',
        //'node_modules/bootstrap/dist/css/bootstrap.css.map'
    ]).pipe(gulp.dest('./wwwroot/css'));

    gulp.src([
        'scripts/views/*.html'
    ]).pipe(gulp.dest('./wwwroot/views'));
});

gulp.task('copyToAnime', function (done) {
    gulp.src([
        'node_modules/angular2/bundles/js',
        'node_modules/angular2/bundles/angular2.*.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/angular2/bundles/http.*.js*',
        'node_modules/angular2/bundles/router.*.js*',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-shim/es6-shim.map',
        'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
        'node_modules/systemjs/dist/*.*',
        'node_modules/jquery/dist/jquery.*js',
        'node_modules/bootstrap/dist/js/bootstrap*.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/whitelist/lib/whitelist.js'
    ]).pipe(gulp.dest(getPaths().anime + 'libs'));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'wwwroot/css/custom.css'
        //'node_modules/bootstrap/dist/css/bootstrap.css',
        //'node_modules/bootstrap/dist/css/bootstrap.css.map'
    ]).pipe(gulp.dest(getPaths().anime + 'css'));

    gulp.src([
        getPaths().appScripts + '*.js'
    ]).pipe(gulp.dest(getPaths().anime + 'scripts'));

    gulp.src([
        'scripts/views/*.html'
    ]).pipe(gulp.dest(getPaths().anime + 'views'));

    gulp.src([
        'scripts/views/*.html'
    ]).pipe(gulp.dest(getPaths().animeScripts + 'products/views'));

    gulp.src([
        getPaths().appScripts + 'models/*.js'
    ]).pipe(gulp.dest(getPaths().animeScripts + 'models'));

    gulp.src([
        getPaths().appScripts + 'products/*.js'
    ]).pipe(gulp.dest(getPaths().animeScripts + 'products'));

    gulp.src([
        getPaths().appScripts + 'customers/*.js'
    ]).pipe(gulp.dest(getPaths().animeScripts + 'customers'));

    gulp.src([
        getPaths().appScripts + 'services/*.js'
    ]).pipe(gulp.dest(getPaths().animeScripts + 'services'));

    //gulp.src([
    //    'scripts/views/*.html'
    //]).pipe(gulp.dest(getPaths().animeScripts + 'views'));
});

