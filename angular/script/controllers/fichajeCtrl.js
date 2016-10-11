(function() {
    TrabajoCampo.FichajeCtrl = function($timeout, $state, flowFichaje) {
        var scope = this;
        scope.flow = flowFichaje;
        scope.flow.reset();
        scope.prev = function() {
            if (!scope.flow.isFirst) {
                scope.flow.prev();
                $timeout(function() {
                    $state.go(scope.flow.prevStep);

                }, 100);
            }
        }
        scope.next = function() {
            if (!scope.flow.isLast) {
                scope.flow.next();
                $timeout(function() {
                    $state.go(scope.flow.nextStep);
                }, 100);
            }
        }

        $state.transitionTo(scope.flow.initStep);
    };

    angular.module("TrabajoCampo").controller("FichajeCtrl", TrabajoCampo.FichajeCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));