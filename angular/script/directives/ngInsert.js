(function(angular) {
    var ngInsertDirective = ['$templateRequest', '$anchorScroll', '$animate',
        function($templateRequest, $anchorScroll, $animate) {
            return {
                restrict: 'ECA',
                priority: 400,
                terminal: true,
                transclude: 'element',
                controller: angular.noop,
                compile: function(element, attr) {
                    var srcExp = attr.ngInclude || attr.src,
                        onloadExp = attr.onload || '',
                        autoScrollExp = attr.autoscroll;

                    return function(scope, $element, $attr, ctrl, $transclude) {
                        var changeCounter = 0,
                            currentScope,
                            previousElement,
                            currentElement;

                        var cleanupLastInsertContent = function() {
                            if (previousElement) {
                                previousElement.remove();
                                previousElement = null;
                            }
                            if (currentScope) {
                                currentScope.$destroy();
                                currentScope = null;
                            }
                            if (currentElement) {
                                $animate.leave(currentElement).then(function() {
                                    previousElement = null;
                                });
                                previousElement = currentElement;
                                currentElement = null;
                            }
                        };

                        scope.$watch(srcExp, function ngInsertWatchAction(src) {
                            var afterAnimation = function() {
                                if (angular.isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                                    $anchorScroll();
                                }
                            };
                            var thisChangeId = ++changeCounter;

                            if (src) {
                                $templateRequest(src, true).then(function(response) {
                                    if (scope.$$destroyed) return;

                                    if (thisChangeId !== changeCounter) return;

                                    var newScope = scope;
                                    ctrl.template = response;

                                    var clone = $transclude(newScope, function(clone) {
                                        cleanupLastInsertContent();
                                        $animate.enter(clone, null, $element).then(afterAnimation);
                                    });

                                    currentScope = newScope;
                                    currentElement = clone;

                                    currentScope.$emit('$insertContentLoaded', src);
                                    scope.$eval(onloadExp);
                                }, function() {
                                    if (scope.$$destroyed) return;

                                    if (thisChangeId === changeCounter) {
                                        cleanupLastInsertContent();
                                        scope.$emit('$insertContentError', src);
                                    }
                                });
                                scope.$emit('$insertContentRequested', src);
                            } else {
                                cleanupLastInsertContent();
                                ctrl.template = null;
                            }
                        });
                    };
                }
            };
        }
    ];

    var ngInsertFillContentDirective = ['$compile',
        function($compile) {
            return {
                restrict: 'ECA',
                priority: -400,
                require: 'ngInsert',
                link: function(scope, $element, $attr, ctrl) {
                    if (angular.toString.call($element[0]).match(/SVG/)) {
                        $element.empty();
                        $compile(jqLiteBuildFragment(ctrl.template, window.document).childNodes)(scope,
                            function namespaceAdaptedClone(clone) {
                                $element.append(clone);
                            }, { futureParentElement: $element });
                        return;
                    }

                    $element.html(ctrl.template);
                    $compile($element.contents())(scope);
                }
            };
        }
    ];

    angular.module('TrabajoCampo').directive('ngInsert', ngInsertDirective);
    angular.module('TrabajoCampo').directive('ngInsert', ngInsertFillContentDirective);

})(angular);