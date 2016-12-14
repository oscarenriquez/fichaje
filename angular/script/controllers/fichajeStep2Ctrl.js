(function() {
    TrabajoCampo.FichajeStep2Ctrl = function($scope) {
        $scope.$watch("step2.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep2Ctrl", TrabajoCampo.FichajeStep2Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));