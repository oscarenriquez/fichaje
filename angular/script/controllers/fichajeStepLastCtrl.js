(function() {
    TrabajoCampo.FichajeStepLastCtrl = function($scope, $log) {
        var stepLast = this;
        stepLast.valid = false;
        $scope.$watch("stepLast.formFicha.$valid", function(value) {
            $scope.$parent.ficha.continua = value;
            stepLast.valid = value;
        });
    };

    angular.module("TrabajoCampo").controller("FichajeStepLastCtrl", TrabajoCampo.FichajeStepLastCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));