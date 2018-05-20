
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

//projects
(function(){
    "use strict";

var projects_content = document.querySelector('.projects-holder-content');    
var tabs = document.querySelectorAll('.projects-holder li');


function removeBgColor(){
    tabs.forEach(function(el){
        el.style.backgroundColor = 'inherit';
        el.style.color = 'black';
    });
}
function setColor(el){
    el.style.backgroundColor = 'rgb(76, 74, 74,0.9)';
    el.style.color = '#D961AD';
}

function removeContent(){
    projects_content.querySelectorAll('.holders').forEach(function(el) {
        el.style.display = 'none';
    });
}
function setDisplayAndColor(holder){
    projects_content.querySelector(holder).style.display = 'block';
}

tabs.forEach(function(el){
    el.addEventListener('click', function(event){
        
      switch(this.innerText){
          case 'Real Calculator':
            removeContent();
            setDisplayAndColor('.calculator-holder');
            removeBgColor();
            setColor(this);
          break;
          case 'Non-JS UI Components':
            removeContent();
            setDisplayAndColor('.non-JS-Components');
            removeBgColor();
            setColor(this);
          break;
          case 'Other Projects':
            removeContent();
            setDisplayAndColor('.other-projects');
            removeBgColor();
            setColor(this);
          break;
          case 'Forms':
            removeContent();
            setDisplayAndColor('.forms');
            removeBgColor();
            setColor(this);
          break;
          case 'Web Component':
            removeContent();
            setDisplayAndColor('.web-component');
            removeBgColor();
            setColor(this);
          break;
          case 'Shopping Cart':
            removeContent();
            setDisplayAndColor('.shopping-cart');
            removeBgColor();
            setColor(this);
          break;
          case 'Clock':
            removeContent();
            setDisplayAndColor('.clock');
            removeBgColor();
            setColor(this);
          break;
          default:
          return false;
          break;
      }
    },false);
});

})();