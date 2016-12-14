(function() {
    TrabajoCampo.FichajeStep4Ctrl = function($scope, $log) {
        $scope.$watch("step4.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep4Ctrl", TrabajoCampo.FichajeStep4Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));