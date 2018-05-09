(function(){
   "use strict";

   let btn = document.querySelectorAll('.btn');
   let contentOne = document.querySelectorAll('.contents .content-one');
   let btnOne = document.querySelectorAll('.tab .btn-one');

        btnOne.forEach(function(el){
            el.style.backgroundColor = 'rgb(59, 59, 61';
            el.style.color = 'white';
        });  
        
        contentOne.forEach(function(el){
            el.style.display = 'block';
        });

     btn.forEach(function (el){  
        el.addEventListener('click' , function(e){
         let btnOne = this.parentElement.parentElement.children[0].children[0];
         let btnTwo = this.parentElement.parentElement.children[1].children[0];
         let btnThree = this.parentElement.parentElement.children[2].children[0];
         let btnFour = this.parentElement.parentElement.children[3].children[0];
         let btns = [];
         btns.push(btnOne, btnTwo, btnThree, btnFour);
        
        btns.forEach(function(el){
            el.style.backgroundColor = 'beige';
            el.style.color = 'rgb(59, 59, 61';   
        });    
        this.style.backgroundColor = 'rgb(59, 59, 61';
        this.style.color = 'white';
      
        let contents = this.parentElement.parentElement.children[4];
       
        switch(this.classList[0]){
            case "btn-one":
            contents.children[0].style.display = 'block'
            contents.children[1].style.display = 'none'
            contents.children[2].style.display = 'none'
            contents.children[3].style.display = 'none'
            break;
            case "btn-two":
            contents.children[0].style.display = 'none'
            contents.children[1].style.display = 'block'
            contents.children[2].style.display = 'none'
            contents.children[3].style.display = 'none'
            break;
            case "btn-three":
            contents.children[0].style.display = 'none'
            contents.children[1].style.display = 'none'
            contents.children[2].style.display = 'block'
            contents.children[3].style.display = 'none'
            break;
            case "btn-four":
            contents.children[0].style.display = 'none'
            contents.children[1].style.display = 'none'
            contents.children[2].style.display = 'none'
            contents.children[3].style.display = 'block'
            break;
            default:
              return false;
        }
       }); 
   })
})();