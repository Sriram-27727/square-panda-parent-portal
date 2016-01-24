'use strict';

angular.module('app').factory('UserService', ['$http', function ($http) {
 
    var service = {};
    var base_url = "http://ec2-54-159-195-71.compute-1.amazonaws.com";

    service.Create = function(user) {
       return $http.post(base_url + '/user/register', user);
    };
 
    return service;
 
      
}]);