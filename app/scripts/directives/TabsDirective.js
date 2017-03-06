/**
 * Created by izabela on 24/07/16.
 */
angular.module('tabs').directive('tabs', ['BackendService', function(BackendService){
    return{
        restrict : 'E',
        transclude: true,
        replace: true,
        scope : {
            sectionclass: '@',  //to create adequate class for section
            sendResponse: '&',  //to send data received from the backend to MainController
            parent:"@"          //to have a label of the parent tab
        },
        controller: [ "$scope", function($scope) {
            $scope.tabs = [];

            $scope.selectItem = function(item){
                angular.forEach($scope.tabs, function(item){
                    item.selected = false;
                });
                item.selected = true;

                if($scope.parent!==undefined){
                    var data = {};
                    data.top = $scope.parent;
                    data.left = item.label;
                    BackendService.getContent(data).then(function(content){
                        //success:
                        //send data - request and response parameters to the MainController
                        var response= {};
                        response.data=data;
                        response.content=content;
                        $scope.sendResponse({response:response});

                    }, function(err){
                        //error
                        console.log(err);
                    })
                }
            };

            //add item to the tab:
            this.addItem = function(item) {
                if ($scope.tabs.length == 0){
                    $scope.selectItem(item);
                }
                $scope.tabs.push(item);
            }



        }],
        template:
        '<div>'+
        '<section class="{{sectionclass}}">' +
        '<ul>' +
        '<li ng-repeat="tab in tabs" ng-class="{active: tab.selected}">'+
        '<a href="" ng-click="selectItem(tab)">{{tab.label}}</a>' +
        '</li>' +
        '</ul>' +
        '</section>' +
        '<div ng-transclude></div>' +
        '</div>' +
        '</div>'


    };
}]);