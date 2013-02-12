requirejs.config({
    paths: {
        three: "../vendors/three.js/build/three",
        sim: "../vendors/sim.js/sim/sim",
        jquery: "../vendors/jquery/dist/jquery",
        jquery_mousewheel: "../vendors/jquery-mousewheel/jquery.mousewheel",
        earth: "earth",
        requestAnimationFrame: "../libs/RequestAnimationFrame"
    },
    shim: {
        jquery: { exports: "$" },
        jquery_mousewheel: { deps: ["jquery"] },
        three: { exports: "THREE" },
        sim: { deps: ["three", "jquery", "jquery_mousewheel"], exports: "Sim" },
        earth: { deps: ["three", "sim"], exports: "EarthApp" }
    }
});

//requirejs(["simpleSquare"]);
//requirejs(["simpleCube"]);
requirejs(["earth", "jquery"], function(EarthApp, $) {
    var container = $("#container").get(0);
    var canvas = $("#myCanvas").get(0);
    var earthApp = new EarthApp();
    earthApp.init({ container: container, canvas: canvas });
});