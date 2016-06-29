
(function () {
    'use strict';

    angular.module('fs-angular-file',['ngFileUpload'])
    .directive('fsFile', function($location, $compile) {
        return {
            restrict: 'A',
            scope: {
               file: "=fsFile"
            },

           compile: function(element, tAttrs) {

                return {

                    post: function($scope, element, attrs, form) {

                        var el = angular.element(element);
                        var fsInput = angular.element('<div class="fs-file-input" ngf-select="select($file)"></div>')
                                        .append('<span>{{file.name}}</span>')
                                        .append('<md-icon ng-show="!file">file_upload</md-icon>')
                                        .append('<md-icon ng-show="file" ng-click="clear($event)">clear</md-icon>');

                        el.append(fsInput).append('<div class="md-errors-spacer"></div>');

                        $compile(el.contents())($scope);
                        
                        $scope.$watch('file',function(file) {

                            if(file && file.name) {
                                el.addClass('md-input-has-value');
                            } else {
                                el.removeClass('md-input-has-value');
                            }
                        });

                        $scope.select = function(file) {

                            if(file) {
                                $scope.file = file;
                            }
                        }

                        $scope.clear = function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            $scope.file = null;
                        }
                        
                    }
                }
            }
        };
    });
})();

