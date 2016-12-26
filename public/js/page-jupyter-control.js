function includeContent(file, fn) {
    var URL = window.location.href;
    URL = URL.substring(0, URL.lastIndexOf("/") + 1) + file;
    $("#includedContent").load(URL, function() {
        fn.call(this);
    });
}

$(function() {
    includeContent("jupyter-notebooks/introduction.html");
});
