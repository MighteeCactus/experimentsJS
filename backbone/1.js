define(["backbone", "underscore", "jquery"], function(Backbone, _, $) {

    var ListView = Backbone.View.extend({
        el: $("body"),

        initialize: function() {
            _.bindAll(this, "render", "addItem");

            this.counter = 0;
            this.render();
        },

        events: {
            "click button#add": "addItem"
        },

        render: function() {
            $(this.el).append("<button id='add' >Add list Item</button>");
            $(this.el).append("<ul></ul>");
        },

        addItem: function() {
            this.counter++;
            $("ul", this.el).append("<li>added " + this.counter + "</li>");
        }
    });

    var listView = new ListView();

});