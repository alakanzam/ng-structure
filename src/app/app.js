'use strict';

// Css imports.
require('../../node_modules/bootstrap/dist/css/bootstrap.css');

// AdminLTE
require('../../node_modules/admin-lte/dist/css/AdminLTE.css');
require('../../node_modules/admin-lte/dist/css/skins/skin-black.css');

require('../../node_modules/angular-toastr/dist/angular-toastr.css');

// Font awesome.
require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/angular-block-ui/dist/angular-block-ui.css');

// Moment picker.
require('../../node_modules/angular-moment-picker/dist/angular-moment-picker.css');
require('../../node_modules/ui-cropper/compile/minified/ui-cropper.css');

// Import app style.
require('./app.scss');

// Import jquery lib.
require('jquery');
require('bluebird');
require('bootstrap');
require('admin-lte');
require('moment');
require('ui-cropper');

// Angular plugins declaration.
let angular = require('angular');
require('@uirouter/angularjs');
require('angular-block-ui');
require('angular-toastr');
require('angular-translate');
require('angular-translate-loader-static-files');
require('angular-moment');
require('angular-moment-picker');
require('ng-data-annotation');
require('angular-file-upload');

// Module declaration.
let ngModule = angular.module('ngApp', [
    'ui.router', 'blockUI', 'toastr', 'pascalprecht.translate',
    'angularMoment', 'moment-picker', 'ngDataAnnotations', 'angularFileUpload', 'uiCropper']);

ngModule.config(function($urlRouterProvider, $translateProvider, $httpProvider, urlStates){

    // API interceptor
    $httpProvider.interceptors.push('apiInterceptor');

    // Url router config.
    $urlRouterProvider.otherwise(urlStates.dashboard.url);

    // Translation config.
    $translateProvider.useStaticFilesLoader({
        prefix: './assets/dictionary/',
        suffix: '.json'
    });

    // en-US is default selection.
    $translateProvider.use('en-US');

});

// Constants import.
require('./constants/index')(ngModule);

// Factories import.
require('./factories/index')(ngModule);

// Services import.
require('./services/index')(ngModule);

// Directive requirements.
require('./directives/index')(ngModule);

// Module requirements.
require('./modules/index')(ngModule);