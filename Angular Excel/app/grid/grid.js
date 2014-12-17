(function () {
    'use strict';

    var grid = angular.module('grid', []);

    grid.directive('editGrid', editGrid);

    function editGrid() {
        return {
            restrict: 'EA',
            templateUrl: 'app/grid/edit-grid.html',
            controller: controller,
            replace: true,
            scope: {
                attributes: '='
            }
        };

        function controller($scope) {
            // Attribute types will always be the same (for now)
            // todo: load from service
            $scope.attributeTypes = [
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
        }
    }

    grid.directive('viewGrid', viewGrid);

    function viewGrid() {
        return {
            restrict: 'EA',
            templateUrl: 'app/grid/view-grid.html',
            replace: true,
            scope: {
                attributes: '='
            }
        };
    }
})();