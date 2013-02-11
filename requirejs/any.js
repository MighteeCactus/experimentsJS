requirejs.config({
    baseUrl: "requirejs",
    paths: {
        jquery: "../vendors/jquery/release"
    }
});

requirejs(["jquery", "module1"], function($, module) {
    $("#someId").text("test");
    module.sayHello();
});