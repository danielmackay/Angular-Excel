(function () {
    'use strict';

    var app = angular.module('app', ['grid']);

    app.controller('appCtrl', appCtrl);

    function appCtrl() {
        var self = this;

        self.showView = true;
        self.showEdit = false;

        self.attributes = [
            {
                id: 1,
                value: 1
            },
            {
                id: 2,
                value: 2
            }
        ];

        self.addAttribute = function () {
            self.attributes.push({});
        }

        self.save = function () {
            toggleState();
        }

        self.edit = function () {
            toggleState();
        }

        function toggleState() {
            self.showView = !self.showView;
            self.showEdit = !self.showEdit;
        }
    }    
})();