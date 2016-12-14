$(function() {
  function includeContent(file) {
    var URL = window.location.href;
    URL = URL.substring(0, URL.lastIndexOf("/") + 1) + file;
    $(function(){
      $("#includedContent").load(URL);
    });
  }
  $(function() {
    includeContent("juptyer-notebooks/data-cleaning-listing.html");
  });
});
