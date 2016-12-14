(function() {
    TrabajoCampo.FichajeAsignaTrabajoCtrl = function($scope) {
        var asigTrabajo = this;
        asigTrabajo.valid = false;
        $scope.$watch("asigTrabajo.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
            asigTrabajo.valid = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeAsignaTrabajoCtrl", TrabajoCampo.FichajeAsignaTrabajoCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));