angular.module('app', []).controller('control', function($scope, service) {
    service.getTeams().then(function(res){
        console.log(res.data)
     $scope.team = res.data
    })
 });