(function(angular) {
    angular.module('TrabajoCampo').factory('app', function($state, $window) {
        return {
            constante: {
                applicationName: ""
            },
            logout: function() {
                $("<form method='POST' action='Session'><input name='key' type='hidden' value='-5' /></form>").submit();
            },
            back: function() {
                $window.history.back();
            },
            home: function() {
                $state.go('home');
            }
        };
    });
})(angular);