angular.module('app').service('service', function($http, $q) {
   this.getTeams = function(){
    return $http({
        method: 'GET',
        url: 'http://api.sportradar.us/nfl-ot2/games/2017/REG/schedule.json?api_key=tu7gtw2mk23jh5sgke8upjmc'
    })
   }
});