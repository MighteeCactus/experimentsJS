requirejs.config({
    paths: {
        jquery: "../vendors/jquery/dist/jquery",
        underscore: "../vendors/underscore/underscore",
        backbone: "../vendors/backbone/backbone"
    },
    shim: {
        "underscore": { exports: "_" },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});


requirejs(["1"]);