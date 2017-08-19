function pageDownAnimation (clickButtonID, scrollElemID, offset) {
  var obj = this;
  obj.clickButtonID = clickButtonID;
  obj.scrollElemID = scrollElemID;
  obj.pixelsPerMilli = 100/100;
  obj.offset = offset;

  $("#" + obj.clickButtonID).on ('click', function (clickEvt) {
    clickEvt.preventDefault ();
    let scrollTo = $("#" + obj.scrollElemID).offset ().top - obj.offset;
    let scrollDistance = Math.abs ($("body").scrollTop () - scrollTo);
    let scrollTime = scrollDistance / obj.pixelsPerMilli;

    $("body").animate ({
      scrollTop: scrollTo
    }, scrollTime);
  });
};
