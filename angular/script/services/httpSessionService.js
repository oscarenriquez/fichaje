(function(angular) {
    angular.module("TrabajoCampo").service('httpSession', function($http) {
        var server = this;
        var TIMEOUT = 300000; //5 minutos
        var options = {
            url: 'Session',
            transformResponse: [function(data) {
                if (data) {
                    return JSON.parse(data);
                }
                return data;
            }],
            timeout: TIMEOUT,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        };
        var successCallback = function(response) {
            return response.data;
        }

        var errorCallback = function(response) {
            return response.data;
        }

        server.post = function(params) {
            var config = angular.extend({}, { method: 'POST', data: $.param(params) }, options);
            var promise = $http(config).then(successCallback, errorCallback);
            return promise;
        };

        server.get = function(params) {
            var config = angular.extend({}, { method: 'GET' }, options);
            var promise = $http(config).then(successCallback, errorCallback);
            return promise;
        };

        server.postPhoto = function(formData) {
            var promise = $http.post('Session', formData, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            }).then(successCallback, errorCallback);

            return promise;
        }
    });
})(angular);