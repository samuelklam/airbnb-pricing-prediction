function includeContent(file) {
    var URL = window.location.href;
    URL = URL.substring(0, URL.lastIndexOf("/") + 1) + file;
    $("#includedContent").load(URL, function() {
        process();
    });
}

$(function() {
    includeContent("jupyter-notebooks/introduction.html");
});
