"use strict";

var Game = (function($){
    var boxes = $('.box');

    function getRandom(max){
        return Math.floor(Math.random()* Math.floor(max));
    }
    function checkForDoubleScore(data){
        if($(".win").length === 0){
            $(boxes[data]).addClass('Y');
        }
    }
    //ima bug ovdje kad se updajtuje lose score,pogledati
    function updateScores(){
        if($('.win').length){
            if(!$('.my-res').text()){
                $(".my-res").text("10");
            }else{
                    $(".my-res").text(
                        String(Number($(".my-res").text()) + 10)   
                    );    
            }
        }
        if($('.lose').length){
            if(!$('.lose-res').text()){
                $(".lose-res").text("10");
            }else{
                    $(".lose-res").text(
                        String(Number($(".lose-res").text()) + 10)
                    );    
            }
        }
    }

    //Horizontal functions

    function scoreAnimationXHorizontal(box1,box2,box3){
        $(box1).append("<div class='horizontal win'></div>");
        $(box2).append("<div class='horizontal win'></div>");
        $(box3).append("<div class='horizontal win'></div>");
    }
    function scoreAnimationYhorizontal(box1,box2,box3){
        $(box1).append("<div class='horizontal lose'></div>");
        $(box2).append("<div class='horizontal lose'></div>");
        $(box3).append("<div class='horizontal lose'></div>");
    }
    function scoreHorizontalY(){
       
        if($(boxes[0]).hasClass('Y') && $(boxes[1]).hasClass('Y') && $(boxes[2]).hasClass('Y')){
            scoreAnimationYhorizontal(boxes[0],boxes[1],boxes[2]);
            return;
        }
        if($(boxes[3]).hasClass('Y') && $(boxes[4]).hasClass('Y') && $(boxes[5]).hasClass('Y')){
            scoreAnimationYhorizontal(boxes[3],boxes[4],boxes[5]);
            return;
        }
        if($(boxes[6]).hasClass('Y') && $(boxes[7]).hasClass('Y') && $(boxes[8]).hasClass('Y')){
            scoreAnimationYhorizontal(boxes[6],boxes[7],boxes[8]);
            return;
        }
    }
    function scoreHorizontalX(){
        if($(boxes[0]).hasClass('X') && $(boxes[1]).hasClass('X') && $(boxes[2]).hasClass('X')){
            scoreAnimationXHorizontal(boxes[0],boxes[1],boxes[2]);
            return;
        }
        if($(boxes[3]).hasClass('X') && $(boxes[4]).hasClass('X') && $(boxes[5]).hasClass('X')){
            scoreAnimationXHorizontal(boxes[3],boxes[4],boxes[5]);
            return;
        }
        if($(boxes[6]).hasClass('X') && $(boxes[7]).hasClass('X') && $(boxes[8]).hasClass('X')){
            scoreAnimationXHorizontal(boxes[6],boxes[7],boxes[8]);
            return;
        }
    }
    
    //Vertical functions
    
    function scoreAnimationXVertical(box1,box2,box3){
        $(box1).append("<div class='vertical win'></div>");
        $(box2).append("<div class='vertical win'></div>");
        $(box3).append("<div class='vertical win'></div>");
    }
    function scoreAnimationYVertical(box1,box2,box3){
        $(box1).append("<div class='vertical lose'></div>");
        $(box2).append("<div class='vertical lose'></div>");
        $(box3).append("<div class='vertical lose'></div>");
    }
    function scoreVerticalY(){
        if($(boxes[0]).hasClass('Y') && $(boxes[3]).hasClass('Y') && $(boxes[6]).hasClass('Y')){
            scoreAnimationYVertical(boxes[0],boxes[3],boxes[6]);
            return;
        }
        if($(boxes[1]).hasClass('Y') && $(boxes[4]).hasClass('Y') && $(boxes[7]).hasClass('Y')){
            scoreAnimationYVertical(boxes[1],boxes[4],boxes[7]);
            return;
        }
        if($(boxes[2]).hasClass('Y') && $(boxes[5]).hasClass('Y') && $(boxes[8]).hasClass('Y')){
            scoreAnimationYVertical(boxes[2],boxes[5],boxes[8]);
            return;
        }   
    }
    function scoreVerticalX(){
        if($(boxes[0]).hasClass('X') && $(boxes[3]).hasClass('X') && $(boxes[6]).hasClass('X')){
            scoreAnimationXVertical(boxes[0],boxes[3],boxes[6]);
            return;
        }
        if($(boxes[1]).hasClass('X') && $(boxes[4]).hasClass('X') && $(boxes[7]).hasClass('X')){
            scoreAnimationXVertical(boxes[1],boxes[4],boxes[7]);
            return;
        }
        if($(boxes[2]).hasClass('X') && $(boxes[5]).hasClass('X') && $(boxes[8]).hasClass('X')){
            scoreAnimationXVertical(boxes[2],boxes[5],boxes[8]);
            return;
        }   
    }
    
    //Vertical functions

    //Diagonal fns

    function scoreAnimationXDiagonalLeft(box1,box2,box3){
        $(box1).append("<div class='diagonal-left win'></div>");
        $(box2).append("<div class='diagonal-left win'></div>");
        $(box3).append("<div class='diagonal-left win'></div>");
    }
    function scoreAnimationXDiagonalRight(box1,box2,box3){
        $(box1).append("<div class='diagonal-right win'></div>");
        $(box2).append("<div class='diagonal-right win'></div>");
        $(box3).append("<div class='diagonal-right win'></div>");
    }
    function scoreAnimationYDiagonalLeft(box1,box2,box3){
        $(box1).append("<div class='diagonal-left lose'></div>");
        $(box2).append("<div class='diagonal-left lose'></div>");
        $(box3).append("<div class='diagonal-left lose'></div>");
    }
    function scoreAnimationyDiagonalRight(box1,box2,box3){
        $(box1).append("<div class='diagonal-right lose'></div>");
        $(box2).append("<div class='diagonal-right lose'></div>");
        $(box3).append("<div class='diagonal-right lose'></div>");
    }
    function scoreDiagonalX(){
        if($(boxes[0]).hasClass('X') && $(boxes[4]).hasClass('X') && $(boxes[8]).hasClass('X')){
            scoreAnimationXDiagonalLeft(boxes[0],boxes[4],boxes[8]);
            return;
        }
        if($(boxes[2]).hasClass('X') && $(boxes[4]).hasClass('X') && $(boxes[6]).hasClass('X')){
            scoreAnimationXDiagonalRight(boxes[2],boxes[4],boxes[6]);
            return;
        }   

    }
    function scoreDiagonalY(){
        if($(boxes[0]).hasClass('Y') && $(boxes[4]).hasClass('Y') && $(boxes[8]).hasClass('Y')){
            scoreAnimationYDiagonalLeft(boxes[0],boxes[4],boxes[8]);
            return;
        }
        if($(boxes[2]).hasClass('Y') && $(boxes[4]).hasClass('Y') && $(boxes[6]).hasClass('Y')){
            scoreAnimationyDiagonalRight(boxes[2],boxes[4],boxes[6]);
            return;
        }  
    }

    //Diagonal fns
    
    var count;

    function easyMode(){
      return  $('.box').click(function(ev){
       
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            
            //prevent double clicking on the same el
            if($(this).hasClass('X')) return;
            if($(this).hasClass('Y')) return;
            
            //if game goes on
            if($('.win').length === 0 && $('.lose').length === 0){
        
                $(this).addClass('X');
                count = getRandom(9);
                
                if(boxes[count] !== this && !$(boxes[count]).hasClass('Y') && !$(boxes[count]).hasClass('X')){
                    scoreHorizontalX();
                    scoreVerticalX();
                    scoreDiagonalX();
                    //before computer plays check for win condition
                    checkForDoubleScore(count);
                    scoreHorizontalY();
                    scoreVerticalY();
                    scoreDiagonalY();
                    updateScores();
                    return;
                }else{
                    for(var i = 0; i < boxes.length + 1; i++){
                        if(!$(boxes[i]).hasClass('X') && !$(boxes[i]).hasClass('Y')){
                            scoreHorizontalX();
                            scoreVerticalX();
                            scoreDiagonalX();
                            checkForDoubleScore(i);
                            scoreHorizontalY();
                            scoreVerticalY();
                            scoreDiagonalY();
                            updateScores();
                            return;
                        }
                    }
                }
            }
        });
    }
   
    function resetGame(){
        $(boxes).html("").removeClass("Y").removeClass("X");
    }
    // return
    return {
        easyMode : easyMode,
        resetGame : resetGame
    }
   
})(jQuery);


