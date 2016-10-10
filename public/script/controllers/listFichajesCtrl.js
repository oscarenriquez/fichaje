(function() {
    TrabajoCampo.ListFichajesCtrl = function($scope, $log, $state, fichaje) {
        var scope = this;
        scope.subtitle = "Listas";
        scope.listFichas = new Array();
        scope.listRuteo = new Array();

        $scope.$parent.main.loading = true;
        fichaje.getAll().then(function(data) {
            $scope.$parent.main.loading = false;
            scope.listFichas = data.dataFichaje;
            scope.listRuteo = data.dataRuteo;
        });

        scope.goFichaje = function() {
            $state.go("fichaje");
        }
    };

    angular.module("TrabajoCampo").controller("ListFichajesCtrl", TrabajoCampo.ListFichajesCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));