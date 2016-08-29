(function () {
    'use strict';

    angular.module('test-toggle-footer-component', ['toggleFooter'])
        .controller('commonCtrl', function ($rootScope, toggleFooterEvent, toggleFooterFactory) {
            var self = this;
            this.title = 'Test toggle footer component';

            this.close = function () {
                toggleFooterFactory.setState(true);
            };

            this.open = function () {
                toggleFooterFactory.setState(false);
            };
            this.getState = function () {
                this.log2 = toggleFooterFactory.getState();
            };

            $rootScope.$on(toggleFooterEvent.CHANGE_STATE, function (event, log) {
                self.log = log;
            })
        })
})();