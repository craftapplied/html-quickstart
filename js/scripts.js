(function($, root, undefined) {
  $(function() {
    "use strict";

    /*
     * Setup Page
     */
    function setHeaderMargin() {
      var headerHeight = $("header.primary").outerHeight();
      $("main").css("padding-top", headerHeight);
    }
    setHeaderMargin();

    /*
     * Listen for browser resize
     */
    window.addEventListener(
      "resize",
      function() {
        setHeaderMargin();
        console.log("Calls resize");
      },
      false
    );
  });
})(jQuery, this);
