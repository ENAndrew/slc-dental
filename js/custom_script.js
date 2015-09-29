$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : true,
      responsive: true,
      navigation: false
      
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
 
  });
 
});


$(document).ready(function() {
 
  $("#owl-small").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : true,
      responsive: true,
      navigation: false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

$(document).ready(function () {
    $(".topLink").on('click', function (event){
        event.preventDefault();
        var e = $(this); //writing $(this) every time is bad
        t = $("div[data-target='"+e.attr('data-target')+"']"); //same as above
        
        if(e.hasClass('active')){ 
            //remove from this
            e.removeClass("active");
            //close box    
            t.slideUp("slow");
        } else { //toggle menu when clicking on some other link
            //remove from everywhere
            $(".topLink").removeClass('active');
            //slide every box up
            $('.toggles').slideUp("slow");
            //add to this only
            e.addClass('active'); 
            //slide associated box down
            t.slideDown("slow");
        }
    });
    $(document).on('click','.myCustomButton',function(event){
        event.preventDefault();
        $('.topLink').removeClass('active');
        $('.toggles').slideUp("slow"); // maybe you need it, maybe you don't - most likely you do
    })
});

