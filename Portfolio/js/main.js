
//header
(function(){
    "use strict";
   
let container = document.querySelector('.container');    
let hamburger = document.getElementById('hamburger');
let logo = document.querySelector('.logo');
let dropdown = document.querySelector('.dropdown-menu');
let count = 1;
let dropdownList = document.querySelectorAll('.dropdown li');
let section = document.querySelectorAll('section');

    hamburger.addEventListener('click', function(event){
        if(count === 1){
           count = 0;
           logo.style.marginLeft = '-5px';
           dropdown.style.width = '100px';
           dropdown.style.marginLeft = '-10px';
           section.forEach(function(el){
               el.style.marginLeft = '110px';
               el.style.transition = '0.6s';
           });
           this.innerHTML = '';
           this.innerHTML += '<i class="fas fa-times"></i>';
        }else {
           count = 1;
           logo.style.marginLeft = '-130px';
           dropdown.style.width = '0';
           dropdown.style.marginLeft = '-30px';
           section.forEach(function(el){
            el.style.marginLeft = '0';
        });
           this.innerHTML = '';
           this.innerHTML += '<i class="fas fa-bars"></i>';
        }
   },false);

})();