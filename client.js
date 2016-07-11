angular.module('CaculatorApp', []);

angular.module('CaculatorApp').controller('MainController', function($scope) {

  $scope.txt = '';
  $scope.numbersRight = [];
  $scope.numbersLeft = [];
  $scope.operators = [];


  $scope.addNumber=function(num) {
    if($scope.operators.length!=0){
      $scope.txt+= num;
      $scope.numbersRight.push(num);
      console.log('Right: ', $scope.numbersRight);
    }else {
      $scope.txt+= num;
      $scope.numbersLeft.push(num);
      console.log('Left', $scope.numbersLeft);
    }

  };

  $scope.addOperator = function(operator){
     $scope.txt+= operator;
     $scope.operators.push(operator);
  }


   $scope.calculate = function() {
      var sum = 0;

      while($scope.operators.length > 0){
        var right = $scope.numbersRight.join('');
        right = parseFloat(right);
        console.log(right);
        if(isNaN(right)){
          right = 0;
        }
        var left = $scope.numbersLeft.join('');
        left = parseFloat(left);
        console.log(left);
        if(isNaN(left)){
          left = 0;
        }

        var op = $scope.operators.pop();
        sum += calc(left,right,op);

      }

      $scope.result = sum;
      $scope.txt = $scope.result;
      console.log($scope.result);

  };

   function calc(lhs,rhs,op){
    switch(op){
      case '+':
        return lhs+ rhs;
      case '-':
        return lhs-rhs;
      case '*':
        return lhs * rhs;
      case '/':
        return lhs / rhs;
    }
    return 0;
  }

});
