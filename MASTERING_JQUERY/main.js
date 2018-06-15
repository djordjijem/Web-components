var boxes = $('.box');



function getRandom(max){
    return Math.floor(Math.random()* Math.floor(max));
}


function checkForDoubleScore(data){
    if($(".win").length === 0){
        $(boxes[data]).addClass('Y');
    }
}
//Horizontal functions

function scoreAnimationXHorizontal(box1,box2,box3){
    $(box1).append("<div class='horizontal win'></div>");
    $(box2).append("<div class='horizontal win'></div>");
    $(box3).append("<div class='horizontal win'></div>");
    $('.my-score > .res').html('10');
}
function scoreAnimationYhorizontal(box1,box2,box3){
    $(box1).append("<div class='horizontal lose'></div>");
    $(box2).append("<div class='horizontal lose'></div>");
    $(box3).append("<div class='horizontal lose'></div>");
    $('.lose-res').text('10');
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
    $('.my-score > .res').html('10');
}
function scoreAnimationYVertical(box1,box2,box3){
    $(box1).append("<div class='vertical lose'></div>");
    $(box2).append("<div class='vertical lose'></div>");
    $(box3).append("<div class='vertical lose'></div>");
    $('.lose-res').text('10');
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

var count;
$('.box').click(function(ev){
   
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation();

    if($(this).hasClass('X')) return;
    if($(this).hasClass('Y')) return;
    
    //if game goes on
    if($('.win').length === 0 && $('.lose').length === 0){

        $(this).addClass('X');
        count = getRandom(9);
        
        if(boxes[count] !== this && !$(boxes[count]).hasClass('Y') && !$(boxes[count]).hasClass('X')){
            scoreHorizontalX();
            scoreHorizontalY();
            scoreVerticalX();
            scoreVerticalY();
            checkForDoubleScore(count);
            return;
        }else{
            for(var i = 0; i < boxes.length; i++){
                if(!$(boxes[i]).hasClass('X') && !$(boxes[i]).hasClass('Y')){
                    scoreHorizontalX();
                    scoreHorizontalY();
                    scoreVerticalX();
                    scoreVerticalY();
                    checkForDoubleScore(i);
                    return;
                }
            }
        }
    }
    
   
});

//ima bug,kad se ispune sva polja,ako neko pobijedi ne prikazuje