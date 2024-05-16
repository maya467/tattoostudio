$(document).ready(function(){
      
    $(".btn").click(function(){
        $("p").toggle();
        $("p.slow").slideToggle("slow");
        $("p.very-slow").slideToggle(2000);
        $("p.normal").slideToggle();
    });
   
    
});
