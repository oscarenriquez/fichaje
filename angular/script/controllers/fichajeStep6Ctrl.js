(function() {
    TrabajoCampo.FichajeStep6Ctrl = function($scope, $log) {
        $scope.$watch("step6.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep6Ctrl", TrabajoCampo.FichajeStep6Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));