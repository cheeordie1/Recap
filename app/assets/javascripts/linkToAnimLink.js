function makeAnimLink (linkID, fadeOutContainerID) {
  var obj = this;
  obj.$link = $("#" + linkID);
  obj.fadeOutContainerID = fadeOutContainerID;
  obj.$link.on ('click', function (e) {
    e.preventDefault ();
    obj.linkAnim = new makePageOutAnim (obj.fadeOutContainerID, 
                                        obj.$link.attr ('href'));
  }); 
};
