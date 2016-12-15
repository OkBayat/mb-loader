(function () {
    'use strict';
    angular.module('mbLoaderApp', [])
        .directive('mbLoader', mbLoader);

    mbLoader.$inject = ['$compile'];
    function mbLoader($compile) {
        const directive = {
            restric: "EA",
            scope: {
                mbType: "@",
                mbCount: "@",
                mbSize: "@"
            },
            link: link
        }
        return directive;

        function link(scope, element) {
            const elm = angular.element(`<div class="mb-loader mb-{{::mbType}}"></div>`);
            let divs = `<div  ng-style="{'width': mbSize + 'px', 'height': mbSize + 'px'}">`;
            for (let i = 0; i < +scope.mbCount-1; i++) {
                divs += "<div>";
            }
            for (let i = 0; i < +scope.mbCount-1; i++) {
                divs += "</div>";
            }
            divs += `</div>`;
            elm.append(divs);
            $compile(elm)(scope);
            angular.element(element).append(elm);
        }
    }
})();
