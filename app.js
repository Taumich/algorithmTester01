/*var app = angular.module("MainController", []);

app.controller("MainController", function($scope){
    
    $scope.header = "Header in Angular";
    
});*/

var MainController = function($scope){
    
    $scope.message = "header with angularJS"
    
};

var app = angular.module('login', []);
app.controller('login-ctrl', function($scope){
    $scope.message = "wazappa";
    $scope.hej = false;
    $scope.actionLink = 'refugee-request.html';
    $scope.setAction = function(){
        if( $scope.actionLink == 'refugee-request.html'){
            $scope.actionLink = 'volunteer-map.html';
        }else{
            $scope.actionLink = 'refugee-request.html';
        }
    }
})