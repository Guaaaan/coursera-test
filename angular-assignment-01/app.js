(function () {
'use strict';

angular.module('TooMuchCalculator', [])
.controller('TooMuchCalculatorController', TooMuchCalculatorController)

TooMuchCalculatorController.$inject = ["$scope"];
function TooMuchCalculatorController($scope){
  $scope.items = "";
  $scope.result = "";

  $scope.calculateItems = function(){
    if ($scope.items == "")
    {
      $scope.result = "Please enter data first.";
    }
    else
    {
      $scope.result = isTooMuch($scope.items);
    }
  };

  function isTooMuch(string)
  {
    var items = string.split(",");
    var count = 0
    for(var i=0; i<items.length; i++){
        if(items[i].trim() != "")
        {
          count++;
        }
    }
    if (count > 3)
    {
      return "Too much!"
    }
    else {
      return "Enjoy!"
    }
  }
};

})();
