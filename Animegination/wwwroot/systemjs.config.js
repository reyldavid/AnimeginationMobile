(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'appScripts', // 'dist',
        '@angular': 'libs/@angular'
        //,
        //'angular2-in-memory-web-api': 'libs/angular2-in-memory-web-api',
        //'rxjs': 'libs/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'appScripts': { main: 'boot.js', defaultExtension: 'js' }
        //,
        //'rxjs': { defaultExtension: 'js' },
        //'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
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

