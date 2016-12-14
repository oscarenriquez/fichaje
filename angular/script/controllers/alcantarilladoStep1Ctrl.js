(function() {
    TrabajoCampo.AlcantarilladoStep1Ctrl = function($scope, $log) {
        $scope.$watch("alcant1.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("AlcantarilladoStep1Ctrl", TrabajoCampo.AlcantarilladoStep1Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));