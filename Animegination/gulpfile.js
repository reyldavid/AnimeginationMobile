/// <binding AfterBuild='copyToLibs, copyToAnime' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');
var dest = require('gulp-dest');

function getPaths() {
    return {
        'nm': 'node_nodules/',
        'appScripts': 'wwwroot/appScripts/',
        'anime': '../Animegination Mobile/',
        'animeLibs': '../Animegination Mobile/libs/',
        'animeScripts': '../Animegination Mobile/scripts/'
    };
}

var paths = {
    app: ['scripts/**/*.ts'],
    libs: [
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-shim/es6-shim.map',
        'node_modules/zone.js/dist/zone.js*',
        'node_modules/reflect-metadata/Reflect.js*',
        //'node_modules/systemjs/dist/system.src.js*',
        'node_modules/systemjs/dist/*.*',

        'node_modules/angular2/bundles/js',
        'node_modules/angular2/bundles/angular2.*.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/angular2/bundles/http.*.js*',
        'node_modules/angular2/bundles/router.*.js*',
        'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',

        'node_modules/jquery/dist/jquery.*js',
        'node_modules/bootstrap/dist/js/bootstrap*.js',
        'node_modules/rxjs/bundles/Rx.js'
        //, 'node_modules/whitelist/lib/whitelist.js'
    ],
    packages: [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade',
        'angular2-jwt'
        //, 'jwt-decode'
    ],
    css: [
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'styles/custom.css'
    ]
};

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('copyToLibs', function (done) {

    gulp.src(paths.libs).pipe(gulp.dest('./wwwroot/libs'));

    gulp.src(paths.css).pipe(gulp.dest('./wwwroot/css'));

    //gulp.src('node_modules/rxjs/**/*.js*').pipe(gulp.dest('./wwwroot/libs/js/rxjs'));

    for (var i = 0; i < paths.packages.length; i++) {
        gulp.src('node_modules/' + paths.packages[i] + '/*.js*').pipe(gulp.dest('./wwwroot/libs/' + paths.packages[i]));
        gulp.src('node_modules/' + paths.packages[i] + '/src/**/*.js*').pipe(gulp.dest('./wwwroot/libs/' + paths.packages[i] + '/src/'));
        gulp.src('node_modules/' + paths.packages[i] + '/typings/**/*.ts*').pipe(gulp.dest('./wwwroot/libs/' + paths.packages[i] + '/typings/'));
        gulp.src('node_modules/' + paths.packages[i] + '/*.ts*').pipe(gulp.dest('./wwwroot/libs/' + paths.packages[i]));
        //gulp.src('node_modules/' + paths.packages[i] + '/build/*.js*').pipe(gulp.dest('./wwwroot/libs/' + paths.packages[i] + '/build/'));
        //gulp.src('node_modules/' + paths.packages[i] + '/lib/*.js*').pipe(gulp.dest('./wwwroot/libs/' + paths.packages[i] + '/lib/'));
    }

    gulp.src(paths.app).pipe(gulp.dest('./wwwroot/appScripts'));

    //gulp.src([
    //    'node_modules/angular2/bundles/js',
    //    'node_modules/angular2/bundles/angular2.*.js',
    //    'node_modules/angular2/bundles/angular2-polyfills.js',
    //    'node_modules/angular2/bundles/http.*.js*',
    //    'node_modules/angular2/bundles/router.*.js*',
    //    'node_modules/es6-shim/es6-shim.min.js',
    //    'node_modules/es6-shim/es6-shim.map',
    //    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    //    'node_modules/systemjs/dist/*.*',
    //    'node_modules/jquery/dist/jquery.*js',
    //    'node_modules/bootstrap/dist/js/bootstrap*.js',
    //    'node_modules/rxjs/bundles/Rx.js',
    //    'node_modules/whitelist/lib/whitelist.js'
    //]).pipe(gulp.dest('./wwwroot/libs/'));

    //gulp.src([
    //    'node_modules/bootstrap/dist/css/bootstrap.css',
    //    'styles/custom.css'
    //]).pipe(gulp.dest('./wwwroot/css'));

    gulp.src([
        'scripts/views/*.html'
    ]).pipe(gulp.dest('./wwwroot/views'));
});

gulp.task('copyToAnime', function (done) {

    gulp.src(paths.libs).pipe(gulp.dest(getPaths().anime + 'libs'));

    gulp.src(paths.css).pipe(gulp.dest(getPaths().anime + 'css'));

    for (var i = 0; i < paths.packages.length; i++) {
        gulp.src('node_modules/' + paths.packages[i] + '/*.js*').pipe(gulp.dest(getPaths().animeLibs + paths.packages[i]));
        gulp.src('node_modules/' + paths.packages[i] + '/src/**/*.js*').pipe(gulp.dest(getPaths().animeLibs + paths.packages[i] + '/src/'));
        gulp.src('node_modules/' + paths.packages[i] + '/typings/**/*.ts*').pipe(gulp.dest(getPaths().animeLibs + paths.packages[i] + '/typings/'));
        gulp.src('node_modules/' + paths.packages[i] + '/*.ts*').pipe(gulp.dest(getPaths().animeLibs + paths.packages[i]));
    }

    //gulp.src(paths.app).pipe(gulp.dest(getPaths().animeScripts));

    //gulp.src([
    //    'node_modules/angular2/bundles/js',
    //    'node_modules/angular2/bundles/angular2.*.js',
    //    'node_modules/angular2/bundles/angular2-polyfills.js',
    //    'node_modules/angular2/bundles/http.*.js*',
    //    'node_modules/angular2/bundles/router.*.js*',
    //    'node_modules/es6-shim/es6-shim.min.js',
    //    'node_modules/es6-shim/es6-shim.map',
    //    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    //    'node_modules/systemjs/dist/*.*',
    //    'node_modules/jquery/dist/jquery.*js',
    //    'node_modules/bootstrap/dist/js/bootstrap*.js',
    //    'node_modules/rxjs/bundles/Rx.js',
    //    'node_modules/whitelist/lib/whitelist.js'
    //]).pipe(gulp.dest(getPaths().anime + 'libs'));

    //gulp.src([
    //    'node_modules/bootstrap/dist/css/bootstrap.css',
    //    'styles/custom.css'
    //]).pipe(gulp.dest(getPaths().anime + 'css'));

    gulp.src([
        getPaths().appScripts + '*.js'
    ]).pipe(gulp.dest(getPaths().animeScripts));

    gulp.src([
        'scripts/views/*.html'
    ]).pipe(gulp.dest(getPaths().anime + 'views'));

    gulp.src([
        'scripts/views/*.html'
    ]).pipe(gulp.dest(getPaths().animeScripts + 'views'));

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

    gulp.src([
        getPaths().appScripts + 'security/*.js'
    ]).pipe(gulp.dest(getPaths().animeScripts + 'security'));

    gulp.src([
        getPaths().appScripts + 'helpers/*.js'
    ]).pipe(gulp.dest(getPaths().animeScripts + 'helpers'));

});

// clean all the generated typescript files
gulp.task('clean', function () {
    return del(['wwwroot/appScripts/**/*',
        'wwwroot/libs/**/*',
        'wwwroot/css/*'
    ]);
});
