'use strict';
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.property = "スコープのプロパティーは自由に持てる模様";
	$scope.phones = [
     {'name':'Nexus S', 'snippet':'ねくさすエス'},
     {'name':'Motorola XOOM with Wi-Fi', 'snippet':'次世代タブレットのWIFIつき'},
     {'name':'Motorola XOOM', 'snippet':'次世代タブレット'}
     ];
});