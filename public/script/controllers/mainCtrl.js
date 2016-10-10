(function() {
    TrabajoCampo.MainCtrl = function($scope, $mdToast, $mdDialog, $mdMedia, $log, $state, app) {
        var scope = this;
        scope.loading = false;
        scope.history = true;
        scope.const = app.constante;
        scope.logout = app.logout;
        scope.back = app.back;
        scope.home = app.home;
        scope.viewDetail = viewDetail;

        $scope.$watch(function() {
            return $state.current.name !== "home";
        }, function(history) {
            scope.history = history;
        })

        scope.home();

        function viewDetail($event, cliente, direccion) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
            $mdDialog.show({
                templateUrl: 'angular/template/fichaje-detalle.html',
                parent: angular.element(document.body),
                bindToController: true,
                locals: {
                    cliente: cliente,
                    direccion: direccion
                },
                controller: "FichajeDetalleCtrl",
                controllerAs: "detalle",
                targetEvent: $event,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(function() {
                console.log('You submited the dialog');
            }, function() {
                console.log('You cancelled the dialog.');
            });
        }
    };

    angular.module("TrabajoCampo").controller("MainCtrl", TrabajoCampo.MainCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));