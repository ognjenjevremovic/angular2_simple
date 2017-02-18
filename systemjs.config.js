(function(global) {
    'use strict';

    System.config({
        path: {
            npm: 'node_modules/'
        },
        map: {
            app : 'app',

            '@angular/core': 'npm:@angular/core',
            '@angular/common': 'npm:@angular/common',
            '@angular/compiler': 'npm:@angular/compiler',
            '@angular/forms': 'npm:@angular/forms',
            '@angular/http': 'npm:@angular/http',
            '@angular/platform-browser': 'npm:@angular/platform-browser',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic',
            '@angular/router': 'npm:@angular/router',

            rxjs: 'npm:rxjs'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);