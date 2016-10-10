(function() {
    TrabajoCampo.FichajeDetalleCtrl = function($scope, $mdDialog, $log) {
        var scope = this;
        scope.closeDialog = function() {
            $mdDialog.cancel();
        };
    };

    angular.module("TrabajoCampo").controller("FichajeDetalleCtrl", TrabajoCampo.FichajeDetalleCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));