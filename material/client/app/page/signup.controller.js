(function() {
    'use strict';

    angular.module('app').controller('SignupController', SignupController);

    function SignupController($http, $scope, $window,BASE_URL)
    {

        $scope.confirmpass=function()
        {
           if($scope.pass!=$scope.cnfpass)
             $scope.error="Confirm password does not match"
           else
            {
              $scope.error="";
              return true;
            }
        }
        $scope.checkmobilenumber=function()
        {
           var a=$scope.mob.toString();
           if(a.length!=10)
           {
             $scope.error="Invalid Phone number";
             return;
           }
           else
           {
               $scope.error="";
               return;
           }

        }
        $scope.submit = function()
        {
          if($scope.name==null||$scope.username==null||$scope.gender==null||$scope.email==null||$scope.mob==null||$scope.pass==null)
          {
            $scope.error="*Empty credentials";
            return;
          }
          else {
            $scope.error="";
          }
          if($scope.error=="")
          {
            console.log("correct");
            var data = {
                'name': $scope.name,
                'username': $scope.username,
                'gender': $scope.gender,
                'email': $scope.email,
                'mobile': $scope.mob,
                'password': $scope.pass
              }
            $http({
              method:"POST",
              url:BASE_URL+'/angulablogui/register/',
              data:data,
              headers:{
                'Content-Type':'application/json'
              },
            }).then(function(response){
                if(response.data.message=="Username already taken")
                  $scope.usernameerror=response.data.message;
                  else {
                    // swal("success");
                    window.location.href="#!/page/signin";
                  }
            }).catch(function(response){
              console.log(response);
            });
          }

        }
      }
    })();
