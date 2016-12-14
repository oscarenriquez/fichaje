(function(angular) {
    angular.module("TrabajoCampo").factory('fichaje', function(httpSession, $timeout) {
        var thisFichaje = {};

        // return list of fichaje
        thisFichaje.getAll = function() {
            return httpSession.post({ "key": 119 });
        };

        // return basic info of fichaje
        thisFichaje.getInfoFichaje = function(id) {
            return httpSession.post({ "key": 127, "fichaId": id });
        };

        // return all info of fichaje *Informacion Detalle Fichaje
        thisFichaje.getInfoDetalleFichaje = function(id) {
            return httpSession.post({ "key": 131, "fichaId": id });
        };

        // post new the data from database *Crear Detalle
        thisFichaje.insert = function(detalle, tipo) {
            if (tipo === 'R') {
                detalle.key = 133;
            } else {
                detalle.key = 118;
            }
            return httpSession.post(detalle);
        };

        // Update new the data from database *Actualizar Detalle
        thisFichaje.update = function(detalle) {
            detalle.key = 132;
            return httpSession.post(detalle);
        };

        // POST clean bean photos 
        thisFichaje.cleanPhotos = function() {
            return httpSession.post({ "key": 197 });
        };

        // POST verifica medidor 
        thisFichaje.verificaMedidor = function(medidor) {
            return httpSession.post({ "key": 44, "medidor": medidor });
        };

        // POST photo 
        thisFichaje.uploadPhoto = function(formData) {
            formData.append("key", 195);
            return httpSession.postPhoto(formData);
        };

        // POST photo 
        thisFichaje.uploadPhotoAndSave = function(formData) {
            formData.append("key", 202);
            return httpSession.postPhoto(formData);
        };

        return thisFichaje;
    });
})(angular);