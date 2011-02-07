// Application bootstrap.
$(function() {
    // Convert any markdown sections to HTML.
    $('.md').each(function() {
        var text = $(this).html();
        text = (new Showdown.converter()).makeHtml(text);
        $(this).html(text);
    });
});
