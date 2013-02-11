requirejs.config({
    paths: {
        three: "../vendors/three.js/build/three",
        jquery: "../vendors/jquery/release",
        requestAnimationFrame: "../libs/RequestAnimationFrame"
    },
    shim: {
        three: { exports: "THREE" }
    }
});

//requirejs(["simpleSquare"]);
requirejs(["simpleCube"]);