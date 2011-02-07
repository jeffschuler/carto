// Reference (read-only)
// ---------------------
// Model. MSS syntax reference.
var Reference = Backbone.Model.extend({
    url: 'js/reference.json'
});

var App = Backbone.View.extend({
    initialize: function(options) {
        this.el = options.el;
        this.settings = this.model;
        this.reference = this.options.reference;
        this.reference.fetch();
        (new ReferenceView()).show();
    }
});

// Application bootstrap.
$(function() {
    // Fix for [IE8 AJAX payload caching][1].
    // [1]: http://stackoverflow.com/questions/1013637/unexpected-caching-of-ajax-results-in-ie8
    $.ajaxSetup({ cache: false });

    // Create the app.
    window.app = new App({
        el: $('#app'),
        reference: new Reference()
    });

});
