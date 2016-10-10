(function(angular) {
    angular.module("TrabajoCampo").factory('fichaje', function($http, $timeout) {
        var thisFichaje = {};
        thisFichaje.getAll = function() {
            /*var promise = $http({
                    method: 'POST',
                    url: 'Session',
                    data: $.param({ "key": 119 }),
                    transformResponse: [function(data) {
                        return JSON.parse(data);
                    }],
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })
                .then(
                    function(response) { //Success                        
                        return response.data;
                    },
                    function(response) { //Error
                        return response.data;
                    }
                );
            return promise;*/

            return new Promise(function(resolve, reject) {
                $timeout(function() {
                    var arreglo = [];
                    resolve(arreglo);
                }, 1000);
            });
        };

        // get single record from database
        thisFichaje.getFichaje = function(id) {

            var promise = $http({
                    method: 'POST',
                    url: '/api/PersonalDetails/' + id
                })
                .then(function(response) {
                        return response.data;
                    },
                    function(response) {
                        return response.data;
                    });
            return promise;
        };


        // post the data from database
        thisFichaje.insert = function(firstName, lastName, age, active) {
            var personalDetail = {
                FirstName: firstName,
                LastName: lastName,
                Age: age,
                Active: active,
            };

            var promise = $http({
                    method: 'POST',
                    url: '/api/PersonalDetails',
                    data: personalDetail
                })
                .then(function(response) {
                        return response.statusText;
                    },
                    function(response) {
                        return response.statusText;
                    });

            return promise;
        };

        // put the data from database
        thisFichaje.update = function(autoId, firstName, lastName, age, active) {
            var personalDetail = {
                AutoId: autoId,
                FirstName: firstName,
                LastName: lastName,
                Age: age,
                Active: active,
            };

            var promise = $http({
                    method: 'POST',
                    url: '/api/PersonalDetails/' + autoId,
                    data: personalDetail
                })
                .then(function(response) {
                        return "Updated";
                        // return response.statusText + ' ' + response.status + ' ' + response.data;
                    },
                    function(response) {
                        return response.statusText + ' ' + response.status + ' ' + response.data;
                    });

            return promise;
        };

        // delete the data from database
        thisFichaje.remove = function(autoId) {
            var promise = $http({
                    method: 'POST',
                    url: '/api/PersonalDetails/' + autoId
                })
                .then(function(response) {
                        // return "Deleted";
                        return response.statusText + ' ' + response.status + ' ' + response.data;
                    },
                    function(response) {
                        return response.statusText + ' ' + response.status + ' ' + response.data;
                    });

            return promise;
        };

        return thisFichaje;
    });
})(angular);