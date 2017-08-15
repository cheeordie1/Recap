function makePageOutAnim (fadeOutContainerID, url) {
  var obj = this;
  obj.$fadeOutContainer = $("#" + fadeOutContainerID);
  obj.$fadeOutAnimationDiv = $("<div'></div>");
  obj.$fadeOutAnimationDiv.css ({
    "position" : "fixed",
    "z-index" : "9",
    "height" : "100vh",
    "width" : "100vw",
    "opacity" : "0",
    "background-color" : "#ffffff"
  });
  obj.$fadeOutAnimationDiv.appendTo (obj.$fadeOutContainer);
  obj.url = url;
  obj.$fadeOutAnimationDiv.animate ({
    opacity: 1 
  }, 800, function () {
    window.location = obj.url;
  });
};
