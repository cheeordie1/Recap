function makeAnimLink (linkID, fadeOutContainerID) {
  var obj = this;
  obj.$link = $("#" + linkID);
  obj.fadeOutContainerID = fadeOutContainerID;

  // Function to follow an animated link
  obj.followLink = function (clickEvt) {
    clickEvt.preventDefault ();
    obj.linkAnim = new makePageOutAnim (obj.fadeOutContainerID, 
                                        obj.$link.attr ('href'));
  };

  // Apply link anim to link
  obj.$link.on ('click', obj.followLink); 

  // Apply link anim to link children (for images)
  obj.$link.find ('*').each (function (idx, elem) {
    $(elem).on ('click', obj.followLink);
  });
};
