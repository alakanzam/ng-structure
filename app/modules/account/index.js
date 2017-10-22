

module.exports = function(ngModule){

    require('./login/login.controller')(ngModule);

    /*
    * Routes configuration.
    * */
    ngModule.config(function($stateProvider){
       $stateProvider.state('login', {
           url: '/login',
           templateUrl: '/modules/account/login/login.html',
           controller: 'loginController'
       })
    });
};
