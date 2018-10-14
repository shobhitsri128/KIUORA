(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
                function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
                var routes, setRoutes;
                $stateProvider
                    .state('signin', {
                        url: '/page/signin',
                        templateUrl: 'app/page/signin.html',
                        controller:'SigninController',
                    })
                    .state('dashboard', {
                        url: '/dashboard',
                        templateUrl: 'app/dashboard/dashboard.html',
                        controller:'DashboardCtrl',
                        params:{'uniq_id':''}

                    })
        /////////////////// TYPES OF QUESTIONS      /////////////////////////
                      .state('dashboard_academics', {
                          url: '/dashboard_academics',
                          templateUrl: 'app/dashboard/dashboard.html',
                          controller:'DashboardCtrl',
                          params:{'uniq_id':''}

                      })
                      .state('dashboard_placement', {
                          url: '/dashboard_placement',
                          templateUrl: 'app/dashboard/dashboard.html',
                          controller:'DashboardCtrl',
                          params:{'uniq_id':''}

                      })
                      .state('dashboard_sports', {
                          url: '/dashboard_sports',
                          templateUrl: 'app/dashboard/dashboard.html',
                          controller:'DashboardCtrl',
                          params:{'uniq_id':''}

                      })
                      .state('dashboard_fest', {
                          url: '/dashboard_fest',
                          templateUrl: 'app/dashboard/dashboard.html',
                          controller:'DashboardCtrl',
                          params:{'uniq_id':''}

                      })
                      .state('dashboard_club', {
                          url: '/dashboard_club',
                          templateUrl: 'app/dashboard/dashboard.html',
                          controller:'DashboardCtrl',
                          params:{'uniq_id':''}

                      })
                      .state('dashboard_other', {
                          url: '/dashboard_other',
                          templateUrl: 'app/dashboard/dashboard.html',
                          controller:'DashboardCtrl',
                          params:{'uniq_id':''}

                      })
                      .state('blog', {
                          url: '/page/blog',
                          templateUrl: 'app/page/blog.html',
                          controller:'blogcontroller',
                      })
                    .state('signup', {
                        url: '/page/signup',
                        templateUrl: 'app/page/signup.html',
                        controller:'SignupController',
                    })
                    .state('profile', {
                        url: '/page/profile',
                        templateUrl: 'app/page/profile.html',
                        controller:'ProfileController',
                    });


                $urlRouterProvider
                    .when('/', '/dashboard')
                    .otherwise('/page/signin');
            }
        ]);

})();
