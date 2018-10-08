(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'scripts', // 'dist',
        '@angular': 'libs/@angular',
        'angular2-jwt': 'libs/angular2-jwt'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'scripts': { main: 'boot.js', defaultExtension: 'js' },
        'angular2-jwt': { main: 'angular2-jwt.js', defaultExtension: 'js' }
    };

    var packageNames = [
        'libs/@angular/common',
        'libs/@angular/compiler',
        'libs/@angular/core',
        'libs/@angular/http',
        'libs/@angular/platform-browser',
        'libs/@angular/platform-browser-dynamic',
        'libs/@angular/router',
        'libs/@angular/router-deprecated',
        'libs/@angular/testing'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);

