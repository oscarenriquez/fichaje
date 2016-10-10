(function() {
    angualr.module("TrabajoCampo").factory("flowFichaje", function($state) {
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
            initStep: "fichaje.step1",
            currentIndex: 0,
            isLast: false,
            isFirst: true,
            stepList: stepList,
            currentAnimate: "anim-slide-left",
            rightAnimate: "anim-slide-right",
            leftAnimate: "anim-slide-left",
            next: function() {
                this.currentIndex++;
                this.currentAnimate = this.leftAnimate;
                if (this.currentIndex == (this.stepList.length - 1)) {
                    this.isLast = true;
                } else {
                    this.isLast = false;
                }
                return this.stepList[currentIndex];
            },
            prev: function() {
                currentIndex--;
                this.currentAnimate = this.rightAnimate;
                if (this.currentIndex == (this.stepList.length - 1)) {
                    this.isFirst = true;
                } else {
                    this.isFirst = false;
                }
                return this.stepList[currentIndex];
            }
        };
    });
})();