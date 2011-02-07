// ReferenceView
// -------------
// MSS syntax reference display in a drawer.
var ReferenceView = Backbone.View.extend({
    className: 'reference',
    events: {
        'click .reference-links a': 'show'
    },
    initialize: function (options) {
        _.bindAll(this, 'show');
        _.bindAll(this, 'render');
        this.render();
        var symbolizers = _.map(
            window.app.reference.toJSON().symbolizers,
            function(properties, symbolizer) {
                return {
                    properties: _.map(
                        properties,
                        function(property, name) {
                            return _.extend({
                                type: _.isArray(property.type)
                                    ? property.type.join(', ')
                                    : property.type
                            }, property);
                        }
                    ),
                    symbolizer: symbolizer
                };
            }
        );
        this.options = {
            title: 'Reference',
            content: ich.ReferenceView({ symbolizers: symbolizers }, true)
        };
    },
    render: function () {
        var that = this;
        window.app.el.append($(this.el));
        return this;
    },
    show: function(event) {
        // var link = $(event.target);
        // this.$('.reference-links a.active').removeClass('active');
        // this.$('.reference-section.active').removeClass('active');
        // link.addClass('active');
        // this.$('#' + section).addClass('active');
        return false;
    }
});
