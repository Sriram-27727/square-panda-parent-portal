'use strict';
angular.module('app').run( ['$rootScope', '$state', '$stateParams', '$location', '$cookieStore', '$http' ,
  function ($rootScope, $state, $stateParams, $location, $cookieStore, $http) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.globals = $cookieStore.get('globals') || {};

      if ($rootScope.globals.currentUser) {
          //$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {          
          var restrictedPage = $.inArray($location.path(), ['/login', '/register', '/about', '/updates', '/FAQs', '/pre-order']) === -1;
          var loggedIn = $rootScope.globals.currentUser;
          if (restrictedPage && !loggedIn) {
              $location.path('/login');
          }
      });

     
    }
  ]).config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider,   $urlRouterProvider) {
      
      function urlBuilder(viewFolderPath, viewPath){
          return 'components/'+ viewFolderPath +'/'+ viewPath + '.view.html';
      }

      $urlRouterProvider.otherwise('/home');
      $stateProvider.state('home', {
        url: '/home',
        templateUrl: urlBuilder('home', 'home'),
        controller: 'homeCtrl',
        controllerAs: "home",
        data: {
          pageTitle: 'Square Panda Inc.'
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: urlBuilder('user/login', 'login'),
        controller: 'loginCtrl',
        controllerAs: 'login',
        data: {
          pageTitle: 'Square Panda - Sign in'
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: urlBuilder('user/register', 'register'),
        controller: 'registerCtrl',
        controllerAs: "register",
        data: {
          pageTitle: 'Square Panda - Register'
        }
      })

      .state('forgot_password', {
        url: '/forgot_password',
        templateUrl: urlBuilder('user/forgot_password', 'forgot-password'),
        controller: 'forgotPassowordCtrl',
        controllerAs: "forgot",
        data: {
          pageTitle: 'Square Panda - Forgot password'
        }
      })

      .state('about', {
        url: '/about',
        templateUrl: urlBuilder('static', 'about'),
        controller: 'staticCtrl',
        controllerAs: "static",
        data: {
          pageTitle: 'Square Panda - About'
        }
      })

      .state('updates', {
        url: '/updates',
        templateUrl: urlBuilder('static', 'updates'),
        controller: 'staticCtrl',
        controllerAs: "static",
        data: {
          pageTitle: 'Square Panda - Updates'
        }
      })

      .state('FAQs', {
        url: '/FAQs',
        templateUrl: urlBuilder('static', 'faqs'),
        controller: 'staticCtrl',
        controllerAs: "static",
        data: {
          pageTitle: 'Square Panda - Faqs'
        }
      })

      .state('pre-order', {
        url: '/pre-order',
        templateUrl: urlBuilder('static', 'pre_order'),
        controller: 'staticCtrl',
        controllerAs: "static",
        data: {
          pageTitle: 'Square Panda - Pre order'
        }
      })


  }]);
