(function() {
    TrabajoCampo.FichajeStep1Ctrl = function($scope, $log) {
        $scope.$watch("step1.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep1Ctrl", TrabajoCampo.FichajeStep1Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));