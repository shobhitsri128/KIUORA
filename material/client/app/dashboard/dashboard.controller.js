(function() {
    'use strict';

    angular.module('app').controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl($scope, $http, $state, BASE_URL, $cookies) {
        $scope.disablepostbutton = true;
        $scope.answer = [];

        $scope.user = $cookies.get('uniq_id');
        if($scope.user==''||$scope.user==null||$scope.user==undefined)
          $state.go('signin');
        $scope.inputqueserror = '';
        $scope.categorytype='';

        $scope.getquestionoftype = function() {
            console.log($scope.categorytype);
            $http({
                method: "GET",
                url: BASE_URL + '/angulablogui/filtered_view/',
                params: {
                    'category': $scope.categorytype
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(response) {
                console.log(response.data);
                $scope.question = response.data;
            }).catch(function(response) {
                console.log(response);
            });
        }
        //////////// QUESTIONS//////////////////
        $scope.getquestion = function() {
            $http({
                method: "GET",
                url: BASE_URL + '/angulablogui/view/',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(response) {
                console.log(response.data);
                $scope.question = response.data;
            }).catch(function(response) {
                console.log(response);
            });
        }
        /////////// CHECK STATE TYPE //////////////
        if ($state.current.name == 'dashboard_academics') {
            $scope.categorytype = 'academics';
            $scope.getquestionoftype();
        } else if ($state.current.name == 'dashboard_placement') {
            $scope.categorytype = 'placement';

            $scope.getquestionoftype();
        } else if ($state.current.name == 'dashboard_sports') {
            $scope.categorytype = 'sports';

            $scope.getquestionoftype();
        } else if ($state.current.name == 'dashboard_fest') {
            $scope.categorytype = 'fest';

            $scope.getquestionoftype();
        } else if ($state.current.name == 'dashboard_club') {
            $scope.categorytype = 'club';

            $scope.getquestionoftype();
        } else if ($state.current.name == 'dashboard_other') {

            $scope.categorytype = 'others';

            $scope.getquestionoftype();
        } else {
          $scope.categorytype='';
            $scope.getquestion();
        }

        ////////////////// ADDING ANSWER  ///////////
        $scope.addanswer = function(k, i) {
            console.log($scope.answer[i]);
            console.log(k);
            console.log($scope.user);
            $http({
                method: "POST",
                url: BASE_URL + '/angulablogui/add_answer/',
                data: {
                    'answer': $scope.answer[i],
                    'ques_id': k,
                    'uniq_id': $scope.user
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(response) {
                console.log(response);
                $scope.answer[i] = '';
                if($scope.categorytype=='')
                  $scope.getquestion();
                else {
                   $scope.getquestionoftype();
                }
            }).catch(function(response) {
                console.log(response);
            });
        }
        ///////////////// POST QUESTIONS //////////////
        $scope.postquestion = function() {

            if ($scope.inputques == null) {
                $scope.inputqueserror = "*Add question";
                return;
            } else if ($scope.category == null) {
                $scope.inputqueserror = "*Add Category";
                return;
            } else {
                $scope.inputqueserror = '';
            }
            $http({
                method: "POST",
                url: BASE_URL + '/angulablogui/add/',
                data: {
                    'question': $scope.inputques,
                    'category': $scope.category,
                    'add_by': $scope.user
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(response) {
                console.log(response);
                $scope.inputques = '';
                $scope.category = '';
                if($scope.categorytype=='')
                  $scope.getquestion();
                else {
                   $scope.getquestionoftype();
                }
            }).catch(function(response) {
                console.log(response);
            });
        }
        $scope.vote = function(votetype, id) {
            console.log(votetype, id);
            $http({
                method: "POST",
                url: BASE_URL + '/angulablogui/vote/',
                data: {
                    'vote': votetype,
                    'answer_id': id,
                    'vote_id': 1,
                    'uniq_id': $scope.user
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(response) {
                if(response.data.message=='You have already voted')
                 alert(response.data.message);
                 if($scope.categorytype=='')
                   $scope.getquestion();
                 else {
                    $scope.getquestionoftype();
                 }
            }).catch(function(response) {});
        }

    }

})();
