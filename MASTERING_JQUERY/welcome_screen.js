"use strict";

var Welcome_screen = (function($){

function computer(){

    $('.play_vs_computer').click(function (ev) {

            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();

            $(".welcome-screen").css("z-index",1);
            $(".human-screen").css("z-index",1);
            $(".computer-screen").css("z-index",999);
            
    });
    $('.play_vs_human').click(function (ev) {

        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();

        $(".welcome-screen").css("z-index",1);
        $(".computer-screen").css("z-index",1);
        $(".human-screen").css("z-index",999);
        
     });
     $('a.back').click(function (ev) {

        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();

        $(".computer-screen").css("z-index",1);
        $(".human-screen").css("z-index",1);
        $(".welcome-screen").css("z-index",999);
     });
     $('a.easy').click(function (ev) {

        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();

        $(".computer-screen").css("display","none");
        $(".human-screen").css("display","none");
        $(".welcome-screen").css("display","none");
        Game.easyMode();
     });
     $('a.hard').click(function (ev) {

        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();

        $(".welcome-screen").css("z-index",1);
        $(".computer-screen").css("z-index",1);
        $(".human-screen").css("z-index",999);
     });
     $('.restart span').click(function(ev){

             ev.stopPropagation();

             $(".res").html("");
             Game.resetGame();
     });
     $('.next span').click(function(ev){
             
        ev.stopPropagation();
        
        Game.resetGame();
});

    }


    return { 
        computer : computer
    
      }



})(jQuery);