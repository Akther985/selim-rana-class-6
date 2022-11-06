$(document).ready(function (){


    $(".hide").click(function(){
        $("p").hide(900);
      });

      $(".show").click(function(){
        $("p").show(900);
      });

      $("button") .click (function(){
        $(".demo1") .fadeIn(2000);
      })
      $("button") .click (function(){
        $(".demo2") .fadeIn(5000);
      })
      $("button") .click (function(){
        $(".demo3") .fadeIn(1000);
      })


      $("button") .click (function(){
        $(".demo4") .fadeOut(2000);
      })
      $("button") .click (function(){
        $(".demo5") .fadeOut(5000);
      })
      $("button") .click (function(){
        $(".demo6") .fadeOut(1000);
      })


      $(".click-2") .click (function(){
        $(".zz") .addClass("text");
      })
    
    
    
})