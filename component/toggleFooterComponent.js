(function () {
    'use strict';

    angular.module('toggleFooter', [])
        .constant('toggleFooterEvent', {
            CHANGE_STATE: 'toggleFooterEvents'
        })
        .factory('toggleFooterFactory', function () {
            return {
                state: false,
                setState: function (value) {
                    this.state = value;
                },
                getState: function () {
                    return this.state;
                }
            }
        })
        .component('toggleFooter', {
            template: '<div class="toggle-footer-component" ng-class="{\'toggle-footer-component-hide\':$ctrl.hideFooter}">' +
            '<div class="toggle-footer-component-tab" ng-click="$ctrl.toggle()">' +
            '<div class="tab-title">{{$ctrl.title}}</div>' +
            '<div class="tab-close">' +
            '<svg x="0px" y="0px" width="9px" height="7px" viewBox="0 0 9 7"><g><path d="M4.5,6L9,1.1L7.9,0L4.5,3.7L1.1,0L0,1.1L4.5,6z"/></g></svg>' +
            '</div>' +
            '</div>' +
            '<div class="toggle-footer-component-container">' +
            '<ng-transclude></ng-transclude>' +
            '</div>' +
            '</div>',
            controller: ['$scope', '$rootScope', '$timeout', 'toggleFooterEvent', 'toggleFooterFactory', function ($scope, $rootScope, $timeout, toggleFooterEvent, toggleFooterFactory) {
                var self = this;
                this.hideFooter = false;
                this.emit = function (value, trigger) {
                    $rootScope.$emit(toggleFooterEvent.CHANGE_STATE, {isClose: value, trigger: trigger});
                };

                this.toggle = function () {
                    this.hideFooter = !this.hideFooter;
                    this.emit(this.hideFooter, 'component');
                };


                $scope.$watch(function () {
                    return toggleFooterFactory.state
                }, function (val) {
                    self.hideFooter = val;
                    self.emit(val, 'user');

                }, true)
            }],
            bindings: {
                title: '@'
            },
            transclude: true
        })
})();
