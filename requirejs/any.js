requirejs.config({
    baseUrl: "requirejs",
    paths: {
        jquery: "../libs/jquery-1.8.3.min"
    }
});

requirejs(["jquery", "module1"], function($, module) {
    $("#someId").text("test");
    module.sayHello();
});