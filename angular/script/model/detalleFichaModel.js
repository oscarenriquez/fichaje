(function() {
    angular.module("TrabajoCampo").factory("DetalleFicha", function() {
        function DetalleFicha() {
            this.razonSocial = null;
            this.lecturaMedidor = null;
            this.estadoMed = null;
            this.medidorIzquierdo = null;
            this.medidorDerecho = null;
            this.lecMedIzquierdo = null;
            this.lecMedDerecho = null;
            // page 4
            this.nombreEntrevistado = null;
            this.tipoTelefono = null;
            this.telefonoContacto;
            this.email;
            // page 5
            this.usoSuelo = null;
            this.habitantes = null;
            this.trabajadores = null;
            // page 6
            this.subtPrivado = null;
            this.gobierno = null;
            this.fraccionamiento = null;
            this.vivienda = null;
            this.unifamiliar = null; //*
            this.condominioVertical = null; //*
            this.condominioHorizontal = null; //*
            this.tipoVivienda = null; //--
            this.tipoCondominio = null; //--
            this.niveles = null;
            this.comercio = null;
            this.subtComercio = null;
            this.numLocales = null;
            this.subtServicio = null;
            this.subtAlimentos = null;
            this.subtIndustria = null;
            this.subtOtros = null;
            this.observaciones = null;
            // page 7
            this.conexionFraudulenta = null; //*
            this.empagua = null;
            this.mariscal = null;
            this.pipas = null;
            this.frecuencia = null;
            this.cantidadPipas = null;
            this.pozoPropio = null;
            // page 8
            this.cistElevada = null;
            this.cistSubterranea = null;
            this.cantCisternas = null; //*
            this.toneles = null;
            this.cantToneles = null;
            // page 9
            this.sanitarios = null;
            this.lavamanos = null;
            this.lavaplatos = null;
            this.duchas = null;
            this.chorros = null;
            this.lavadora = null;
            this.pila = null;
            this.piscina = null;
            this.mts2Jardin = null;
            this.jardin = null;
            this.alcantarillado = null; //--
            // page alcantarillado 1
            this.estadoMedAlcan = null;
            this.lecturaMedidorAlcant = null;
            // page alcantarillado 2                
            this.empaguaAlcan = null;
            this.mariscalAlcan = null;
            this.candelasVisibles = null;
            this.plantaTratamiento = null;
            this.pozoAbsorcion = null;
            this.cantPozoAbsor = null;
            this.cistElevadaAlcan = null;
            this.cistSubterraneaAlcan = null;
            this.tonelesAlcan = null;
            this.cantTonelesAlcan = null;
            this.observaciones2 = null;

            this.editada = null;
            this.motivoEdicion = null;
        }

        return DetalleFicha;
    });
})();