requirejs.config({
    paths: {
        three: "../libs/three.js/build/three",
        jquery: "../libs/jquery-1.8.3.min",
        requestAnimationFrame: "../libs/RequestAnimationFrame"
    },
    shim: {
        three: { exports: "THREE" }
    }
});

//requirejs(["simpleSquare"]);
requirejs(["simpleCube"]);