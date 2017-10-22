
module.exports = function(ngModule){
    /*
    * Controllers gathering.
    * */
    require('./main/main.controller')(ngModule);

    /*
    * Module configuration.
    * */
    ngModule.config(function($stateProvider){
       $stateProvider.state('main-dashboard', {
           url: '/dashboard/main',
           templateUrl: '/modules/dashboard/main/main.html',
           controller: 'homeController'
       });
    });
};