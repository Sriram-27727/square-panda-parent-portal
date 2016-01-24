'use strict';

describe('Controller: homeCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var homeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('homeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(homeCtrl.awesomeThings.length).toBe(3);
  });
});
