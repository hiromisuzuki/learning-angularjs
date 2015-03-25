'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function() {

  beforeEach(module('phonecatApp'));
  
  it("should create Phones model with 3 phones", inject(function($controller) {
	  var scope = {};
	  var ctrl = $controller('PhoneListCtrl', {$scope:scope});
	  expect(scope.phones.length).toBe(3);
	  expect(scope.property).toBe("スコープのプロパティーは自由に持てる模様");
  }));

});
