(function() {
    TrabajoCampo.ListFichajesCtrl = function($scope, $log, $state, fichaje) {
        var fichas = this;
        fichas.subtitle = "Listas";
        fichas.listFichas = new Array();
        fichas.listRuteo = new Array();

        $scope.$parent.main.loading = true;
        fichaje.getAll().then(function(data) {
            $scope.$parent.main.loading = false;
            if (data) {
                fichas.listFichas = data.dataFichaje;
                fichas.listRuteo = data.dataRuteo;
            }
        });

        fichas.goFichaje = function(fichaId, toUpdate, tipo) {
            $state.go('fichaje', { fichaId: fichaId, toUpdate: toUpdate, tipo: tipo });
        }

        fichas.goUploadPhotos = function(fichaId) {
            $state.go('upload', { fichaId: fichaId });
        }

    };

    angular.module("TrabajoCampo").controller("ListFichajesCtrl", TrabajoCampo.ListFichajesCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));