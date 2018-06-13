(function () {
'use strict';

angular.module('TooMuchCalculator', [])
.controller('TooMuchCalculatorController', TooMuchCalculatorController)

TooMuchCalculatorController.$inject = ["$scope"];
function TooMuchCalculatorController($scope){
  $scope.items = "";
  $scope.result = "";
  $scope.border_class = "black_border"
  $scope.result_class = "black_font"

  $scope.calculateItems = function(){
    if ($scope.items == "")
    {
      $scope.result = "Please enter data first.";
      $scope.border_class = "red_border";
      $scope.result_class = "red_font";
      return
    }

    $scope.border_class = "green_border";
    $scope.result_class = "green_font";
    if (isTooMuch($scope.items))
    {
      $scope.result = "Too much!";
    }
    else
    {
      $scope.result = "Enjoy!";
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
    return (count > 3);
  }
};

})();
