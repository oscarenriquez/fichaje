(function(angular) {
    angular.module("TrabajoCampo").factory('combos', function(httpSession) {
        var combos = {};

        combos.tipoContacto = function() {
            var params = { key: 122 };
            return httpSession.post(params);
        };

        combos.estadosMedidor = function() {
            var params = { key: 123 };
            return httpSession.post(params);
        };

        combos.cantidades = function() {
            var params = { key: 124 };
            return httpSession.post(params);
        };

        combos.otros = function() {
            var params = { key: 126, tipoUso: 5 };
            return httpSession.post(params);
        };

        combos.industria = function() {
            var params = { key: 126, tipoUso: 3 };
            return httpSession.post(params);
        };

        combos.alimentos = function() {
            var params = { key: 126, tipoUso: 2 };
            return httpSession.post(params);
        };

        combos.servicios = function() {
            var params = { key: 126, tipoUso: 4 };
            return httpSession.post(params);
        };

        combos.locales = function() {
            var params = { key: 126, tipoUso: 1 };
            return httpSession.post(params);
        };

        combos.tipoSuelo = function() {
            var params = { key: 126, tipoUso: 6 };
            return httpSession.post(params);
        };

        combos.motivosTrabajo = function() {
            var params = { key: 136, tipo: "P" };
            return httpSession.post(params);
        };

        combos.cierreFicha = function() {
            var params = { key: 136, tipo: "F" };
            return httpSession.post(params);
        };

        combos.trabajos = function() {
            var params = { key: 102, clasifi: "C" };
            return httpSession.post(params);
        };

        combos.frecuencia = function() {
            var comboBox = new Array();
            comboBox.push({ ID: "DIARIO", DESCRIPCION: "DIARIO" });
            comboBox.push({ ID: "SEMANAL", DESCRIPCION: "SEMANAL" });
            comboBox.push({ ID: "QUINCENAL", DESCRIPCION: "QUINCENAL" });
            comboBox.push({ ID: "MENSUAL", DESCRIPCION: "MENSUAL" });
            return comboBox;
        }

        return combos;
    });
})(angular);