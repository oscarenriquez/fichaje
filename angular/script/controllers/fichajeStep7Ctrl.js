(function() {
    TrabajoCampo.FichajeStep7Ctrl = function($scope, $log) {
        $scope.$watch("step7.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep7Ctrl", TrabajoCampo.FichajeStep7Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));