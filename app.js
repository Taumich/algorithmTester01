/*var app = angular.module("MainController", []);

app.controller("MainController", function($scope){
    
    $scope.header = "Header in Angular";
    
});*/

var MainController = function($scope){
    
    $scope.message = "header with angularJS"
    
};

var app = angular.module('login', []);
app.controller('login-ctrl', function($scope){
    $scope.message = player;
    
});