var TrabajoCampo;
(function() {
    TrabajoCampo = angular.module("TrabajoCampo", ['ngAnimate', 'ngMaterial', 'lfNgMdFileInput', 'ui.router', 'anim-in-out'])
        .config(function($mdThemingProvider, $stateProvider, $logProvider, $locationProvider, $urlRouterProvider) {
            $logProvider.debugEnabled(true);
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "angular/template/list-fichajes.html",
                    controller: "ListFichajesCtrl",
                    controllerAs: "fichas"
                }) // parent fichaje
                .state("fichaje", {
                    url: "/fichaje",
                    templateUrl: "angular/template/fichaje.html",
                    controller: "FichajeCtrl",
                    controllerAs: "ficha"
                }) // start nested states and views step1 to step10
                .state("fichaje.step1", { // step1
                    url: "/step1",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step1.html",
                            controller: "FichajeStep1Ctrl",
                            controllerAs: "step1"
                        }
                    }
                })
                .state("fichaje.step2", { // step2
                    url: "/step2",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step2.html",
                            controller: "FichajeStep2Ctrl",
                            controllerAs: "step2"
                        }
                    }
                })
                .state("fichaje.step3", { // step3
                    url: "/step3",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step3.html",
                            controller: "FichajeStep3Ctrl",
                            controllerAs: "step3"
                        }
                    }
                })
                .state("fichaje.step4", { // step4
                    url: "/step4",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step4.html",
                            controller: "FichajeStep4Ctrl",
                            controllerAs: "step4"
                        }
                    }
                })
                .state("fichaje.step5", { // step5
                    url: "/step5",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step5.html",
                            controller: "FichajeStep5Ctrl",
                            controllerAs: "step5"
                        }
                    }
                })
                .state("fichaje.step6", { // step6
                    url: "/step6",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step6.html",
                            controller: "FichajeStep6Ctrl",
                            controllerAs: "step6"
                        }
                    }
                })
                .state("fichaje.step7", { // step7
                    url: "/step7",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step7.html",
                            controller: "FichajeStep7Ctrl",
                            controllerAs: "step7"
                        }
                    }
                })
                .state("fichaje.step8", { // step8
                    url: "/step8",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step8.html",
                            controller: "FichajeStep8Ctrl",
                            controllerAs: "step8"
                        }
                    }
                })
                .state("fichaje.step9", { // step9
                    url: "/step9",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step9.html",
                            controller: "FichajeStep9Ctrl",
                            controllerAs: "step9"
                        }
                    }
                })
                .state("fichaje.step10", { // step10
                    url: "/step10",
                    views: {
                        "fichaje": {
                            templateUrl: "angular/template/fichaje-step10.html",
                            controller: "FichajeStep10Ctrl",
                            controllerAs: "step10"
                        }
                    }
                });
        })
        .filter('nospace', function() {
            return function(value) {
                return (!value) ? '' : value.replace(/ /g, '');
            };
        })
        //replace uppercase to regular case
        .filter('humanizeDoc', function() {
            return function(doc) {
                if (!doc) return;
                if (doc.type === 'directive') {
                    return doc.name.replace(/([A-Z])/g, function($1) {
                        return '-' + $1.toLowerCase();
                    });
                }
                return doc.label || doc.name;
            };
        });
})(angular, TrabajoCampo || (TrabajoCampo = {}));