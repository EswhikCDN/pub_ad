  $(window).scroll(function(){
    if($(document).scrollTop()>=$(document).height()/1)
      $("#spopup").show("slow");else $("#spopup").hide("slow");
  });
  function closeSPopup(){
    $('#spopup').hide('slow');
  }
