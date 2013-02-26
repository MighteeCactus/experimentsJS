define(["backbone", "underscore", "jquery"], function(Backbone, _, $) {

    var Item = Backbone.Model.extend({
        defaults: {
            part1: "hello",
            part2: "world!"
        }
    });

    var List = Backbone.Collection.extend({
        model: Item
    });

    var ItemView = Backbone.View.extend({
        tagName: "li",

        initialize: function() {
            _.bindAll(this, "render");
        },

        render: function() {

            $(this.el).html("<span>" + this.model.get("part1") + " " + this.model.get("part2") + "</span>");

            return this;
        }
    });

    var ListView = Backbone.View.extend({
        el: $("body"),

        initialize: function() {
            _.bindAll(this, "render", "addItem", "appendItem");

            this.collection = new List();
            this.collection.bind("add", this.appendItem);

            this.counter = 0;
            this.render();
        },

        events: {
            "click button#add": "addItem"
        },

        render: function() {
            var self = this;

            $(this.el).append("<button id='add' >Add list Item</button>");
            $(this.el).append("<ul></ul>");

            _(this.collection.models).each(function (item) {
                self.appendItem(item);
            });
        },

        addItem: function() {
            this.counter++;

            var item = new Item();
            item.set({
                part2: item.get("part2") + this.counter
            });

            this.collection.add(item);
        },

        appendItem: function(item) {
            var itemView = new ItemView({
                model: item
            });

            $('ul', this.el).append(itemView.render().el);
        }
    });

    var listView = new ListView();

});