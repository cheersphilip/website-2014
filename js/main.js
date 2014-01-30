$(document).ready(function(){

  //thanks to Gonçalo Peres on stackoverflow.com for the $is_mobile snippet
  var $is_mobile = false;
  if( $('#mobile-detect').css('display') === 'none' ) {
      $is_mobile = true;      
  } // now i can use $is_mobile to run javascript conditionally

  //and thanks to aximili for this one:
  var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|webOS|IEMobile|Opera Mini)/);
  
  if(!$is_mobile || !isMobile) {
    x=700; // can also be window.innerHeight for responsive design, altough I found this made positioning of elements more hassle than I had time for;
    
    midScrollFactor=2;
    forScrollFactor=3;
    
    $("#bgrnd .page").height(x);
    $("#mdgrnd .page").height(midScrollFactor*x);
    $("#fgrnd .page").height(forScrollFactor*x);
    
    mdOffset=Math.round(0-(((midScrollFactor*x)-x)/2));
    fOffset=Math.round(0-(((forScrollFactor*x)-x)/2));
    
    $("#mdgrnd .last").height((midScrollFactor*x)+mdOffset);
    $("#fgrnd .last").height((forScrollFactor*x)+fOffset);
    
    $("#mdgrnd").css("top",mdOffset);
    $("#fgrnd").css("top",fOffset);
    
    t= Math.round($("#bgrnd .top").css("top").replace("px",""));
    
    midTopVar = Math.round(x*midScrollFactor/2 - x/2 + t);
    $("#mdgrnd .top").css("top",midTopVar + "px"); 
    
    forTopVar = Math.round(x*forScrollFactor/2 - x/2 + t);
    $("#fgrnd .top").css("top",forTopVar + "px"); 
    
    paraScroll = function(){
      scrollVar = window.pageYOffset;
      midScrollVar = mdOffset - (scrollVar * midScrollFactor) + scrollVar;
      forScrollVar = fOffset - (scrollVar * forScrollFactor) + scrollVar;
      $("#mdgrnd").css("top",midScrollVar);
      $("#fgrnd").css("top",forScrollVar);
    };
  } else {
    $(".page, .last").height(750);
  }
});