(function() {
    TrabajoCampo.FichajeCtrl = function($state, flowFichaje) {
        var scope = this;
        scope.flow = flowFichaje;
        scope.prev = function() {
            $state.go(scope.flow.prev);
        }
        scope.next = function() {
            $state.go(scope.flow.next);
        }

        $state.transitionTo(scope.flow.initStep);
    };

    angular.module("TrabajoCampo").controller("FichajeCtrl", TrabajoCampo.FichajeCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));