var TrabajoCampo;
(function() {
    TrabajoCampo = angular.module("TrabajoCampo", ['ngAnimate', 'ngMaterial', 'lfNgMdFileInput', 'ui.router', 'anim-in-out', 'ngMessages'])
        .run(function($templateCache) {
            var template1 = " <div class='scrollable-nav-content top-clear bottom-space {{ficha.flow.currentAnimate}}'> "
            template1 = template1 + "                 <div layout-padding>  "
            template1 = template1 + "                    <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'>  "
            template1 = template1 + "                        <span class='md-subhead'>Información de Asignación de Trabajo</span>  "
            template1 = template1 + "                    </md-toolbar>  "
            template1 = template1 + "                    <md-content class='md-whiteframe-1dp' md-theme='readonly-theme'>  "
            template1 = template1 + "                        <form name='step1.formFicha'>  "
            template1 = template1 + "                            <md-input-container class='md-block'>  "
            template1 = template1 + "                                <label class='md-no-float'>Motivo de Trabajo</label>  "
            template1 = template1 + "                                <input name='motivoLectura' ng-model='ficha.model.motivoLectura' readonly>  "
            template1 = template1 + "                            </md-input-container>  "
            template1 = template1 + "                            <md-input-container class='md-block'>  "
            template1 = template1 + "                                <label class='md-no-float'>Observaciones</label>  "
            template1 = template1 + "                                <textarea name='observacionesLectura' ng-model='ficha.model.observacionesLectura' rows='3' readonly></textarea>  "
            template1 = template1 + "                            </md-input-container>  "
            template1 = template1 + "                        </form>  "
            template1 = template1 + "                    </md-content>  "
            template1 = template1 + "                    <div id='content-denuncia' ng-show='ficha.model.idDenuncia'>  "
            template1 = template1 + "                        <md-divider md-inset></md-divider>  "
            template1 = template1 + "                        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'>  "
            template1 = template1 + "                            <span class='md-subhead'>Denuncia</span>  "
            template1 = template1 + "                        </md-toolbar>  "
            template1 = template1 + "                        <md-content class='md-whiteframe-1dp' md-theme='readonly-theme'>  "
            template1 = template1 + "                            <form name='step1.formFicha2'>  "
            template1 = template1 + "                                <md-input-container class='md-block'>  "
            template1 = template1 + "                                    <label class='md-no-float'>Medidor</label>  "
            template1 = template1 + "                                    <input name='medDenuncia' ng-model='ficha.model.medDenuncia' readonly>  "
            template1 = template1 + "                                </md-input-container>  "
            template1 = template1 + "                                <md-input-container class='md-block'>  "
            template1 = template1 + "                                    <label class='md-no-float'>Direcci&oacute;n</label>  "
            template1 = template1 + "                                    <input name='direDenuncia' ng-model='ficha.model.direDenuncia' readonly>  "
            template1 = template1 + "                                </md-input-container>  "
            template1 = template1 + "                                <md-input-container class='md-block'>  "
            template1 = template1 + "                                    <label class='md-no-float'>Zona</label>  "
            template1 = template1 + "                                    <input name='zonaDenuncia' ng-model='ficha.model.zonaDenuncia' readonly>  "
            template1 = template1 + "                                </md-input-container>  "
            template1 = template1 + "                                <md-input-container class='md-block'>  "
            template1 = template1 + "                                    <label class='md-no-float'>Observaciones</label>  "
            template1 = template1 + "                                    <textarea name='observacionesDenuncia' ng-model='ficha.model.observacionesDenuncia' rows='3' readonly></textarea>  "
            template1 = template1 + "                                </md-input-container>  "
            template1 = template1 + "                            </form>  "
            template1 = template1 + "                        </md-content>  "
            template1 = template1 + "                    </div>  "
            template1 = template1 + "                </div>  "
            template1 = template1 + "         </div> ";

            var template2 = " <div layout-padding class='scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}'>  "
            template2 = template2 + "    <div layout-padding>  "
            template2 = template2 + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'>  "
            template2 = template2 + "            <span class='md-subhead'>Datos del Medidor</span>  "
            template2 = template2 + "        </md-toolbar>  "
            template2 = template2 + "        <md-content class='md-whiteframe-1dp' md-theme='readonly-theme'>  "
            template2 = template2 + "            <form name='step2.formFicha'>  "
            template2 = template2 + "                <md-input-container class='md-block'>  "
            template2 = template2 + "                    <label class='md-no-float'>Nombre</label>  "
            template2 = template2 + "                    <input name='nombre' ng-model='ficha.model.nombre' readonly>  "
            template2 = template2 + "                </md-input-container>  "
            template2 = template2 + "                <md-input-container class='md-block'>  "
            template2 = template2 + "                    <label class='md-no-float'>Direcci&oacute;n</label>  "
            template2 = template2 + "                    <input name='direccion' ng-model='ficha.model.direccion' readonly>  "
            template2 = template2 + "                </md-input-container>  "
            template2 = template2 + "                <md-input-container class='md-block'>  "
            template2 = template2 + "                    <label class='md-no-float'>Medidor</label>  "
            template2 = template2 + "                    <input name='medidor' ng-model='ficha.model.medidor' readonly>  "
            template2 = template2 + "                </md-input-container>  "
            template2 = template2 + "                <md-input-container class='md-block'>  "
            template2 = template2 + "                    <label class='md-no-float'>Cuentas Alcantarillado</label>  "
            template2 = template2 + "                    <input name='ctasAlcantarillado' ng-model='ficha.model.ctasAlcantarillado' readonly>  "
            template2 = template2 + "                </md-input-container>  "
            template2 = template2 + "            </form>  "
            template2 = template2 + "        </md-content>  "
            template2 = template2 + "    </div>  "
            template2 = template2 + "</div> ";


            var template3 = " <div layout-padding class='scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}'>  "
            template3 = template3 + "    <div layout-padding>  "
            template3 = template3 + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'>  "
            template3 = template3 + "            <span class='md-subhead'>Carga de Datos</span>  "
            template3 = template3 + "        </md-toolbar>  "
            template3 = template3 + "        <md-content class='md-whiteframe-1dp'>  "
            template3 = template3 + "            <form name='step3.formFicha'>  "
            template3 = template3 + "                <md-input-container class='md-block'>  "
            template3 = template3 + "                    <label>Raz&oacute;n social</label>  "
            template3 = template3 + "                    <input name='razonSocial' ng-model='ficha.model.razonSocial' md-maxlength='50'>  "
            template3 = template3 + "                    <div ng-messages='step3.formFicha.razonSocial.$error' role='alert'>  "
            template3 = template3 + "                        <div ng-message='md-maxlength'>  "
            template3 = template3 + "                            La Raz&oacute;n social debe de ser menor a 50 caracteres de largo.  "
            template3 = template3 + "                        </div>  "
            template3 = template3 + "                    </div>  "
            template3 = template3 + "                </md-input-container>  "
            template3 = template3 + "                <div layout='row'>  "
            template3 = template3 + "                    <md-input-container flex='50'>  "
            template3 = template3 + "                        <label>Toma de lectura</label>  "
            template3 = template3 + "                        <input name='lecturaMedidor' ng-model='ficha.model.lecturaMedidor' type='tel'>  "
            template3 = template3 + "                    </md-input-container>  "
            template3 = template3 + "                    <md-input-container flex='50'>  "
            template3 = template3 + "                        <label>Estado Medidor</label>  "
            template3 = template3 + "                        <md-select name='estadoMed' ng-model='ficha.model.estadoMed' aria-label='Estado Medidor' ng-required='ficha.tipo !== \"R\" || ficha.medidorCorrecto'>  "
            template3 = template3 + "                            <md-option value='{{item.ID}}' ng-repeat='item in ficha.combos.estadosMedidor | filter: ficha.filterCombo '>  "
            template3 = template3 + "                                {{ item.DESCRIPCION | uppercase }}  "
            template3 = template3 + "                            </md-option>  "
            template3 = template3 + "                        </md-select>  "
            template3 = template3 + "                        <div ng-messages='step3.formFicha.estadoMed.$error' role='alert'>  "
            template3 = template3 + "                            <div ng-message='required'>Debe de seleccionar el estado del medidor.</div>  "
            template3 = template3 + "                        </div>  "
            template3 = template3 + "                    </md-input-container>  "
            template3 = template3 + "                </div>  "
            template3 = template3 + "                <div ng-if='ficha.tipo != \"A\"'>  "
            template3 = template3 + "                   <div layout='row'>  "
            template3 = template3 + "                       <md-input-container flex='50'>  "
            template3 = template3 + "                           <label>Medidor izquierdo</label>  "
            template3 = template3 + "                           <input name='medidorIzquierdo' ng-model='ficha.model.medidorIzquierdo' type='tel'>  "
            template3 = template3 + "                       </md-input-container>  "
            template3 = template3 + "                       <md-input-container flex='50'>  "
            template3 = template3 + "                           <label>Lec. Med. izquierdo</label>  "
            template3 = template3 + "                           <input name='lecMedIzquierdo' ng-model='ficha.model.lecMedIzquierdo' type='tel'>  "
            template3 = template3 + "                       </md-input-container>  "
            template3 = template3 + "                   </div>  "
            template3 = template3 + "                   <div layout='row'>  "
            template3 = template3 + "                       <md-input-container flex='50'>  "
            template3 = template3 + "                           <label>Medidor derecho</label>  "
            template3 = template3 + "                           <input name='medidorDerecho' ng-model='ficha.model.medidorDerecho' type='tel'>  "
            template3 = template3 + "                       </md-input-container>  "
            template3 = template3 + "                       <md-input-container flex='50'>  "
            template3 = template3 + "                           <label>Lec. Med. derecho</label>  "
            template3 = template3 + "                           <input name='lecMedDerecho' ng-model='ficha.model.lecMedDerecho' type='tel'>  "
            template3 = template3 + "                       </md-input-container>  "
            template3 = template3 + "                   </div>  "
            template3 = template3 + "                </div>  "
                /*template3 = template3 + "                <!-- FOTOGRAFIAS -->  "
                template3 = template3 + "                <div ng-if='!ficha.toUpdate'>  "
                template3 = template3 + "                    <md-input-container class='md-block'>  "
                template3 = template3 + "                        <md-checkbox name='tomarFotografia' aria-label='Tomar Fotografias' ng-model='ficha.model.tomarFotografias'>Tomar Fotografias</md-checkbox>  "
                template3 = template3 + "                    </md-input-container>  "
                template3 = template3 + "                    <md-input-container class='md-block' ng-if='ficha.model.tomarFotografias'>  "
                template3 = template3 + "                        <lf-ng-md-file-input ng-disabled='ficha.confirmaFotos' lf-api='ficha.apiFile' name='fotos' lf-files='ficha.fotos.datos' lf-browse-label='Abrir' lf-remove-label='Remover' lf-filesize='10MB' lf-totalsize='100MB' lf-mimetype='image/*' preview multiple></lf-ng-md-file-input>  "
                template3 = template3 + "                        <div ng-messages='step3.formFicha.fotos.$error' style='color:red;'>  "
                template3 = template3 + "                            <div ng-message='filesize'>Archivo demasiado grande, debe de ser menor a 12MB.</div>  "
                template3 = template3 + "                            <div ng-message='totalsize'>El total de Imagenes sobrepasa el maximo de 100MB.</div>  "
                template3 = template3 + "                            <div ng-message='mimetype'>Tipo de archivo incorrecto, solo esta permitido imagenes.</div>  "
                template3 = template3 + "                        </div>  "
                template3 = template3 + "                        <md-button ng-show='ficha.fotos.datos.length > 0' ng-disabled='ficha.confirmaFotos' class='md-raised md-warn' ng-click='ficha.cargarImagen($event, \"F\")'>Confirmar</md-button>  "
                template3 = template3 + "                    </md-input-container>  "
                template3 = template3 + "                </div>  "*/
            template3 = template3 + "            </form>  "
            template3 = template3 + "        </md-content>  "
            template3 = template3 + "    </div>  "
            template3 = template3 + "</div>  "



            var template4 = '<div layout-padding class="scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}"> ' +
                '    <div layout-padding> ' +
                '        <md-toolbar class="md-hue-2 toolbar-densed" layout="row" layout-align="center center"> ' +
                '            <span class="md-subhead">Entrevista</span> ' +
                '        </md-toolbar> ' +
                '        <md-content class="md-whiteframe-1dp"> ' +
                '            <form name="step4.formFicha"> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <label>Nombre</label> ' +
                '                    <input name="nombreEntrevistado" ng-model="ficha.model.nombreEntrevistado"> ' +
                '                </md-input-container> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <label>Tipo Contacto</label> ' +
                '                    <md-select name="tipoTelefono" ng-model="ficha.model.tipoTelefono" aria-label="Tipo Contacto"> ' +
                '                        <md-option value="{{ item.ID }}" ng-repeat="item in ficha.combos.tipoContacto"> ' +
                '                            {{ item.DESCRIPCION | uppercase }} ' +
                '                        </md-option> ' +
                '                    </md-select> ' +
                '                </md-input-container> ' +
                '                <md-input-container class="md-block" ng-if="ficha.model.tipoTelefono != \'0\'" flex-offset="10"> ' +
                '                    <label>No. Contacto</label> ' +
                '                    <input name="telefonoContacto" ng-model="ficha.model.telefonoContacto" type="tel" required> ' +
                '                    <div ng-messages="step4.formFicha.telefonoContacto.$error" role="alert"> ' +
                '                        <div ng-message="required">Debe de ingresar el n&uacute;mero de contacto.</div> ' +
                '                    </div> ' +
                '                </md-input-container> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <label>E-mail</label> ' +
                '                    <input name="email" ng-model="ficha.model.email" type="email" minlength="10" maxlength="100" ng-pattern="/^.+@.+\..+$/"> ' +
                '                    <div ng-messages="step4.formFicha.email.$error" role="alert"> ' +
                '                        <div ng-message-exp="[\'minlength\', \'maxlength\', \'pattern\']"> ' +
                '                            El email debe ser entre 10 y 100 caracteres de largo y debe lucir como una direcci&oacute;n de correo electronico. ' +
                '                        </div> ' +
                '                    </div> ' +
                '                </md-input-container> ' +
                '            </form> ' +
                '        </md-content> ' +
                '    </div> ' +
                '</div> ';

            var template5 = '<div class="scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}"> ' +
                '    <div layout-padding> ' +
                '        <md-toolbar class="md-hue-2 toolbar-densed" layout="row" layout-align="center center"> ' +
                '            <span class="md-subhead">Uso del Suelo</span> ' +
                '        </md-toolbar> ' +
                '        <md-content class="md-whiteframe-1dp"> ' +
                '            <form name="step5.formFicha"> ' +
                '                <md-radio-group ng-model="ficha.model.usoSuelo" required> ' +
                '                    <md-radio-button value="D" class="md-primary"> ' +
                '                        Deshabitado ' +
                '                    </md-radio-button> ' +
                '                    <md-radio-button value="H" class="md-primary"> ' +
                '                        Habitado ' +
                '                    </md-radio-button> ' +
                '                    <md-radio-button value="B" class="md-primary"> ' +
                '                        Baldio ' +
                '                    </md-radio-button> ' +
                '                    <md-radio-button value="E" class="md-primary"> ' +
                '                        En construcci&oacute;n ' +
                '                    </md-radio-button> ' +
                '                </md-radio-group> ' +
                '                <div ng-messages="step5.formFicha.usoSuelo.$error" role="alert"> ' +
                '                    <div ng-message="required">Debe de seleccionar el uso del suelo.</div> ' +
                '                </div> ' +
                '                <md-input-container class="md-block" ng-if="ficha.model.usoSuelo == \'H\'" flex-offset="10"> ' +
                '                    <label>Cant. Habitantes</label> ' +
                '                    <input name="habitantes" ng-model="ficha.model.habitantes" required type="tel"> ' +
                '                    <div ng-messages="step5.formFicha.habitantes.$error" role="alert"> ' +
                '                        <div ng-message="required">Debe de ingresar el n&uacute;mero de habitantes.</div> ' +
                '                    </div> ' +
                '                </md-input-container> ' +
                '                <md-input-container class="md-block" ng-if="ficha.model.usoSuelo == \'E\'" flex-offset="10"> ' +
                '                    <label>Cant. Trabajadores</label> ' +
                '                    <input name="trabajadores" ng-model="ficha.model.trabajadores" required type="tel"> ' +
                '                    <div ng-messages="step4.formFicha.trabajadores.$error" role="alert"> ' +
                '                        <div ng-message="required">Debe de ingresar el n&uacute;mero de trabajadores.</div> ' +
                '                    </div> ' +
                '                </md-input-container> ' +
                '            </form> ' +
                '        </md-content> ' +
                '    </div> ' +
                '</div> ';

            var template6 = '<div layout-padding class="scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}"> ' +
                '    <div layout-padding> ' +
                '        <md-toolbar class="md-hue-2 toolbar-densed" layout="row" layout-align="center center"> ' +
                '            <span class="md-subhead">Tipo del Uso del Suelo</span> ' +
                '        </md-toolbar> ' +
                '        <md-content class="md-whiteframe-1dp"> ' +
                '            <form name="step6.formFicha"> ' +
                '                <md-input-container class="md-block" ng-if="ficha.tipo != \'A\'"> ' +
                '                    <label>Privado</label> ' +
                '                    <md-select name="subtPrivado" ng-model="ficha.model.subtPrivado" aria-label="tipoSuelo"> ' +
                '                        <md-option value="{{ item.ID }}" ng-repeat="item in ficha.combos.tipoSuelo | filter: ficha.filterCombo"> ' +
                '                            {{ item.DESCRIPCION | uppercase }} ' +
                '                        </md-option> ' +
                '                    </md-select> ' +
                '                </md-input-container> ' +
                '                <md-input-container class="md-block" ng-if="ficha.tipo != \'A\'"> ' +
                '                    <md-checkbox ng-model="ficha.model.gobierno" aria-label="Institucion de Gobierno"> ' +
                '                        Instituci&oacute;n de Gobierno ' +
                '                    </md-checkbox> ' +
                '                </md-input-container> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <md-checkbox ng-model="ficha.model.fraccionamiento" aria-label="Fracionamiento"> ' +
                '                        Fraccionamiento ' +
                '                    </md-checkbox> ' +
                '                </md-input-container> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <md-checkbox ng-model="ficha.model.vivienda" aria-label="Vivienda"> ' +
                '                        Vivienda ' +
                '                    </md-checkbox> ' +
                '                </md-input-container> ' +
                '                <div ng-if="ficha.model.vivienda" flex-offset="10"> ' +
                '                    <!-- Vivienda --> ' +
                '                    <md-divider></md-divider> ' +
                '                    <md-input-container md-no-float> ' +
                '                        <md-radio-group layout="row" ng-model="ficha.model.tipoVivienda" required> ' +
                '                            <md-radio-button value="unifamiliar" flex="50"> Unifamiliar </md-radio-button> ' +
                '                            <md-radio-button value="condominio" flex="50"> Condominio </md-radio-button> ' +
                '                        </md-radio-group> ' +
                '                    </md-input-container> ' +
                '                    <md-input-container class="md-block" ng-if="ficha.model.tipoVivienda == \'unifamiliar\'" flex-offset="15"> ' +
                '                        <!-- Unifamiliar --> ' +
                '                        <label>Cant. niveles</label> ' +
                '                        <input name="niveles" ng-model="ficha.model.niveles" type="tel" required> ' +
                '                        <div ng-messages="step6.formFicha.niveles.$error" role="alert"> ' +
                '                            <div ng-message="required">Debe de ingresar el n&uacute;mero de niveles.</div> ' +
                '                        </div> ' +
                '                    </md-input-container> ' +
                '                    <div ng-if="ficha.model.tipoVivienda == \'condominio\'" flex-offset="15"> ' +
                '                        <!-- Condominio --> ' +
                '                        <md-divider></md-divider> ' +
                '                        <md-input-container md-no-float> ' +
                '                            <md-radio-group layout="row" ng-model="ficha.model.tipoCondominio" requiered> ' +
                '                                <md-radio-button value="vertical" flex="50"> Vertical </md-radio-button> ' +
                '                                <md-radio-button value="horizontal" flex="50"> Horizontal </md-radio-button> ' +
                '                            </md-radio-group> ' +
                '                        </md-input-container> ' +
                '                        <md-input-container class="md-block"> ' +
                '                            <label>Cantidad</label> ' +
                '                            <input name="niveles" ng-model="ficha.model.niveles" required> ' +
                '                            <div ng-messages="step6.formFicha.niveles.$error" role="alert"> ' +
                '                                <div ng-message="required">Debe de ingresar el n&uacute;mero de condominos.</div> ' +
                '                            </div> ' +
                '                        </md-input-container> ' +
                '                    </div> ' +
                '                </div> ' +
                '                <!-- END Vivienda --> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <md-checkbox ng-model="ficha.model.comercio" aria-label="Comercio"> ' +
                '                        Comercio ' +
                '                    </md-checkbox> ' +
                '                </md-input-container> ' +
                '                <div ng-if="ficha.model.comercio" flex-offset="10"> ' +
                '                    <!-- Comercio --> ' +
                '                    <md-divider></md-divider> ' +
                '                    <md-input-container class="md-block"> ' +
                '                        <label>Venta de Productos</label> ' +
                '                        <md-select name="subtComercio" ng-model="ficha.model.subtComercio" aria-label="Venta de Productos" required> ' +
                '                            <md-option value="{{ item.ID }}" ng-repeat="item in ficha.combos.locales | filter: ficha.filterCombo"> ' +
                '                                {{ item.DESCRIPCION | uppercase }} ' +
                '                            </md-option> ' +
                '                        </md-select> ' +
                '                        <div ng-messages="step6.formFicha.subtComercio.$error" role="alert"> ' +
                '                            <div ng-message="required">Debe de seleccionar el tipo de comercio.</div> ' +
                '                        </div> ' +
                '                    </md-input-container> ' +
                '                    <md-input-container class="md-block" ng-if="ficha.model.subtComercio == 3"> ' +
                '                        <label>Cant. Locales</label> ' +
                '                        <input name="numLocales" ng-model="ficha.model.numLocales" required> ' +
                '                        <div ng-messages="step6.formFicha.numLocales.$error" role="alert"> ' +
                '                            <div ng-message="required">Debe de ingresar la cantidad de locales.</div> ' +
                '                        </div> ' +
                '                    </md-input-container> ' +
                '                    <md-input-container class="md-block"> ' +
                '                        <label>Servicios</label> ' +
                '                        <md-select name="subtServicio" ng-model="ficha.model.subtServicio" aria-label="Servicios"> ' +
                '                            <md-option value="{{ item.ID }}" ng-repeat="item in ficha.combos.servicios | filter: ficha.filterCombo"> ' +
                '                                {{ item.DESCRIPCION | uppercase }} ' +
                '                            </md-option> ' +
                '                        </md-select> ' +
                '                    </md-input-container> ' +
                '                    <md-input-container class="md-block"> ' +
                '                        <label>Almtos. Y Bebidas</label> ' +
                '                        <md-select name="subtAlimentos" ng-model="ficha.model.subtAlimentos" aria-label="Alimentos Y Bebidas"> ' +
                '                            <md-option value="{{ item.ID }}" ng-repeat="item in ficha.combos.alimentos | filter: ficha.filterCombo"> ' +
                '                                {{ item.DESCRIPCION | uppercase }} ' +
                '                            </md-option> ' +
                '                        </md-select> ' +
                '                    </md-input-container> ' +
                '                </div> ' +
                '                <!--END Comercio--> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <md-checkbox ng-model="ficha.model.industria" aria-label="Industria"> ' +
                '                        Industria ' +
                '                    </md-checkbox> ' +
                '                </md-input-container> ' +
                '                <div ng-if="ficha.model.industria" flex-offset="10"> ' +
                '                    <!-- Industria --> ' +
                '                    <md-divider></md-divider> ' +
                '                    <md-input-container class="md-block"> ' +
                '                        <label>Tipo</label> ' +
                '                        <md-select name="subtIndustria" ng-model="ficha.model.subtIndustria" aria-label="Tipo Industria"> ' +
                '                            <md-option value="{{ item.ID }}" ng-repeat="item in ficha.combos.industria | filter: ficha.filterCombo"> ' +
                '                                {{ item.DESCRIPCION | uppercase }} ' +
                '                            </md-option> ' +
                '                        </md-select> ' +
                '                        <div ng-messages="step6.formFicha.subtIndustria.$error" role="alert"> ' +
                '                            <div ng-message="required">Debe de seleccionar el tipo de industria.</div> ' +
                '                        </div> ' +
                '                    </md-input-container> ' +
                '                </div> ' +
                '                <!--END Industria--> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <md-checkbox ng-model="ficha.model.otros" aria-label="Otros"> ' +
                '                        Otros ' +
                '                    </md-checkbox> ' +
                '                </md-input-container> ' +
                '                <div ng-if="ficha.model.otros" flex-offset="10"> ' +
                '                    <!-- Otros --> ' +
                '                    <md-divider></md-divider> ' +
                '                    <md-input-container class="md-block"> ' +
                '                        <label>Tipos</label> ' +
                '                        <md-select name="subtOtros" ng-model="ficha.model.subtOtros" aria-label="Tipo de Otros"> ' +
                '                            <md-option value="{{ item.ID }}" ng-repeat="item in ficha.combos.otros | filter: ficha.filterCombo"> ' +
                '                                {{ item.DESCRIPCION | uppercase }} ' +
                '                            </md-option> ' +
                '                        </md-select> ' +
                '                        <div ng-messages="step6.formFicha.subtOtros.$error" role="alert"> ' +
                '                            <div ng-message="required">Debe de seleccionar el tipo de otros.</div> ' +
                '                        </div> ' +
                '                    </md-input-container> ' +
                '                </div> ' +
                '                <!--END Otros--> ' +
                '                <md-input-container class="md-block"> ' +
                '                    <label>Observaciones</label> ' +
                '                    <textarea name="observaciones" ng-model="ficha.model.observaciones"></textarea> ' +
                '                </md-input-container> ' +
                '            </form> ' +
                '        </md-content> ' +
                '    </div> ' +
                '</div> ';

            var template7 = "             <div layout-padding class='scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}'>  "
            template7 = template7 + "                    <div layout-padding>  "
            template7 = template7 + "                        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'>  "
            template7 = template7 + "                            <span class='md-subhead'>Abastecimiento</span>  "
            template7 = template7 + "                        </md-toolbar>  "
            template7 = template7 + "                        <md-content class='md-whiteframe-1dp'>  "
            template7 = template7 + "                            <form name='step7.formFicha'>  "
            template7 = template7 + "                                <md-input-container class='md-block'>  "
            template7 = template7 + "                                    <md-checkbox name='empagua' ng-model='ficha.model.empagua' aria-label='Empagua'>  "
            template7 = template7 + "                                        Empagua  "
            template7 = template7 + "                                    </md-checkbox>  "
            template7 = template7 + "                                </md-input-container>  "
            template7 = template7 + "                                <md-input-container class='md-block'>  "
            template7 = template7 + "                                    <md-checkbox name='mariscal' ng-model='ficha.model.mariscal' aria-label='Mariscal'>  "
            template7 = template7 + "                                        Mariscal  "
            template7 = template7 + "                                    </md-checkbox>  "
            template7 = template7 + "                                </md-input-container>  "
            template7 = template7 + "                                <md-input-container class='md-block'>  "
            template7 = template7 + "                                    <md-checkbox name='pipas' ng-model='ficha.model.pipas' aria-label='Pipas'>  "
            template7 = template7 + "                                        Pipas  "
            template7 = template7 + "                                    </md-checkbox>  "
            template7 = template7 + "                                </md-input-container>  "
            template7 = template7 + "                                <div ng-if='ficha.model.pipas' flex-offset='10'>  "
            template7 = template7 + "                                    <!-- Pipas -->  "
            template7 = template7 + "                                    <md-divider></md-divider>  "
            template7 = template7 + "                                    <md-input-container class='md-block'>  "
            template7 = template7 + "                                        <label>Frecuencia</label>  "
            template7 = template7 + "                                        <md-select name='frecuencia' ng-model='ficha.model.frecuencia' aria-label='Frecuencia' required>  "
            template7 = template7 + "                                            <md-option value='{{ item.ID }}' ng-repeat='item in ficha.combos.frecuencia'>  "
            template7 = template7 + "                                                {{ item.DESCRIPCION | uppercase }}  "
            template7 = template7 + "                                            </md-option>  "
            template7 = template7 + "                                        </md-select>  "
            template7 = template7 + "                                        <div ng-messages='step7.formFicha.frecuencia.$error' role='alert'>  "
            template7 = template7 + "                                            <div ng-message='required'>Debe de seleccionar la frecuencia.</div>  "
            template7 = template7 + "                                        </div>  "
            template7 = template7 + "                                    </md-input-container>  "
            template7 = template7 + "                                    <md-input-container class='md-block'>  "
            template7 = template7 + "                                        <label>Cantidad</label>  "
            template7 = template7 + "                                        <input name='cantidadPipas' ng-model='ficha.model.cantidadPipas' required type='tel'>  "
            template7 = template7 + "                                        <div ng-messages='step7.formFicha.cantidadPipas.$error' role='alert'>  "
            template7 = template7 + "                                            <div ng-message='required'>Debe de ingresar la cantidad de pipas.</div>  "
            template7 = template7 + "                                        </div>  "
            template7 = template7 + "                                    </md-input-container>  "
            template7 = template7 + "                                </div>  "
            template7 = template7 + "                                <!-- End Pipas -->  "
            template7 = template7 + "                                <md-input-container class='md-block'>  "
            template7 = template7 + "                                    <md-checkbox name='pozoPropio' ng-model='ficha.model.pozoPropio' aria-label='Pozo Propio'>  "
            template7 = template7 + "                                        Pozo Propio  "
            template7 = template7 + "                                    </md-checkbox>  "
            template7 = template7 + "                                </md-input-container>  "
            template7 = template7 + "                               <md-input-container class='md-block' ng-if='ficha.tipo == \"R\"'> "
            template7 = template7 + "                                   <md-checkbox name='plantaTratamiento' aria-label='Planta de tratamiento' ng-model='ficha.model.plantaTratamiento'>Planta de tratamiento</md-checkbox> "
            template7 = template7 + "                               </md-input-container> "
            template7 = template7 + "                               <md-input-container class='md-block' ng-if='ficha.tipo == \"R\"'> "
            template7 = template7 + "                                   <label>Candelas Visibles</label> "
            template7 = template7 + "                                   <input name='candelasVisibles' ng-model='ficha.model.candelasVisibles' type='tel'> "
            template7 = template7 + "                               </md-input-container> "
            template7 = template7 + "                            </form>  "
            template7 = template7 + "                        </md-content>  "
            template7 = template7 + "                    </div>  "
            template7 = template7 + "                </div> ";

            var template8 = "              <div layout-padding class='scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}'>  "
            template8 = template8 + "                    <div layout-padding>  "
            template8 = template8 + "                        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'>  "
            template8 = template8 + "                            <span class='md-subhead'>Almacenamiento</span>  "
            template8 = template8 + "                        </md-toolbar>  "
            template8 = template8 + "                        <md-content class='md-whiteframe-1dp'>  "
            template8 = template8 + "                            <form name='step8.formFicha'>  "
            template8 = template8 + "                                <div layout='row'>  "
            template8 = template8 + "                                    <md-input-container flex='50'>  "
            template8 = template8 + "                                        <label>Cisterna Elevada</label>  "
            template8 = template8 + "                                        <input name='cistElevada' ng-model='ficha.model.cistElevada' type='tel'>  "
            template8 = template8 + "                                    </md-input-container>  "
            template8 = template8 + "                                    <md-input-container flex='50'>  "
            template8 = template8 + "                                        <label>Cisterna Subt.</label>  "
            template8 = template8 + "                                        <input name='cistSubterranea' ng-model='ficha.model.cistSubterranea' type='tel'>  "
            template8 = template8 + "                                    </md-input-container>  "
            template8 = template8 + "                                </div>  "
            template8 = template8 + "                                <md-input-container class='md-block'>  "
            template8 = template8 + "                                    <md-checkbox name='toneles' aria-label='Toneles' ng-model='ficha.model.toneles'>Toneles</md-checkbox>  "
            template8 = template8 + "                                </md-input-container>  "
            template8 = template8 + "                                <div ng-if='ficha.model.toneles' flex-offset='10'>  "
            template8 = template8 + "                                    <!-- Toneles -->  "
            template8 = template8 + "                                    <md-divider></md-divider>  "
            template8 = template8 + "                                    <md-input-container class='md-block'>  "
            template8 = template8 + "                                        <label>Cantidad</label>  "
            template8 = template8 + "                                        <input name='cantToneles' ng-model='ficha.model.cantToneles' required type='tel'>  "
            template8 = template8 + "                                        <div ng-messages='step6.formFicha.cantToneles.$error' role='alert'>  "
            template8 = template8 + "                                            <div ng-message='required'>Debe de ingresar la cantidad de toneles.</div>  "
            template8 = template8 + "                                        </div>  "
            template8 = template8 + "                                    </md-input-container>  "
            template8 = template8 + "                                </div>  "
            template8 = template8 + "                                <!-- End Toneles -->  "
            template8 = template8 + "                            </form>  "
            template8 = template8 + "                        </md-content>  "
            template8 = template8 + "                    </div>  "
            template8 = template8 + "                </div> ";


            var template9 = " <div layout-padding class='scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}'>  "
            template9 = template9 + "                    <div layout-padding>  "
            template9 = template9 + "                        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'>  "
            template9 = template9 + "                            <span class='md-subhead'>Servicios</span>  "
            template9 = template9 + "                        </md-toolbar>  "
            template9 = template9 + "                        <md-content class='md-whiteframe-1dp'>  "
            template9 = template9 + "                            <form name='step9.formFicha'>  "
            template9 = template9 + "                                <div layout='row'>  "
            template9 = template9 + "                                    <md-input-container flex='50'>  "
            template9 = template9 + "                                        <label>Sanitarios</label>  "
            template9 = template9 + "                                        <input name='sanitarios' ng-model='ficha.model.sanitarios' type='tel'>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                    <md-input-container flex='50'>  "
            template9 = template9 + "                                        <label>Lavamanos</label>  "
            template9 = template9 + "                                        <input name='lavamanos' ng-model='ficha.model.lavamanos' type='tel'>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                </div>  "
            template9 = template9 + "                                <div layout='row'>  "
            template9 = template9 + "                                    <md-input-container flex='50'>  "
            template9 = template9 + "                                        <label>Lavaplatos</label>  "
            template9 = template9 + "                                        <input name='lavaplatos' ng-model='ficha.model.lavaplatos' type='tel'>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                    <md-input-container flex='50'>  "
            template9 = template9 + "                                        <label>Duchas</label>  "
            template9 = template9 + "                                        <input name='duchas' ng-model='ficha.model.duchas' type='tel'>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                </div>  "
            template9 = template9 + "                                <div layout='row'>  "
            template9 = template9 + "                                    <md-input-container flex='50'>  "
            template9 = template9 + "                                        <label>Chorros</label>  "
            template9 = template9 + "                                        <input name='chorros' ng-model='ficha.model.chorros' type='tel'>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                    <md-input-container flex='50'>  "
            template9 = template9 + "                                        <label>Lavadora</label>  "
            template9 = template9 + "                                        <input name='lavadora' ng-model='ficha.model.lavadora' type='tel'>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                </div>  "
            template9 = template9 + "                                <div layout='row'>  "
            template9 = template9 + "                                    <md-input-container flex='50'>  "
            template9 = template9 + "                                        <label>Pila</label>  "
            template9 = template9 + "                                        <input name='pila' ng-model='ficha.model.pila'>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                    <md-input-container flex='50'>  "
            template9 = template9 + "                                        <label>Piscina</label>  "
            template9 = template9 + "                                        <input name='piscina' ng-model='ficha.model.piscina' type='tel'>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                </div>  "
            template9 = template9 + "                                <md-input-container class='md-block'>  "
            template9 = template9 + "                                    <md-checkbox name='jardin' aria-label='Cuenta con jardin' ng-model='ficha.model.jardin'>Cuenta con jardin</md-checkbox>  "
            template9 = template9 + "                                </md-input-container>  "
            template9 = template9 + "                                <div ng-if='ficha.model.jardin' flex-offset='15'>  "
            template9 = template9 + "                                    <md-input-container class='md-block'>  "
            template9 = template9 + "                                        <label>Aprox.M2</label>  "
            template9 = template9 + "                                        <input name='mts2Jardin' ng-model='ficha.model.mts2Jardin' type='number' required>  "
            template9 = template9 + "                                        <div ng-messages='step9.formFicha.mts2Jardin.$error' role='alert'>  "
            template9 = template9 + "                                            <div ng-message='required'>Debe de ingresar M2.</div>  "
            template9 = template9 + "                                        </div>  "
            template9 = template9 + "                                    </md-input-container>  "
            template9 = template9 + "                                </div>  "
            template9 = template9 + "                                <md-input-container class='md-block' ng-if='ficha.tipo != \"A\"' ng-hide='ficha.toUpdate ++ ficha.alcantarilladoAnterior'>  "
            template9 = template9 + "                                    <md-checkbox name='alcantarillado' aria-label='Alcantarillado' ng-model='ficha.model.alcantarillado'>Alcantarillado</md-checkbox>  "
            template9 = template9 + "                                </md-input-container>  "
            template9 = template9 + "                                <md-input-container class='md-block' ng-if='ficha.tipo == \"R\"' >  "
            template9 = template9 + "                                    <md-checkbox name='prioridad' aria-label='Prioridad Alta' ng-model='ficha.model.prioridad'>PRIORIDAD ALTA</md-checkbox>  "
            template9 = template9 + "                                </md-input-container>  "
            template9 = template9 + "                               <md-input-container class='md-block' ng-if='ficha.tipo == \"R\"' > "
            template9 = template9 + "                                   <label>Observaciones</label> "
            template9 = template9 + "                                   <textarea name='observaciones' ng-model='ficha.model.observaciones'></textarea> "
            template9 = template9 + "                               </md-input-container> "
            template9 = template9 + "                            </form>  "
            template9 = template9 + "                        </md-content>  "
            template9 = template9 + "                    </div>  "
            template9 = template9 + "                </div> ";


            var alcan1 = " <div class='scrollable-nav-content top-clear bottom-space {{ficha.flow.currentAnimate}}'> "
            alcan1 = alcan1 + "    <div layout-padding> "
            alcan1 = alcan1 + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'> "
            alcan1 = alcan1 + "            <span class='md-subhead'>Alcantarillado</span> "
            alcan1 = alcan1 + "        </md-toolbar> "
            alcan1 = alcan1 + "        <md-content class='md-whiteframe-1dp'> "
            alcan1 = alcan1 + "            <form name='alcant1.formFicha'> "
            alcan1 = alcan1 + "                <md-input-container class='md-block'> "
            alcan1 = alcan1 + "                    <label>Estado medidor</label> "
            alcan1 = alcan1 + "                    <md-select name='estadoMedAlcan' ng-model='ficha.model.estadoMedAlcan' aria-label='Estado medidor'> "
            alcan1 = alcan1 + "                        <md-option value='{{item.ID}}' ng-repeat='item in ficha.combos.estadosMedidor | filter: ficha.filterCombo '> "
            alcan1 = alcan1 + "                            {{ item.DESCRIPCION | uppercase }} "
            alcan1 = alcan1 + "                        </md-option> "
            alcan1 = alcan1 + "                    </md-select> "
            alcan1 = alcan1 + "                </md-input-container> "
            alcan1 = alcan1 + "                <md-input-container class='md-block'> "
            alcan1 = alcan1 + "                    <label>Toma de lectura</label> "
            alcan1 = alcan1 + "                    <input name='lecturaMedidorAlcant' ng-model='ficha.model.lecturaMedidorAlcant' type='tel'> "
            alcan1 = alcan1 + "                </md-input-container> "
                /*alcan1 = alcan1 + "                <div ng-if='!ficha.toUpdate'> "
                alcan1 = alcan1 + "                    <md-input-container class='md-block'> "
                alcan1 = alcan1 + "                        <md-checkbox name='tomarFotografiaAlcan' aria-label='Tomar Fotografias' ng-model='ficha.model.tomarFotografiasAlcan'>Tomar Fotografias</md-checkbox> "
                alcan1 = alcan1 + "                    </md-input-container> "
                alcan1 = alcan1 + "                    <md-input-container class='md-block' ng-if='ficha.model.tomarFotografiasAlcan'> "
                alcan1 = alcan1 + "                        <lf-ng-md-file-input ng-disabled='ficha.confirmaFotosAlcan' lf-api='ficha.apiFileAlcan' name='fotosAlcan' lf-files='ficha.fotos.alcan' lf-browse-label='Abrir' "
                alcan1 = alcan1 + "                            lf-remove-label='Remover' lf-filesize='12MB' lf-totalsize='60MB' lf-mimetype='image/*' preview multiple></lf-ng-md-file-input> "
                alcan1 = alcan1 + "                        <div ng-messages='alcant1.formFicha.fotosAlcan.$error' style='color:red;'> "
                alcan1 = alcan1 + "                            <div ng-message='filesize'>Archivo demasiado grande, debe de ser menor a 12MB.</div> "
                alcan1 = alcan1 + "                            <div ng-message='totalsize'>El total de Imagenes sobrepasa el maximo de 60MB.</div> "
                alcan1 = alcan1 + "                            <div ng-message='mimetype'>Tipo de archivo incorrecto, solo esta permitido imagenes.</div> "
                alcan1 = alcan1 + "                        </div> "
                alcan1 = alcan1 + "                        <md-progress-linear ng-show='ficha.loadingFotos' class='md-warn' md-mode='determinate' value='{{ficha.progressFotos}}' style='z-index: 999999;'></md-progress-linear> "
                alcan1 = alcan1 + "                        <md-button ng-show='ficha.fotos.alcan.length > 0' ng-disabled='ficha.confirmaFotosAlcan' class='md-raised md-warn' ng-click='ficha.cargarImagen($event, \"A\")'>Confirmar</md-button> "
                alcan1 = alcan1 + "                    </md-input-container> "
                alcan1 = alcan1 + "                </div> "*/
            alcan1 = alcan1 + "            </form> "
            alcan1 = alcan1 + "        </md-content> "
            alcan1 = alcan1 + "    </div> "
            alcan1 = alcan1 + "</div> ";

            var alcan2 = " <div class='scrollable-nav-content top-clear bottom-space {{ficha.flow.currentAnimate}}'> "
            alcan2 = alcan2 + "    <div layout-padding> "
            alcan2 = alcan2 + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'> "
            alcan2 = alcan2 + "            <span class='md-subhead'>Abastecimiento</span> "
            alcan2 = alcan2 + "        </md-toolbar> "
            alcan2 = alcan2 + "        <md-content class='md-whiteframe-1dp'> "
            alcan2 = alcan2 + "            <form name='alcant2.formFicha'> "
            alcan2 = alcan2 + "                <md-input-container class='md-block'> "
            alcan2 = alcan2 + "                    <md-checkbox name='empaguaAlcan' aria-label='Empagua' ng-model='ficha.model.empaguaAlcan'>Empagua</md-checkbox> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "                <md-input-container class='md-block'> "
            alcan2 = alcan2 + "                    <md-checkbox name='mariscalAlcan' aria-label='Mariscal' ng-model='ficha.model.mariscalAlcan'>Mariscal</md-checkbox> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "            </form> "
            alcan2 = alcan2 + "        </md-content> "
            alcan2 = alcan2 + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'> "
            alcan2 = alcan2 + "            <span class='md-subhead'>Instalaciones</span> "
            alcan2 = alcan2 + "        </md-toolbar> "
            alcan2 = alcan2 + "        <md-content class='md-whiteframe-1dp'> "
            alcan2 = alcan2 + "            <form name='alcant21.formFicha'> "
            alcan2 = alcan2 + "            <div ng-if='ficha.tipo ===  \"A\" '> "
            alcan2 = alcan2 + "                <md-input-container class='md-block'> "
            alcan2 = alcan2 + "                    <md-checkbox name='pipas' ng-model='ficha.model.pipas' aria-label='Pipas'>  "
            alcan2 = alcan2 + "                        Pipas  "
            alcan2 = alcan2 + "                    </md-checkbox>  "
            alcan2 = alcan2 + "                </md-input-container>  "
            alcan2 = alcan2 + "                <div ng-if='ficha.model.pipas' flex-offset='10'>  "
            alcan2 = alcan2 + "                    <!-- Pipas --> "
            alcan2 = alcan2 + "                    <md-divider></md-divider>  "
            alcan2 = alcan2 + "                    <md-input-container class='md-block'>  "
            alcan2 = alcan2 + "                        <label>Frecuencia</label>  "
            alcan2 = alcan2 + "                        <md-select name='frecuencia' ng-model='ficha.model.frecuencia' aria-label='Frecuencia' required>  "
            alcan2 = alcan2 + "                            <md-option value='{{ item.ID }}' ng-repeat='item in ficha.combos.frecuencia'>  "
            alcan2 = alcan2 + "                                {{ item.DESCRIPCION | uppercase }}  "
            alcan2 = alcan2 + "                            </md-option>  "
            alcan2 = alcan2 + "                        </md-select>  "
            alcan2 = alcan2 + "                        <div ng-messages='step7.formFicha.frecuencia.$error' role='alert'>  "
            alcan2 = alcan2 + "                            <div ng-message='required'>Debe de seleccionar la frecuencia.</div>  "
            alcan2 = alcan2 + "                        </div>  "
            alcan2 = alcan2 + "                    </md-input-container>  "
            alcan2 = alcan2 + "                    <md-input-container class='md-block'>  "
            alcan2 = alcan2 + "                        <label>Cantidad</label>  "
            alcan2 = alcan2 + "                        <input name='cantidadPipas' ng-model='ficha.model.cantidadPipas' required type='tel'>  "
            alcan2 = alcan2 + "                        <div ng-messages='step7.formFicha.cantidadPipas.$error' role='alert'>  "
            alcan2 = alcan2 + "                            <div ng-message='required'>Debe de ingresar la cantidad de pipas.</div>  "
            alcan2 = alcan2 + "                        </div>  "
            alcan2 = alcan2 + "                    </md-input-container>  "
            alcan2 = alcan2 + "                </div>  "
            alcan2 = alcan2 + "                <!-- End Pipas -->  "
            alcan2 = alcan2 + "                <md-input-container class='md-block'>  "
            alcan2 = alcan2 + "                    <md-checkbox name='pozoPropio' ng-model='ficha.model.pozoPropio' aria-label='Pozo Propio'>  "
            alcan2 = alcan2 + "                        Pozo Propio  "
            alcan2 = alcan2 + "                    </md-checkbox>  "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "           </div> "
            alcan2 = alcan2 + "                <md-input-container class='md-block'> "
            alcan2 = alcan2 + "                    <label>Candelas Visibles</label> "
            alcan2 = alcan2 + "                    <input name='candelasVisibles' ng-model='ficha.model.candelasVisibles' type='tel'> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "                <md-input-container class='md-block'> "
            alcan2 = alcan2 + "                    <md-checkbox name='plantaTratamiento' aria-label='Planta de tratamiento' ng-model='ficha.model.plantaTratamiento'>Planta de tratamiento</md-checkbox> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "                <md-input-container class='md-block'> "
            alcan2 = alcan2 + "                    <md-checkbox name='pozoAbsorcion' aria-label='Pozo Absorcion' ng-model='ficha.model.pozoAbsorcion'>Pozo de Absorci&oacute;n</md-checkbox> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "                <md-input-container class='md-block' flex-offset='10' ng-if='ficha.model.pozoAbsorcion'> "
            alcan2 = alcan2 + "                    <label>Cantidad</label> "
            alcan2 = alcan2 + "                    <input name='cantPozoAbsor' ng-model='ficha.model.cantPozoAbsor' type='tel'> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "            </form> "
            alcan2 = alcan2 + "        </md-content> "
            alcan2 = alcan2 + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'> "
            alcan2 = alcan2 + "            <span class='md-subhead'>Almacenamiento</span> "
            alcan2 = alcan2 + "        </md-toolbar> "
            alcan2 = alcan2 + "        <md-content class='md-whiteframe-1dp'> "
            alcan2 = alcan2 + "            <form name='alcant22.formFicha'> "
            alcan2 = alcan2 + "                <div layout='row'> "
            alcan2 = alcan2 + "                    <md-input-container flex='50'> "
            alcan2 = alcan2 + "                        <label>Cisterna Elevada</label> "
            alcan2 = alcan2 + "                        <input name='cistElevadaAlcan' ng-model='ficha.model.cistElevadaAlcan' type='tel'> "
            alcan2 = alcan2 + "                    </md-input-container> "
            alcan2 = alcan2 + "                    <md-input-container flex='50'> "
            alcan2 = alcan2 + "                        <label>Cisterna Subt.</label> "
            alcan2 = alcan2 + "                        <input name='cistSubterraneaAlcan' ng-model='ficha.model.cistSubterraneaAlcan' type='tel'> "
            alcan2 = alcan2 + "                    </md-input-container> "
            alcan2 = alcan2 + "                </div> "
            alcan2 = alcan2 + "                <md-input-container class='md-block'> "
            alcan2 = alcan2 + "                    <md-checkbox name='tonelesAlcan' aria-label='Toneles' ng-model='ficha.model.tonelesAlcan'>Toneles</md-checkbox> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "                <md-input-container class='md-block' flex-offset='10' ng-if='ficha.model.tonelesAlcan'> "
            alcan2 = alcan2 + "                    <label>Cantidad</label> "
            alcan2 = alcan2 + "                    <input name='cantTonelesAlcan' ng-model='ficha.model.cantTonelesAlcan' type='tel'> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "                <md-input-container class='md-block'> "
            alcan2 = alcan2 + "                    <label>Observaciones</label> "
            alcan2 = alcan2 + "                    <textarea name='observaciones2' ng-model='ficha.model.observaciones2'></textarea> "
            alcan2 = alcan2 + "                </md-input-container> "
            alcan2 = alcan2 + "            </form> "
            alcan2 = alcan2 + "        </md-content> "
            alcan2 = alcan2 + "    </div> "
            alcan2 = alcan2 + "</div> ";

            var lastStep = " <div layout-padding class='scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}'> "
            lastStep = lastStep + "    <div layout-padding> "
            lastStep = lastStep + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'> "
            lastStep = lastStep + "            <span class='md-subhead'>Resultado Ficha</span> "
            lastStep = lastStep + "        </md-toolbar> "
            lastStep = lastStep + "        <md-content class='md-whiteframe-1dp'> "
            lastStep = lastStep + "            <form name='stepLast.formFicha'> "
            lastStep = lastStep + "                <div ng-if='ficha.toUpdate'> "
            lastStep = lastStep + "                    <md-input-container class='md-block'> "
            lastStep = lastStep + "                        <md-checkbox name='resultadoFicha' aria-label='Resultado Ficha' ng-model='ficha.model.resultadoFicha'>Resultado Ficha</md-checkbox> "
            lastStep = lastStep + "                    </md-input-container> "
            lastStep = lastStep + "                </div> "
            lastStep = lastStep + "                <div ng-if='!ficha.toUpdate || ficha.model.resultadoFicha'> "
            lastStep = lastStep + "                    <md-radio-group ng-model='ficha.model.resultF' required> "
            lastStep = lastStep + "                        <md-radio-button value='0' class='md-primary'> "
            lastStep = lastStep + "                            Carga Informaci&oacute;n "
            lastStep = lastStep + "                        </md-radio-button> "
            lastStep = lastStep + "                        <md-radio-button value='2' class='md-primary'> "
            lastStep = lastStep + "                            Cerrar Ficha "
            lastStep = lastStep + "                        </md-radio-button> "
            lastStep = lastStep + "                        <md-radio-button value='1' class='md-primary'> "
            lastStep = lastStep + "                            Asignar Trabajo "
            lastStep = lastStep + "                        </md-radio-button> "
            lastStep = lastStep + "                    </md-radio-group> "
            lastStep = lastStep + "                    <div ng-if='ficha.model.resultF == 2' flex-offset='10'> "
            lastStep = lastStep + "                        <!-- Cierre Ficha --> "
            lastStep = lastStep + "                        <md-divider></md-divider> "
            lastStep = lastStep + "                        <md-input-container class='md-block'> "
            lastStep = lastStep + "                            <label>Motivo Cierre</label> "
            lastStep = lastStep + "                            <md-select name='motivoCierre' ng-model='ficha.model.motivoCierre' aria-label='Motivo Cierre' required> "
            lastStep = lastStep + "                                <md-option value='{{ item.ID }}' ng-repeat='item in ficha.combos.cierreFicha | filter:ficha.filterCombo'> "
            lastStep = lastStep + "                                    {{ item.DESCRIPCION | uppercase }} "
            lastStep = lastStep + "                                </md-option> "
            lastStep = lastStep + "                            </md-select> "
            lastStep = lastStep + "                            <div ng-messages='stepLast.formFicha.motivoCierre.$error' role='alert'> "
            lastStep = lastStep + "                                <div ng-message='required'>Debe de seleccionar el motivo de cierre.</div> "
            lastStep = lastStep + "                            </div> "
            lastStep = lastStep + "                        </md-input-container> "
            lastStep = lastStep + "                        <md-input-container class='md-block'> "
            lastStep = lastStep + "                            <label>Observaciones</label> "
            lastStep = lastStep + "                            <textarea name='observacionesCierre' ng-model='ficha.model.observacionesCierre' required></textarea> "
            lastStep = lastStep + "                            <div ng-messages='stepLast.formFicha.observacionesCierre.$error' role='alert'> "
            lastStep = lastStep + "                                <div ng-message='required'>Debe de ingresar las Observaciones.</div> "
            lastStep = lastStep + "                            </div> "
            lastStep = lastStep + "                        </md-input-container> "
            lastStep = lastStep + "                    </div> "
            lastStep = lastStep + "                    <!-- End Cierre Ficha --> "
            lastStep = lastStep + "                    <div ng-if='ficha.model.resultF == 1' flex-offset='10'> "
            lastStep = lastStep + "                        <!-- Asignar Trabajo --> "
            lastStep = lastStep + "                        <md-divider></md-divider> "
            lastStep = lastStep + "                        <md-input-container class='md-block'> "
            lastStep = lastStep + "                            <label>Trabajo</label> "
            lastStep = lastStep + "                            <md-select name='trabajo' ng-model='ficha.model.trabajo' aria-label='Trabajo' required> "
            lastStep = lastStep + "                                <md-option value='{{ item.ID }}' ng-repeat='item in ficha.combos.trabajos | filter:ficha.filterCombo'> "
            lastStep = lastStep + "                                    {{ item.DESCRIPCION | uppercase }} "
            lastStep = lastStep + "                                </md-option> "
            lastStep = lastStep + "                            </md-select> "
            lastStep = lastStep + "                            <div ng-messages='stepLast.formFicha.trabajo.$error' role='alert'> "
            lastStep = lastStep + "                                <div ng-message='required'>Debe de seleccionar la asignaci&oacute;n de trabajo.</div> "
            lastStep = lastStep + "                            </div> "
            lastStep = lastStep + "                        </md-input-container> "
            lastStep = lastStep + "                        <md-input-container class='md-block'> "
            lastStep = lastStep + "                            <label>Motivo</label> "
            lastStep = lastStep + "                            <md-select ng-model='ficha.model.motivoTrabajo' aria-label='Motivo' required> "
            lastStep = lastStep + "                                <md-option value='{{ item.ID }}' ng-repeat='item in ficha.combos.motivosTrabajo | filter:ficha.filterCombo'> "
            lastStep = lastStep + "                                    {{ item.DESCRIPCION | uppercase }} "
            lastStep = lastStep + "                                </md-option> "
            lastStep = lastStep + "                            </md-select> "
            lastStep = lastStep + "                            <div ng-messages='stepLast.formFicha.motivoTrabajo.$error' role='alert'> "
            lastStep = lastStep + "                                <div ng-message='required'>Debe de seleccionar el motivo.</div> "
            lastStep = lastStep + "                            </div> "
            lastStep = lastStep + "                        </md-input-container> "
            lastStep = lastStep + "                        <md-input-container class='md-block'> "
            lastStep = lastStep + "                            <label>Observaciones</label> "
            lastStep = lastStep + "                            <textarea name='observacionesTrabajo' ng-model='ficha.model.observacionesTrabajo' required></textarea> "
            lastStep = lastStep + "                            <div ng-messages='stepLast.formFicha.observacionesTrabajo.$error' role='alert'> "
            lastStep = lastStep + "                                <div ng-message='required'>Debe de ingresar las Observaciones.</div> "
            lastStep = lastStep + "                            </div> "
            lastStep = lastStep + "                        </md-input-container> "
            lastStep = lastStep + "                    </div> "
            lastStep = lastStep + "                </div> "
            lastStep = lastStep + "                <!-- End Asignar Trabajo --> "
            lastStep = lastStep + "                <md-progress-linear ng-show='ficha.loadingFotosAlcan || ficha.loadingFotos' class='md-warn' md-mode='determinate' value='{{ficha.progressFotos}}' style='z-index: 999999;'></md-progress-linear> "
            lastStep = lastStep + "                <div layout-padding layout='row' layout-align='center center' ng-if='!ficha.toUpdate'> "
            lastStep = lastStep + "                    <md-button class='md-raised md-primary' aria-label='Guardar' ng-disabled='!stepLast.valid || (ficha.loadingFotos || ficha.loadingFotosAlcan)' ng-click='ficha.modifica($event)'> "
            lastStep = lastStep + "                        {{ ficha.textobutton }} "
            lastStep = lastStep + "                    </md-button> "
            lastStep = lastStep + "                </div> "
            lastStep = lastStep + "                <div layout-padding layout='row' layout-align='center center' ng-if='ficha.toUpdate'> "
            lastStep = lastStep + "                    <md-button class='md-raised md-accent' aria-label='Actualizar' ng-disabled='!stepLast.valid' ng-click='ficha.modifica($event)'>Actualizar</md-button> "
            lastStep = lastStep + "                </div> "
            lastStep = lastStep + "            </form> "
            lastStep = lastStep + "        </md-content> "
            lastStep = lastStep + "    </div> "
            lastStep = lastStep + "</div> ";

            var asigTrabajo = " <div layout-padding class='scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}'> "
            asigTrabajo = asigTrabajo + "    <div layout-padding> "
            asigTrabajo = asigTrabajo + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'> "
            asigTrabajo = asigTrabajo + "            <span class='md-subhead'>Asignaci&oacute;n de Trabajo</span> "
            asigTrabajo = asigTrabajo + "        </md-toolbar> "
            asigTrabajo = asigTrabajo + "        <md-content class='md-whiteframe-1dp'> "
            asigTrabajo = asigTrabajo + "            <form name='asigTrabajo.formFicha'> "
            asigTrabajo = asigTrabajo + "                        <!-- Asignar Trabajo --> "
            asigTrabajo = asigTrabajo + "                        <md-input-container class='md-block'> "
            asigTrabajo = asigTrabajo + "                            <label>Trabajo</label> "
            asigTrabajo = asigTrabajo + "                            <md-select name='trabajo' ng-model='ficha.model.trabajo' aria-label='Trabajo' required> "
            asigTrabajo = asigTrabajo + "                                <md-option value='{{ item.ID }}' ng-repeat='item in ficha.combos.trabajos | filter:ficha.filterCombo'> "
            asigTrabajo = asigTrabajo + "                                    {{ item.DESCRIPCION | uppercase }} "
            asigTrabajo = asigTrabajo + "                                </md-option> "
            asigTrabajo = asigTrabajo + "                            </md-select> "
            asigTrabajo = asigTrabajo + "                            <div ng-messages='asigTrabajo.formFicha.trabajo.$error' role='alert'> "
            asigTrabajo = asigTrabajo + "                                <div ng-message='required'>Debe de seleccionar la asignaci&oacute;n de trabajo.</div> "
            asigTrabajo = asigTrabajo + "                            </div> "
            asigTrabajo = asigTrabajo + "                        </md-input-container> "
            asigTrabajo = asigTrabajo + "                        <md-input-container class='md-block'> "
            asigTrabajo = asigTrabajo + "                            <label>Motivo</label> "
            asigTrabajo = asigTrabajo + "                            <md-select ng-model='ficha.model.motivoTrabajo' aria-label='Motivo' required> "
            asigTrabajo = asigTrabajo + "                                <md-option value='{{ item.ID }}' ng-repeat='item in ficha.combos.motivosTrabajo | filter:ficha.filterCombo'> "
            asigTrabajo = asigTrabajo + "                                    {{ item.DESCRIPCION | uppercase }} "
            asigTrabajo = asigTrabajo + "                                </md-option> "
            asigTrabajo = asigTrabajo + "                            </md-select> "
            asigTrabajo = asigTrabajo + "                            <div ng-messages='asigTrabajo.formFicha.motivoTrabajo.$error' role='alert'> "
            asigTrabajo = asigTrabajo + "                                <div ng-message='required'>Debe de seleccionar el motivo.</div> "
            asigTrabajo = asigTrabajo + "                            </div> "
            asigTrabajo = asigTrabajo + "                        </md-input-container> "
            asigTrabajo = asigTrabajo + "                        <md-input-container class='md-block'> "
            asigTrabajo = asigTrabajo + "                            <label>Observaciones</label> "
            asigTrabajo = asigTrabajo + "                            <textarea name='observacionesTrabajo' ng-model='ficha.model.observacionesTrabajo' required></textarea> "
            asigTrabajo = asigTrabajo + "                            <div ng-messages='asigTrabajo.formFicha.observacionesTrabajo.$error' role='alert'> "
            asigTrabajo = asigTrabajo + "                                <div ng-message='required'>Debe de ingresar las Observaciones.</div> "
            asigTrabajo = asigTrabajo + "                            </div> "
            asigTrabajo = asigTrabajo + "                        </md-input-container> "
            asigTrabajo = asigTrabajo + "                <!-- End Asignar Trabajo --> "
            asigTrabajo = asigTrabajo + "                <md-progress-linear ng-show='ficha.loadingFotosAlcan || ficha.loadingFotos' class='md-warn' md-mode='determinate' value='{{ficha.progressFotos}}' style='z-index: 999999;'></md-progress-linear> "
            asigTrabajo = asigTrabajo + "                <div layout-padding layout='row' layout-align='center center'> "
            asigTrabajo = asigTrabajo + "                    <md-button class='md-raised md-primary' aria-label='Guardar' ng-disabled='!asigTrabajo.valid || (ficha.loadingFotos || ficha.loadingFotosAlcan)' ng-click='ficha.modifica($event)'> "
            asigTrabajo = asigTrabajo + "                        {{ ficha.textobutton }} "
            asigTrabajo = asigTrabajo + "                    </md-button> "
            asigTrabajo = asigTrabajo + "                </div> "
            asigTrabajo = asigTrabajo + "            </form> "
            asigTrabajo = asigTrabajo + "        </md-content> "
            asigTrabajo = asigTrabajo + "    </div> "
            asigTrabajo = asigTrabajo + "</div> ";


            datosMed = " <div layout-padding class='scrollable-nav-content top-clear bottom-space speed-transition {{ficha.flow.currentAnimate}}'> "
            datosMed = datosMed + "    <div layout-padding> "
            datosMed = datosMed + "        <md-toolbar class='md-hue-2 toolbar-densed' layout='row' layout-align='center center'> "
            datosMed = datosMed + "            <span class='md-subhead'>Datos del Medidor</span> "
            datosMed = datosMed + "        </md-toolbar> "
            datosMed = datosMed + "        <md-content class='md-whiteframe-1dp'> "
            datosMed = datosMed + "            <form name='datosMed.formFicha'> "
            datosMed = datosMed + "                <md-input-container class='md-block'> "
            datosMed = datosMed + "                    <label>Nombre</label> "
            datosMed = datosMed + "                    <input name='nombre' ng-model='ficha.model.nombre' ng-disabled='ficha.medidorCorrecto' ng-required='ficha.model.medidor.length > 0'> "
            datosMed = datosMed + "                </md-input-container> "
            datosMed = datosMed + "                <md-input-container class='md-block'> "
            datosMed = datosMed + "                    <label>Direcci&oacute;n</label> "
            datosMed = datosMed + "                    <input name='direccion' ng-model='ficha.model.direccion' ng-disabled='ficha.medidorCorrecto' ng-required='ficha.model.medidor.length > 0'> "
            datosMed = datosMed + "                </md-input-container> "
            datosMed = datosMed + "                <md-input-container class='md-block'> "
            datosMed = datosMed + "                    <label>Medidor</label> "
            datosMed = datosMed + "                    <input name='medidor' ng-model='ficha.model.medidor' type='tel' ng-required='ficha.model.medidor.length > 0'> "
            datosMed = datosMed + "                </md-input-container> "
            datosMed = datosMed + "                <div layout-padding layout='row' layout-align='center center'> "
            datosMed = datosMed + "                    <md-button class='md-raised md-primary' aria-label='Consultar' ng-disabled='!datosMed.formFicha.medidor.$valid' ng-click='ficha.validaMedidor()'> "
            datosMed = datosMed + "                        Consultar Medidor "
            datosMed = datosMed + "                    </md-button> "
            datosMed = datosMed + "                </div> "
            datosMed = datosMed + "            </form> "
            datosMed = datosMed + "        </md-content> "
            datosMed = datosMed + "    </div> "
            datosMed = datosMed + "</div> ";


            $templateCache.put('template/fichaje-step1.html', template1);
            $templateCache.put('template/fichaje-step2.html', template2);
            $templateCache.put('template/fichaje-step3.html', template3);
            $templateCache.put('template/fichaje-step4.html', template4);
            $templateCache.put('template/fichaje-step5.html', template5);
            $templateCache.put('template/fichaje-step6.html', template6);
            $templateCache.put('template/fichaje-step7.html', template7);
            $templateCache.put('template/fichaje-step8.html', template8);
            $templateCache.put('template/fichaje-step9.html', template9);
            $templateCache.put('template/alcantarillado-step1.html', alcan1);
            $templateCache.put('template/alcantarillado-step2.html', alcan2);
            $templateCache.put('template/fichaje-stepLast.html', lastStep);
            $templateCache.put('template/fichaje-datos-medidor.html', datosMed);
            $templateCache.put('template/fichaje-asig-trabajo.html', asigTrabajo);

        })
        .config(function($mdThemingProvider, $stateProvider, $logProvider, $locationProvider, $urlRouterProvider) {
            $mdThemingProvider.theme('readonly-theme').backgroundPalette('indigo', { 'default': '50' });
            $logProvider.debugEnabled(true);
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "angular/template/list-fichajes.html",
                    controller: "ListFichajesCtrl",
                    controllerAs: "fichas"
                })
                .state("upload", {
                    url: "/upload",
                    templateUrl: "angular/template/fichaje-upload-photo.html",
                    controller: "FichajeUploadCtrl",
                    controllerAs: "upload",
                    params: { fichaId: null }
                }) // parent fichaje                
                .state("fichaje", {
                    url: "/fichaje",
                    templateUrl: "angular/template/fichaje.html",
                    controller: "FichajeCtrl",
                    controllerAs: "ficha",
                    params: { fichaId: null, toUpdate: null, tipo: null }
                }) // start nested states and views step1 to step10
                .state("fichaje.step1", { // step1
                    url: "/step1",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step1.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step1.html');
                            },
                            controller: "FichajeStep1Ctrl",
                            controllerAs: "step1"
                        }
                    }
                })
                .state("fichaje.step2", { // step2
                    url: "/step2",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step2.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step2.html');
                            },
                            controller: "FichajeStep2Ctrl",
                            controllerAs: "step2"
                        }
                    }
                })
                .state("fichaje.step3", { // step3
                    url: "/step3",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step3.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step3.html');
                            },
                            controller: "FichajeStep3Ctrl",
                            controllerAs: "step3"
                        }
                    }
                })
                .state("fichaje.step4", { // step4
                    url: "/step4",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step4.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step4.html');
                            },
                            controller: "FichajeStep4Ctrl",
                            controllerAs: "step4"
                        }
                    }
                })
                .state("fichaje.step5", { // step5
                    url: "/step5",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step5.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step5.html');
                            },
                            controller: "FichajeStep5Ctrl",
                            controllerAs: "step5"
                        }
                    }
                })
                .state("fichaje.step6", { // step6
                    url: "/step6",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step6.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step6.html');
                            },
                            controller: "FichajeStep6Ctrl",
                            controllerAs: "step6"
                        }
                    }
                })
                .state("fichaje.step7", { // step7
                    url: "/step7",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step7.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step7.html');
                            },
                            controller: "FichajeStep7Ctrl",
                            controllerAs: "step7"
                        }
                    }
                })
                .state("fichaje.step8", { // step8
                    url: "/step8",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step8.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step8.html');
                            },
                            controller: "FichajeStep8Ctrl",
                            controllerAs: "step8"
                        }
                    }
                })
                .state("fichaje.step9", { // step9
                    url: "/step9",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-step9.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-step9.html');
                            },
                            controller: "FichajeStep9Ctrl",
                            controllerAs: "step9"
                        }
                    }
                })
                .state("fichaje.alcant1", { // alcantarillado1
                    url: "/step9-alcant1",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/alcantarillado-step1.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/alcantarillado-step1.html');
                            },
                            controller: "AlcantarilladoStep1Ctrl",
                            controllerAs: "alcant1"
                        }
                    }
                })
                .state("fichaje.alcant2", { // alcantarillado2
                    url: "/step9-alcant2",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/alcantarillado-step2.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/alcantarillado-step2.html');
                            },
                            controller: "AlcantarilladoStep2Ctrl",
                            controllerAs: "alcant2"
                        }
                    }
                })
                .state("fichaje.stepLast", { // step10
                    url: "/stepLast",
                    views: {
                        "fichaje": {
                            //templateUrl: "angular/template/fichaje-stepLast.html",
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-stepLast.html');
                            },
                            controller: "FichajeStepLastCtrl",
                            controllerAs: "stepLast"
                        }
                    }
                })
                .state("fichaje.datosMed", { // datos del medidor
                    url: "/datosMed",
                    views: {
                        "fichaje": {
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-datos-medidor.html');
                            },
                            controller: "FichajeDatosMedidorCtrl",
                            controllerAs: "datosMed"
                        }
                    }
                })
                .state("fichaje.asigTrabajo", { // asigna trabajo
                    url: "/asigTrabajo",
                    views: {
                        "fichaje": {
                            templateProvider: function($templateCache) {
                                return $templateCache.get('template/fichaje-asig-trabajo.html');
                            },
                            controller: "FichajeAsignaTrabajoCtrl",
                            controllerAs: "asigTrabajo"
                        }
                    }
                });
        })
        .filter('nospace', function() {
            return function(value) {
                return (!value) ? '' : value.replace(/ /g, '');
            };
        })
        //replace uppercase to regular case
        .filter('humanizeDoc', function() {
            return function(doc) {
                if (!doc) return;
                if (doc.type === 'directive') {
                    return doc.name.replace(/([A-Z])/g, function($1) {
                        return '-' + $1.toLowerCase();
                    });
                }
                return doc.label || doc.name;
            };
        });
})(angular, TrabajoCampo || (TrabajoCampo = {}));