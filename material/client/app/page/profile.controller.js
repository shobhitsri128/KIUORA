(function() {
    'use strict';

    angular.module('app')
        .controller('ProfileController', ProfileController);

    function ProfileController($state,$http, $scope, $window, BASE_URL, $cookies) {
     $scope.showmyquestions=false;
     $scope.error=false;
     $scope.user=$cookies.get('uniq_id');
     if($scope.user==''||$scope.user==null||$scope.user==undefined)
       $state.go('signin');
     $http({
         method: "GET",
         url: BASE_URL + '/angulablogui/details/',
         params: {
             'uniq_id': $scope.user,
         },
         headers: {
             'Content-Type': 'application/json'
         }
     }).then(function(response) {
        console.log(response.data[0].details[0]);
         $scope.gender=response.data[0].details[0].gender;
         $scope.name=response.data[0].details[0].name;
         $scope.mobile=response.data[0].details[0].mobile;
     }).catch(function(response) {
         console.log(response);
     });

        $scope.getmyquestions = function(k)
        {
          console.log(k);
          $http({
              method: "GET",
              url: BASE_URL + '/angulablogui/my_ques_view/',
              params: {
                  'uniq_id': $scope.user,
                  'category': k
              },
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(function(response) {
            console.log(response.data)
            if(response.data.message!='Error')
            {
             $scope.my_ques = response.data;
             $scope.showmyquestions=true;
             $scope.error=false;
             $scope.my_blogs='';
             $scope.errorblog=false;
           }
            else {
              $scope.my_ques='';
              $scope.error=true;
              $scope.errorblog=false;
              $scope.my_blogs='';
            }
          }).catch(function(response) {
              console.log(response);
          });


        }
        $scope.getmyblogs = function()
        {
          $http({
              method: "GET",
              url: BASE_URL + '/angulablogui/my_blog_view/',
              params: {
                  'uniq_id': $scope.user
              },
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(function(response) {
            console.log(response.data[0].blogs);
            if(response.data.message!='Error')
            {
             $scope.my_blogs = response.data[0].blogs;
             $scope.showmyblogs=true;
             $scope.errorblog=false;
             $scope.my_ques='';
             $scope.error=false;
           }
            else {
              $scope.my_blogs='';
              $scope.errorblog=true;
              $scope.my_ques='';
              $scope.error=false;
            }
          }).catch(function(response) {
              console.log(response);
          });


        }
    }
})();
