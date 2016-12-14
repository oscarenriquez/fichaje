(function() {
    TrabajoCampo.FichajeDatosMedidorCtrl = function($scope) {
        $scope.$watch("datosMed.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeDatosMedidorCtrl", TrabajoCampo.FichajeDatosMedidorCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));