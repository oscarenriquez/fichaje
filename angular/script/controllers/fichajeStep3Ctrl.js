(function() {
    TrabajoCampo.FichajeStep3Ctrl = function($scope, $log, $timeout) {
        $scope.$watch("step3.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
            if (!$scope.$parent.ficha.continua) {
                $scope.step3.formFicha.estadoMed.$validate();
            }
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStep3Ctrl", TrabajoCampo.FichajeStep3Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));