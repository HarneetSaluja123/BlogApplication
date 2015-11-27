'use strict';

/**
 * @ngdoc router
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */
//create a module blogApp
var originalLocation = "/";
var isLoginSuccess = false;
var httpHeaders;

var blogApp = angular.module('blogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngIdle',
    'ngAnimate',
    'ngCookies',
    'ngSocial',
    'ui.bootstrap',
    'uiSwitch']); // Add dependency 'ui.bootstrap' for bootstrap support'uiSwitch'
 
//Now Configure  our  routing
blogApp.config(['$routeProvider', '$locationProvider','$httpProvider','$idleProvider', '$keepaliveProvider',
              function($routeProvider, $locationProvider,$httpProvider,$idleProvider, $keepaliveProvider) {
    $routeProvider
   /* .when('/Profile',
    	    {
    	        controller: 'InlineEditorController',
    	        templateUrl: 'App/views/profile.html'
    	    })*/
    .when('/Profile',
    	    {
    	        controller: 'profileCtrl',
    	        templateUrl: 'App/views/profile.html'
    	    })
    .when('/Main',
    	    {
    	        controller: 'mainCtrl',
    	        templateUrl: 'App/views/main.html'
    	    })
    
    .when('/Modal',
    	    {
    	        controller: 'modelCtrl',
    	        templateUrl: 'App/views/loginForm2.html'
    	    })
   .when('/Home',
    {
        controller: 'homeCtrl',
        templateUrl: 'App/views/home.html'
    })
    .when('/Login',
    {
        controller: 'loginCtrl',
        templateUrl: 'App/views/loginForm.html'
    })
    
     .when('/Register',
    {
        controller: 'loginCtrl',
        templateUrl: 'App/views/registrationForm.html'
    })
   /*   .when('/ForgotPassword',
    {
        controller: 'loginCtrl',
        templateUrl: 'App/Views/Loginpages/SigninForgotPassword.html'
    })   
      .when('/ResetPassword',
    {
        controller: 'loginCtrl',
        templateUrl: 'App/Views/Loginpages/ResetPassword.html'
    })
    .when('/Subscription',
    {
        controller: 'SubscriptionCtrl',
        templateUrl: 'App/Views/Subscription/Subscription.html'
    })
    .when('/SignIn/:actionType/:code' , {
    	controller: 'loginCtrl',
    	templateUrl: 'App/Views/Loginpages/SignIn.html'
    })
    
    .when('/Myfiles' , {
    	controller: 'MyfilesCtrl',
    	templateUrl: 'App/Views/Myfiles/myfiles.html'
    })
    
    .when('/Myfilesadd' , {
    	controller: 'MyfilesCtrl',
    	templateUrl: 'App/Views/Myfiles/myfilesadd.html'
    })
    
    .when('/Myfilesadd/:fid' , {
    	controller: 'MyfilesCtrl',
    	templateUrl: 'App/Views/Myfiles/myfilesadd.html'
    })
    
    .when('/stripeForm' , {
    	controller: 'SubscriptionCtrl',
    	templateUrl: 'App/Views/StripeTutorial.html'
    })
    
    .when('/success' , {
    	controller: 'SubscriptionCtrl',
    	templateUrl: 'App/Views/Subscription/Success.html'
    })
    .when('/failed' , {
    	controller: 'SubscriptionCtrl',
    	templateUrl: 'App/Views/Subscription/Failed.html'
    })
    
     .when('/General' , {
    	controller: 'generalCtrl',
    	templateUrl: 'App/Views/General/general.html'
    })
    
     .when('/Generaledit/:pid' , {
    	controller: 'generalCtrl',
    	templateUrl: 'App/Views/General/Generaledit.html'
    })
    
    .when('/changePassword' , {
    	controller: 'generalCtrl',
    	templateUrl: 'App/Views/General/ChangePassword.html'
    })
    
    .when('/cookiesDisabled',{
    	controller: 'loginCtrl',
    	templateUrl : 'App/Views/Partial/CookiesDisabled.html'
    })
    
    .otherwise({
        redirectTo: '/Login'
    });*/
    
    $locationProvider.html5Mode(false);
  /*  $idleProvider.idleDuration(600);
	$idleProvider.warningDuration(5);
	$keepaliveProvider.interval(60);
    httpHeaders = $httpProvider.defaults.headers;
   
    $httpProvider.defaults.useXDomain = true;

    delete httpHeaders.common['X-Requested-With'];*/
}]);
