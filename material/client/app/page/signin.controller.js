(function () {
    'use strict';

    angular
    .module('app')
        .controller('SigninController',  SigninController);

    function SigninController($http,$scope,BASE_URL,$state,$cookies)
     {

           console.log(BASE_URL);
           $scope.submit = function()
            {
               if($scope.username==null||$scope.pass==null)
                {
                  $scope.error="Empty credentials";
                    return;
                }
                else {
                  $scope.error="";
                }
              $http({
                method:"POST",
                url:BASE_URL+'/angulablogui/login/',
                data:{'username':$scope.username,'password':$scope.pass},
                headers:{
                  'Content-Type':'application/json'
                },
              }).then(function(response){
                console.log(response);
                 if(response.data.message=="Success"){
                  $cookies.put('uniq_id', response.data.uniq_id);
                  // alert($cookies.get('uniq_id'));
                  $state.go('dashboard');
                }
                else {
                  $scope.error="Invalid credentials"
                }
              }).catch(function(response){
                console.log(response);
              });
            }

     }
   })();
