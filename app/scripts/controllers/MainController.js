/**
 * Created by izabela on 24/07/16.
 */
angular.module('tabs').controller('MainCtrl',['$scope', function MainController($scope) {

    $scope.initialdata = [
        {
            top:'Eva',
            left:['write mail to Eva' , 'get contact details', 'visit profil']
        },
        {
            top:'Bob',
            left:['write mail to Bob']

        },
        {
            top:'Gui',
            left:['write mail to Gui' , 'visit profile', 'ask for help']
        }


    ];

    $scope.serverResponse={};
    $scope.setResponse = function(response){
        if (response.data.top!==undefined && response.content.data){
            $scope.serverResponse[response.data.top]=response.content.data;
        }
    }
    $scope.getServerResponse = function(top){
        if(top!==undefined && $scope.serverResponse[top]!==undefined){
            return $scope.serverResponse[top].content;
        }
    }




}]);
