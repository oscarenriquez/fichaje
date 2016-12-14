(function() {

    TrabajoCampo.FichajeCtrl = function($scope, $timeout, $state, $stateParams, $log, $mdToast, $mdDialog, fichaje, combos, flowFichaje, flowAlcantarillado, flowRuteo, noty) {
        /**
         * Declared fields
         */
        var ficha = this;
        ficha.continua = true; // Bandera de los formularios

        // Variables para la carga de fotos
        ficha.fotos = {}; //JSON object para las fotos
        ficha.loadFotos = [];
        ficha.confirmaFotos = false;
        ficha.confirmaFotosAlcan = false;
        ficha.loadingFotos = false;
        ficha.loadingFotosAlcan = false;

        ficha.currentFotosIndex = 0; // Foto actualmente cargando
        ficha.totalFotos = 0; //Total de fotos seleccionadas 
        ficha.progressFotos = 0;

        ficha.model = {}; //JSON object for fields
        ficha.combos = {};
        ficha.toUpdate = $stateParams.toUpdate;
        ficha.alcantarilladoAnterior = false;
        ficha.textobutton = "Guardar";
        ficha.medidorCorrecto = false;
        ficha.tipo = $stateParams.tipo;

        ficha.flow = flowFichaje;
        if (ficha.tipo == 'A') {
            ficha.flow = flowAlcantarillado;
        } else if (ficha.tipo == 'R') {
            ficha.flow = flowRuteo;
        }

        ficha.flow.reset();

        $scope.$watch("ficha.model.medidor", function(value) {
            ficha.medidorCorrecto = false;
            ficha.model.nombre = "";
            ficha.model.direccion = "";
        });

        /**
         * Declared Methods
         */
        ficha.filterCombo = function(item) {
            return Number(item.ID) > 0;
        };

        ficha.validaMedidor = function() {
            if (ficha.model.medidor) {
                $scope.$parent.main.loading = true;
                fichaje.verificaMedidor(ficha.model.medidor).then(function(data) {
                    $scope.$parent.main.loading = false;
                    if (data) {
                        if (data.permiso) {
                            if (data.isSuccess) {
                                ficha.medidorCorrecto = true;
                                ficha.model.nombre = data.aData.clienteSeg;
                                ficha.model.direccion = data.aData.direInSeg;
                            } else {
                                ficha.medidorCorrecto = false;
                                ficha.model.nombre = "";
                                ficha.model.direccion = "";
                                noty.showSimpleToast("¡Medidor no encontrado!", noty.ERROR);
                            }
                        } else {
                            noty.showSimpleToast(data.msg, noty.WARNING);
                        }
                    }
                });
            }
        }

        $scope.$watch("ficha.currentFotosIndex", function(value) {
            if (ficha.totalFotos > 0 && value) {
                ficha.progressFotos = (100 / ficha.totalFotos) * value;
            }
        });

        function uploadPhoto(index, length, tipo) {
            ficha.currentFotosIndex = index;
            var file = ficha.loadFotos[index];
            var formData = new FormData();
            formData.append("photo", file.lfFile);
            formData.append("tipo", tipo);
            formData.append("keyFicha", ficha.model.keyFicha);
            fichaje.uploadPhoto(formData).then(function(data) {
                try {
                    index++;
                    callBackUploadPhoto(data, index);
                    $log.debug("Fotografia " + index + " cargada");
                    if (index < length) {
                        uploadPhoto(index, length, tipo);
                    } else {
                        ficha.textobutton = "Guardar";
                        if (tipo === 'F') {
                            ficha.loadingFotos = false;
                        } else {
                            ficha.loadingFotosAlcan = false;
                        }
                    }
                } catch (e) {
                    noty.showSimpleToast(e.message, noty.ERROR);
                    ficha.textobutton = "Guardar sin Fotografias";
                    if (tipo === 'F') {
                        ficha.apiFile.removeAll();
                        ficha.confirmaFotos = false;
                    } else {
                        ficha.apiFileAlcan.removeAll();
                        ficha.confirmaFotosAlcan = false;
                    }
                }
            });
        }

        ficha.cargarImagen = function(ev, tipo) {
            if (!ficha.loadingFotos && !ficha.loadingFotosAlcan) {
                var confirm = $mdDialog.confirm();
                confirm.title('¿Esta seguro de confirmar estas fotografias?, ya no podrá modificarlas.')
                    .ariaLabel('Cargando Fotografias')
                    .targetEvent(ev)
                    .ok('Aceptar')
                    .cancel('Cancelar');

                $mdDialog.show(confirm).then(function() {
                    var length = 0;
                    var index = 0;
                    ficha.textobutton = "Enviando fotografias";
                    if (tipo === 'F') {
                        ficha.loadFotos = ficha.fotos.datos.slice();
                        ficha.loadingFotos = true;
                        ficha.confirmaFotos = true;
                        length = ficha.fotos.datos.length;
                    } else {
                        ficha.loadFotos = ficha.fotos.alcan.slice();
                        ficha.loadingFotosAlcan = true;
                        ficha.confirmaFotosAlcan = true;
                        length = ficha.fotos.alcan.length;
                    }
                    ficha.totalFotos = length;
                    uploadPhoto(index, length, tipo);
                });
            } else {
                noty.showSimpleToast("Espera un momento, aún estamos cargando las fotografias anteriores.", noty.WARNING);
            }
        }

        ficha.prev = function() {
            if (!ficha.flow.isFirst) {
                ficha.flow.prev(ficha.model.alcantarillado);
                $timeout(function() {
                    $state.go(ficha.flow.prevStep);
                }, 200);
            }
        };

        ficha.next = function() {
            if (!ficha.flow.isLast) {
                if (ficha.continua) {
                    ficha.flow.next(ficha.model.alcantarillado);
                    $timeout(function() {
                        $state.go(ficha.flow.nextStep);
                    }, 200);
                } else {
                    noty.showSimpleToast("¡Complete todos los campos!", noty.WARNING);
                }
            }
        };

        ficha.modifica = function(ev) {
            var confirm = $mdDialog.confirm();
            if (ficha.toUpdate) {
                confirm.title('¿Esta seguro de actualizar la ficha?')
                    .ariaLabel('Actualizando Fichaje')
                    .targetEvent(ev)
                    .ok('Aceptar')
                    .cancel('Cancelar');
            } else {
                confirm.title('¿Esta seguro de guardar la ficha?')
                    .ariaLabel('Guardando Fichaje')
                    .targetEvent(ev)
                    .ok('Aceptar')
                    .cancel('Cancelar');
            }

            $mdDialog.show(confirm).then(function() {

                if (!ficha.model.habitantes) ficha.model.habitantes = 0;
                if (!ficha.model.trabajadores) ficha.model.trabajadores = 0;

                //Vivienda                
                ficha.model.unifamiliar = ficha.model.tipoVivienda == 'unifamiliar';
                //Condominio                
                ficha.model.condominioVertical = ficha.model.tipoCondominio == 'vertical';
                ficha.model.condominioHorizontal = ficha.model.tipoCondominio == 'horizontal';

                //alcantarillado
                ficha.model.alcantarilladoAnterior = (ficha.model.alcantarillado != ficha.alcantarilladoAnterior);
                $scope.$parent.main.loading = true; // start loading
                if (ficha.toUpdate) {
                    fichaje.update(ficha.model).then(function(data) {
                        callBackFichaje(data, noty);
                        $scope.$parent.main.loading = false; // end loading
                    });
                } else {
                    fichaje.insert(ficha.model, ficha.tipo).then(function(data) {
                        callBackFichaje(data, noty);
                        $scope.$parent.main.loading = false; // end loading
                    });
                }
            }, function() {
                $log.debug("reject");
            });
        };

        /**
         * Load information
         */
        $state.transitionTo(ficha.flow.initStep, $stateParams);
        if ($stateParams.fichaId && ficha.toUpdate) {
            ficha.model.keyFicha = $stateParams.fichaId;
            $scope.$parent.main.loading = true;
            $.when(fichaje.getInfoDetalleFichaje($stateParams.fichaId)).then(function(data) {
                $timeout(function() {
                    $scope.$parent.main.loading = false;
                    ficha.model = angular.extend({}, ficha.model, data.aData);
                    ficha.alcantarilladoAnterior = ficha.model.alcantarillado;
                }, 500);
            });
        } else if ($stateParams.fichaId) {
            ficha.model.keyFicha = $stateParams.fichaId;
            $scope.$parent.main.loading = true;
            $.when(fichaje.getInfoFichaje($stateParams.fichaId), fichaje.cleanPhotos()).then(function(data) {
                ficha.model.medidor = data.aData.medidor;
                $timeout(function() {
                    $scope.$parent.main.loading = false;
                    ficha.model.motivoLectura = data.aData.motivo;
                    ficha.model.observacionesLectura = data.aData.observaciones;
                    ficha.model.nombre = data.aData.nombre;
                    ficha.model.direccion = data.aData.direccion;
                    ficha.model.ctasAlcantarillado = data.aData.alcantarillado;

                    if (data.aData.idDenuncia) {
                        ficha.model.idDenuncia = data.aData.idDenuncia;
                        ficha.model.medDenuncia = data.aData.medDen;
                        ficha.model.direDenuncia = data.aData.dirDen;
                        ficha.model.zonaDenuncia = data.aData.zonaD;
                        ficha.model.observacionesDenuncia = data.aData.denuncia;
                        $("#content-denuncia").show();
                    }
                }, 500)
            });
        }

        // LLenado de Combos
        combos.tipoContacto().then(function(tipoContacto) {
            ficha.combos.tipoContacto = tipoContacto.formulario.comboBox;
            ficha.model.tipoTelefono = '0';
        });
        combos.estadosMedidor().then(function(estadosMedidor) {
            ficha.combos.estadosMedidor = estadosMedidor.formulario.comboBox;
        });
        combos.cantidades().then(function(cantidades) {
            ficha.combos.cantidades = cantidades.formulario.comboBox;
        });
        combos.otros().then(function(otros) {
            ficha.combos.otros = otros.formulario.comboBox;
        });
        combos.industria().then(function(industria) {
            ficha.combos.industria = industria.formulario.comboBox;
        });
        combos.alimentos().then(function(alimentos) {
            ficha.combos.alimentos = alimentos.formulario.comboBox;
        });
        combos.servicios().then(function(servicios) {
            ficha.combos.servicios = servicios.formulario.comboBox;
        });
        combos.locales().then(function(locales) {
            ficha.combos.locales = locales.formulario.comboBox;
        });
        combos.tipoSuelo().then(function(tipoSuelo) {
            ficha.combos.tipoSuelo = tipoSuelo.formulario.comboBox;
        });
        combos.motivosTrabajo().then(function(motivosTrabajo) {
            ficha.combos.motivosTrabajo = motivosTrabajo.formulario.comboBox;
        });
        combos.cierreFicha().then(function(cierreFicha) {
            ficha.combos.cierreFicha = cierreFicha.formulario.comboBox;
        });
        combos.trabajos().then(function(trabajos) {
            ficha.combos.trabajos = trabajos.formulario.comboBox;
        });

        ficha.combos.frecuencia = combos.frecuencia();

        var callBackFichaje = function(data) {
            if (data) {
                if (data.permiso) {
                    if (data.isSuccess) {
                        noty.showSimpleToast(data.msg, noty.SUCCESS);
                        $state.go("home");
                    } else {
                        noty.showSimpleToast(data.msg, noty.ERROR);
                    }
                } else {
                    noty.showSimpleToast(data.msg, noty.WARNING);
                }
            }
        };

        var callBackUploadPhoto = function(data, index) {
            if (data) {
                if (data.permiso) {
                    if (!data.isSuccess) {
                        throw new Error(data.msg);
                    }
                } else {
                    throw new Error(data.msg);
                }
            } else {
                throw new Error("¡No fue posible cargar la fotografica!, Notifique a Soporte ó Intenge más tarde.");
            }
        };
    };

    angular.module("TrabajoCampo").controller("FichajeCtrl", TrabajoCampo.FichajeCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));