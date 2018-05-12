(function(){
   "use strict";

   let img = document.querySelectorAll('.img-gallery');
   let container = document.getElementById('container');
   let modal = document.querySelector('.modal');
  

   function makeImageResponsive(image,div){
       image.style.width = "100%";
       image.style.heigth = 'auto';
       div.style.position = 'absolute';
       div.style.left = '20%';
       div.style.top = '10%';
       div.style.width = '60%'; 
       div.style.animation = 'zoomInImage 0.6s';
   }//make img responsive

   function getImage(event){

   if(document.querySelector('.new_div')) {
       let old_div = document.querySelector('.new_div');
       old_div.parentElement.removeChild(old_div);
   } 

     let new_div = document.createElement('div');
     new_div.classList.add('new_div');
     modal.appendChild(new_div);
     modal.style.display = 'block'; 
     let clonedImg = this.cloneNode(true);
     makeImageResponsive(clonedImg, new_div);
     new_div.appendChild(clonedImg);

     window.addEventListener('click', function (event) {
         if(event.target === modal){
             modal.style.display = 'none';
         }  
       });
   }//get image

   img.forEach(function(item){
    item.addEventListener('click', getImage);
   });
   
})();