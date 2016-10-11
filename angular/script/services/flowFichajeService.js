(function() {
    angular.module("TrabajoCampo").factory("flowFichaje", function FlowFichajeProvider($state) {
        var stepList = new Array();
        // Listado de pantallas
        stepList.push("fichaje.step1");
        stepList.push("fichaje.step2");
        stepList.push("fichaje.step3");
        stepList.push("fichaje.step4");
        stepList.push("fichaje.step5");
        stepList.push("fichaje.step6");
        stepList.push("fichaje.step7");
        stepList.push("fichaje.step8");
        stepList.push("fichaje.step9");
        stepList.push("fichaje.step10");

        return {
            stepList: stepList,
            initStep: "fichaje.step1",
            nextStep: "fichaje.step2",
            prevStep: "",
            currentIndex: 0,
            isLast: false,
            isFirst: true,
            currentAnimate: "anim-slide-left",
            rightAnimate: "anim-slide-right",
            leftAnimate: "anim-slide-left",
            reset: function() {
                this.initStep = "fichaje.step1";
                this.nextStep = "fichaje.step2";
                this.prevStep = "";
                this.currentIndex = 0;
                this.isLast = false;
                this.isFirst = true;
                this.currentAnimate = "anim-slide-left";
                this.rightAnimate = "anim-slide-right";
                this.leftAnimate = "anim-slide-left";
            },
            move: function() {
                if (this.currentIndex == (this.stepList.length - 1)) {
                    this.isLast = true;
                } else {
                    this.isLast = false;
                }
                if (this.currentIndex == 0) {
                    this.isFirst = true;
                } else {
                    this.isFirst = false;
                }
            },
            next: function() {
                this.currentIndex++;
                this.currentAnimate = this.leftAnimate;
                this.nextStep = this.stepList[this.currentIndex];
                this.move();
            },
            prev: function() {
                this.currentIndex--;
                this.currentAnimate = this.rightAnimate;
                this.prevStep = this.stepList[this.currentIndex];
                this.move();
            }
        };
    });
})();