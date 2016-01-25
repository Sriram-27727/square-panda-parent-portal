'use strict';

app.controller('successCtrl', ['$scope', '$state', function ($scope, $state) {
    var success = this;
    $scope.message = $state.params.message;


}]);