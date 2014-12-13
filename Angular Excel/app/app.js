(function () {
    'use strict';

    var app = angular.module('app', []);

    app.controller('appCtrl', appCtrl);

    function appCtrl() {
        var self = this;

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

        self.attributeTypes = [
            {
                name: 'red',
                id: 1
            },
            {
                name: 'blue',
                id: 2
            },
            {
                name: 'green',
                id: 3
            }
        ];

        self.addAttribute = function() {
            self.attributes.push({});
        }

        self.save = function() {
            alert('saved');
        }
    }
})();