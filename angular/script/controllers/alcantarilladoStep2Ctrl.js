(function() {
    TrabajoCampo.AlcantarilladoStep2Ctrl = function($scope, $log) {
        $scope.$watch("alcant2.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("AlcantarilladoStep2Ctrl", TrabajoCampo.AlcantarilladoStep2Ctrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));