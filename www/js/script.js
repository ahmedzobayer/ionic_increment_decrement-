/* global angular */
var app = angular.module("voting", [])
  .directive('upVote', function(){
  return    {
    restrict:'E',
    scope:{
      min: '=',
      max:'=',
      value:'='
    },
    template: '<div>' + 
      '<button class="button button-positive" ng-click="value = value + 1" ng-disabled="value >= max">+</button>' + 
      '<span>{{value}}</span>' +
      '<button class="button button-calm" ng-click="value = value - 1" ng-disabled="value <= min">-</button>' + 
    '</div>'
  }
  });
  
  function controller($scope){
    $scope.model = {
      min: 0,
      max: 9,
      value: 1
    }
  }