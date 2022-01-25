  $(window).scroll(function(){
    if($(document).scrollTop()>=$(document).height()/5)
      $("#spopup").show("slow");else $("").hide("slow");
  });
  function closeSPopup(){
    $('#spopup').hide('slow');
  }
