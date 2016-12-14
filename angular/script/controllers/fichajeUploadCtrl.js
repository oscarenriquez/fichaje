(function() {

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    var defaults = {
        maxWidth: Number.MAX_VALUE,
        maxHeigt: Number.MAX_VALUE
    };

    var settings = $.extend({}, defaults, { maxWidth: 512 });

    function handleFileSelect(file, onImageResized) {

        var picReader = new FileReader();
        picReader.addEventListener("load", function(event) {
            var picFile = event.target;
            var imageData = picFile.result;
            var img = new Image();
            img.src = imageData;
            img.onload = function() {
                if (img.width > settings.maxWidth || img.height > settings.maxHeigt) {
                    var width = settings.maxWidth;
                    var height = settings.maxHeigt;

                    if (img.width > settings.maxWidth) {
                        width = settings.maxWidth;
                        var ration = settings.maxWidth / img.width;
                        height = Math.round(img.height * ration);
                    }

                    if (height > settings.maxHeigt) {
                        height = settings.maxHeigt;
                        var ration = settings.maxHeigt / img.height;
                        width = Math.round(img.width * ration);
                    }

                    var canvas = $("<canvas/>").get(0);
                    canvas.width = width;
                    canvas.height = height;
                    var context = canvas.getContext('2d');
                    context.drawImage(img, 0, 0, width, height);
                    imageData = canvas.toDataURL("image/jpeg", 0.1);

                    if (onImageResized != null && typeof(onImageResized) == "function") {
                        var file_resize = dataURLtoFile(imageData, file.name);
                        onImageResized(file_resize);
                    }
                }

            }
            img.onerror = function() {

            }
        });
        //Read the image
        picReader.readAsDataURL(file);
    }

    TrabajoCampo.FichajeUploadCtrl = function($scope, $log, $state, $stateParams, $timeout, $mdDialog, noty, fichaje) {
        var upload = this;
        var parent = $scope.$parent;
        // Variables para la carga de fotos
        upload.model = {}; //JSON object for fields
        upload.fotos = {}; //JSON object para las fotos
        upload.loadFotos = [];
        upload.loadingFotos = false;
        upload.currentFotosIndex = 0; // Foto actualmente cargando
        upload.totalFotos = 0; //Total de fotos seleccionadas 
        upload.progressFotos = 0;

        upload.alcantarillado = false;
        upload.dbFotosFicha = [];
        upload.dbFotosAlcan = [];

        upload.model.keyFicha = $stateParams.fichaId;

        $scope.$watch("upload.currentFotosIndex", function(value) {
            if (upload.totalFotos > 0 && value) {
                upload.progressFotos = (100 / upload.totalFotos) * value;
            }
        });

        function uploadPhoto(index, length) {
            upload.currentFotosIndex = index;
            var item = upload.loadFotos[index];
            var file = item.file;
            var tipo = item.tipo;
            var formData = new FormData();
            handleFileSelect(file.lfFile, function(imageData) {

                formData.append("photo", imageData);
                formData.append("tipo", tipo);
                formData.append("keyFicha", upload.model.keyFicha);
                fichaje.uploadPhotoAndSave(formData).then(function(data) {
                    try {
                        index++;
                        callBackUploadPhoto(data, index);
                        $log.debug("Fotografia " + index + " cargada");
                        if (index < length) {
                            uploadPhoto(index, length);
                        } else {
                            upload.loadingFotos = false;
                            parent.main.loadingFotos = false;
                            if (upload.apiFile) {
                                upload.apiFile.removeAll();
                            }
                            if (upload.apiFileAlcan) {
                                upload.apiFileAlcan.removeAll();
                            }
                            noty.showSimpleToast("Fotos Cargadas", noty.SUCCESS);
                            if ($state.current.name === "upload") {
                                $state.go("home");
                            }
                        }
                    } catch (e) {
                        upload.loadingFotos = false;
                        parent.main.loadingFotos = false;
                        noty.showSimpleToast(e.message, noty.ERROR);
                        if (upload.apiFile) {
                            upload.apiFile.removeAll();
                        }
                        if (upload.apiFileAlcan) {
                            upload.apiFileAlcan.removeAll();
                        }
                    }
                });

            });
        }

        upload.cargarImagen = function(ev) {
            if (!upload.loadingFotos) {
                var confirm = $mdDialog.confirm();
                confirm.title('¿Esta seguro de confirmar estas fotografias?, ya no podrá modificarlas.')
                    .ariaLabel('Cargando Fotografias')
                    .targetEvent(ev)
                    .ok('Aceptar')
                    .cancel('Cancelar');

                $mdDialog.show(confirm).then(function() {
                    var length = 0;
                    var index = 0;
                    upload.loadingFotos = true;
                    parent.main.loadingFotos = true;
                    upload.loadFotos = new Array();
                    angular.forEach(upload.fotos.ficha, function(val) {
                        upload.loadFotos.push({ file: val, tipo: 'F' });
                    }); // Fotos Fichaje

                    angular.forEach(upload.fotos.alcan, function(val) {
                        upload.loadFotos.push({ file: val, tipo: 'A' });
                    }); // Fotos Alcantarillado

                    length = upload.loadFotos.length;
                    upload.totalFotos = length;
                    uploadPhoto(index, length);
                });
            } else {
                noty.showSimpleToast("Espera un momento, aún estamos cargando las fotografias anteriores.", noty.WARNING);
            }
        };

        // Load Information
        $scope.$parent.main.loading = true;
        $.when(fichaje.getInfoDetalleFichaje($stateParams.fichaId)).then(function(data) {
            $timeout(function() {
                $scope.$parent.main.loading = false;
                var arrayOne = new Array();
                var arrayTwo = new Array();
                upload.alcantarillado = data.aData.alcantarillado;
                upload.dbFotosFicha = new Array();
                upload.dbFotosAlcan = new Array();
                if (data.aData.dbFotosFicha && data.aData.dbFotosFicha.length > 0) {
                    arrayOne = data.aData.dbFotosFicha.slice();
                }

                if (data.aData.dbFotosAlcan && data.aData.dbFotosAlcan.length > 0) {
                    arrayTwo = data.aData.dbFotosAlcan.slice();
                }

                var maxItemsByArray = 4,
                    j = 0,
                    k = 0,
                    subArrayF = new Array(),
                    subArrayA = new Array();

                for (var i = 0; i < arrayOne.length; i++) {
                    subArrayF.push(arrayOne[i]);
                    j++;
                    if (j === maxItemsByArray) {
                        j = 0;
                        upload.dbFotosFicha.push(subArrayF);
                        subArrayF = new Array();
                    }
                }
                if (j > 0) {
                    upload.dbFotosFicha.push(subArrayF);
                }

                for (var i = 0; i < arrayTwo.length; i++) {
                    subArrayA.push(arrayTwo[i]);
                    k++;
                    if (k === maxItemsByArray) {
                        k = 0;
                        upload.dbFotosAlcan.push(subArrayA);
                        subArrayA = new Array();
                    }
                }
                if (k > 0) {
                    upload.dbFotosAlcan.push(subArrayA);
                }
            }, 500);
        });

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

    angular.module("TrabajoCampo").controller("FichajeUploadCtrl", TrabajoCampo.FichajeUploadCtrl);
})(angular, TrabajoCampo || (TrabajoCampo = {}));