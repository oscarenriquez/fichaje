(function() {
    TrabajoCampo.FichajeStep8Ctrl = function($scope, $log) {
        $scope.$watch("step8.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep8Ctrl", TrabajoCampo.FichajeStep8Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));