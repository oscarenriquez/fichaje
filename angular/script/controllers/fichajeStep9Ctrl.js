(function() {
    TrabajoCampo.FichajeStep9Ctrl = function($scope, $log) {
        $scope.$watch("step9.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep9Ctrl", TrabajoCampo.FichajeStep9Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));