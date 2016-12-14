(function() {
    angular.module("TrabajoCampo").factory("flowRuteo", function FlowFichajeProvider($state) {
        var stepList = new Array();
        // Listado de pantallas        
        stepList.push("fichaje.datosMed");
        stepList.push("fichaje.step3");
        stepList.push("fichaje.step4");
        stepList.push("fichaje.step5");
        stepList.push("fichaje.step6");
        stepList.push("fichaje.step7");
        stepList.push("fichaje.step8");
        stepList.push(["fichaje.step9", "fichaje.alcant1", "fichaje.alcant2"]);
        stepList.push("fichaje.asigTrabajo");

        var totalSteps = 0;

        angular.forEach(stepList, function(value) {
            if (angular.isArray(value)) {
                totalSteps += value.length;
            }
            totalSteps++;
        });

        return {
            stepList: stepList,
            totalSteps: totalSteps,
            initStep: "fichaje.datosMed",
            nextStep: "fichaje.step3",
            prevStep: "",
            currentIndex: 0,
            currentIndexChild: -1,
            isLast: false,
            isFirst: true,
            currentAnimate: "anim-slide-left",
            rightAnimate: "anim-slide-right",
            leftAnimate: "anim-slide-left",
            progressStep: 0,
            reset: function() {
                this.initStep = "fichaje.datosMed";
                this.nextStep = "fichaje.step3";
                this.prevStep = "";
                this.progressStep = 0;
                this.currentIndex = 0;
                this.currentIndexChild = -1;
                this.isLast = false;
                this.isFirst = true;
                this.currentAnimate = "anim-slide-left";
                this.rightAnimate = "anim-slide-right";
                this.leftAnimate = "anim-slide-left";
            },
            move: function() {
                var currentSteps = this.currentIndex + 1 + this.currentIndexChild + 1;
                this.progressStep = (100 / this.totalSteps) * currentSteps;

                if (this.currentIndex == (this.stepList.length - 1)) {
                    this.isLast = true;
                    this.progressStep = 100;
                } else {
                    this.isLast = false;
                }
                if (this.currentIndex == 0) {
                    this.isFirst = true;
                    this.progressStep = 0;
                } else {
                    this.isFirst = false;
                }
            },
            next: function(hasChild) {
                // Get current Item
                var item = this.stepList[this.currentIndex];
                if (hasChild && angular.isArray(item)) { // La pagina actual tiene sub Paginas ?
                    if (this.currentIndexChild == (item.length - 1)) { //Se encuentra en la ultima pagina
                        // Avanza a la siguiente seccion
                        this.currentIndex++;
                        this.nextStep = this.stepList[this.currentIndex];
                    } else {
                        // Avanza a la siguiente sub pagina
                        this.currentIndexChild++;
                        this.nextStep = item[this.currentIndexChild];
                    }
                } else {
                    this.currentIndex++; // Se avanza a la siguiente pagina
                    item = this.stepList[this.currentIndex];
                    if (angular.isArray(item)) {
                        this.currentIndexChild = 0;
                        this.nextStep = item[this.currentIndexChild];
                    } else {
                        this.nextStep = item;
                    }
                }
                this.move();
                this.currentAnimate = this.leftAnimate;
            },
            prev: function(hasChild) {
                var item = this.stepList[this.currentIndex]; // Se obtiene la pagina actual
                if (hasChild && angular.isArray(item)) { // La pagina actual tiene sub Paginas ?                    
                    if (this.currentIndexChild == 0) { // Se encuentra en la primera pagina
                        // Retrocede a la anterior seccion
                        this.currentIndex--; // Baja el index
                        this.prevStep = this.stepList[this.currentIndex]; // obtiene el estado                        
                    } else {
                        // Retrocede a la anterior sub pagina
                        this.currentIndexChild--;
                        this.prevStep = item[this.currentIndexChild];
                    }
                } else {
                    this.currentIndex--; // Se retrocede a la anterior pagina
                    var item = this.stepList[this.currentIndex];
                    if (angular.isArray(item)) {
                        if (hasChild) { // Si la pagina anterior tiene sub paginas
                            this.currentIndexChild = (item.length - 1); // se accede a la ultima sub pagina                            
                        } else {
                            this.currentIndexChild = 0; // Se avanza la sub pagina 0 (La primera), es la default                            
                        }
                        this.prevStep = item[this.currentIndexChild]
                    } else {
                        this.prevStep = item;
                    }
                }
                this.move(); // Mueve la pantalla
                this.currentAnimate = this.rightAnimate;
            }
        };
    });
})();