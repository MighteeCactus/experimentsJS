define(["backbone", "underscore", "jquery"], function(Backbone, _, $) {

    var ListView = Backbone.View.extend({
        el: $("body"),

        initialize: function() {
            _.bindAll(this, "render");

            this.render();
        },

        render: function() {
            $(this.el).append("<ul> <li> Hello Backbone! </li> </ul>");
        }
    });

    var listView = new ListView();

});