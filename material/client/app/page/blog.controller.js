(function() {
    'use strict';

    angular.module('app').controller('blogcontroller', blogcontroller);

    function blogcontroller($scope, $http, $state, BASE_URL,$cookies)
    {
      $scope.inputqueserror='';
      $scope.user=$cookies.get('uniq_id');
      if($scope.user==''||$scope.user==null||$scope.user==undefined)
        $state.go('signin');
      $scope.blogs='';
      $scope.getblogs=function()
      {
      $http({
          method: "GET",
          url: BASE_URL + '/angulablogui/blogapp/',
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(function(response) {
          console.log(response.data);
          $scope.blogs=response.data;
      }).catch(function(response) {
          console.log(response);
      });
    }

      $scope.postblog = function() {


          if ($scope.blogtitle == null) {
              $scope.inputqueserror = "*Add Title";
              return;
          } else if ($scope.blogcontent == null) {
              $scope.inputqueserror = "*Add Content";
              return;
          } else {
              $scope.inputqueserror = '';
          }
          $http({
              method: "POST",
              url: BASE_URL + '/angulablogui/add_blog/',
              data: {
                  'title': $scope.blogtitle,
                  'description': $scope.blogcontent,
                  'uniq_id': $scope.user
              },
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(function(response) {
              console.log(response.data);

              $scope.blogtitle='';
              $scope.blogcontent='';
              $scope.getblogs();
          }).catch(function(response) {
              console.log(response);
          });
      }
      if($state.current.name=='blog')
        $scope.getblogs();

    }
  })();
