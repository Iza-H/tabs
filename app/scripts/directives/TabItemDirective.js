/**
 * Created by izabela on 24/07/16.
 */

angular.module('tabs').directive('tab', function(){
    return{
        restrict : 'E',
        transclude: true,
        replace: true,
        require: '^tabs',
        scope : {
            label: '@'
        },
        link: function(scope, element, attrs, controller) {
            controller.addItem(scope);
        },
        template: '<div class="tab-content" ng-class="{active: selected}" ng-transclude></div>'


    };
});