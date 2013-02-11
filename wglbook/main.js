requirejs.config({
    paths: {
        three: "../vendors/three.js/build/three",
        sim: "../vendors/sim.js/sim/sim",
        jquery: "../vendors/jquery/release",
        earth: "earth",
        requestAnimationFrame: "../libs/RequestAnimationFrame"
    },
    shim: {
        three: { exports: "three" },
        sim: { depend: ["three"], exports: "Sim" },
        earth: { depend: ["three", "sim"], exports: "EarthApp" }
    }
});

//requirejs(["simpleSquare"]);
//requirejs(["simpleCube"]);
requirejs(["earth"], function(EarthApp) {
    var container = document.getElementById("container");
    var canvas = document.getElementById("myCanvas");
    var earthApp = new EarthApp();
    earthApp.init({ container: container, canvas: canvas });
});