/**
 * Created by izabela on 24/07/16.
 */
angular.module('tabs').service('BackendService', function($q, $http, Properties){

    //promise which takes data from the backend:
    this.getContent = function(data){
        return $q(function(resolve, reject){
           $http.get(Properties.ENDPOINT_URL, data).then(
               function (response){
                   //success
                   resolve(response);
               }, function(error){
                   //error:
                   reject(error);
               }
           )

        });
    }


});