
//header
(function(){
    "use strict";
   
let container = document.querySelector('.container');    
let hamburger = document.getElementById('hamburger');
let logo = document.querySelector('.logo');
let dropdown = document.querySelector('.dropdown');
let count = 1;

hamburger.addEventListener('click', function(event){
     if(count === 1){
        count = 0;
        logo.style.display = 'block';
        dropdown.style.display = 'block';
        this.innerHTML = '';
        this.innerHTML += '<i class="fas fa-times"></i>';
     }else {
        count = 1;
        logo.style.display = 'none';
        dropdown.style.display = 'none';
        this.innerHTML = '';
        this.innerHTML += '<i class="fas fa-bars"></i>';
     }
});
















})();