(function() {
    TrabajoCampo.FichajeStep5Ctrl = function($scope, $log) {
        $scope.$watch("step5.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep5Ctrl", TrabajoCampo.FichajeStep5Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));