
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
let searchIcon = document.querySelector('.search-el i');
let closeModal = document.querySelector('.modal span');
let main = document.querySelector('.main');

function initiateDropdown(marginLeft, width, dropdownMargin, mainMargin){
    logo.style.marginLeft = marginLeft;
    dropdown.style.width = width;
    dropdown.style.marginLeft = dropdownMargin;
    main.style.marginLeft = mainMargin;
}
function changeIcons(current, content){
    current.innerHTML = '';
    current.innerHTML = content;
}

    hamburger.addEventListener('click', function(event){
        if(count === 1){
           count = 0;
           initiateDropdown('-5px', '100px', '-10px', '0');
           section.forEach(function(el){
               el.style.marginLeft = '110px';
               el.style.transition = '0.6s';
           });
           changeIcons(this, '<i class="fas fa-times"></i>')
        }else {
           count = 1;
           initiateDropdown('-130px', '0', '-10px', '40px');
           section.forEach(function(el){
            el.style.marginLeft = '0';
        });
        changeIcons(this, '<i class="fas fa-bars"></i>');
        }
   },false);
  
dropdownList.forEach(function (el) {
    el.addEventListener('click', function(ev){
        count = 1;
           initiateDropdown('-130px', '0', '-30px');
           section.forEach(function(el){
            el.style.marginLeft = '0';
        });
        changeIcons(hamburger, '<i class="fas fa-bars"></i>');
    })
  })

   searchIcon.addEventListener('click', function(event){
     document.querySelector('.modal').style.display = 'block';
   });
   closeModal.addEventListener('click', function (event){
    document.querySelector('.modal').style.display = 'none';
  });


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
//carousel
(function(){
   "use strict";

   let content = document.querySelectorAll('.project-description');
   let right_arrow = document.querySelector('.right-arrow');
   let left_arrow = document.querySelector('.left-arrow');
   let count = 0;
   let circles = document.querySelectorAll('.circle');

   function clear(){
      content.forEach(function(el){
        el.style.display = 'none';
    });
    circles.forEach(function (el) {
        el.style.backgroundColor = 'inherit';
      })
   }
   function start(){
    clear();
    content[0].style.display = 'block';
    circles[0].style.backgroundColor = 'white';
   }
   function slideLeft(){
       clear();
       content[count-1].style.display = 'block';
       circles[count-1].style.backgroundColor = 'white';
       count--; 
   }
   function slideRight(){
       clear();
       content[count+1].style.display = 'block';
       circles[count+1].style.backgroundColor = 'white';
       count++;
   }
   left_arrow.addEventListener('click', function(ev){
        if(count === 0){
           count = content.length;
       }
       slideLeft();
   },false);
   right_arrow.addEventListener('click', function(ev){
    if(count === content.length - 1){
        count = -1;
    }
     slideRight();
   },false);
function setCircles(num){
    content[num].style.display = 'block';
     circles[num].style.backgroundColor = 'white';
}
circles.forEach(function(el){
    el.addEventListener('click', function(ev){
        if(el === circles[0]){
            clear();
           setCircles(0);
           count = 0;
        }
        if(el === circles[1]){
            clear();
           setCircles(1);
           count = 1;
        }
        if(el === circles[2]){
           clear();
           setCircles(2);
           count = 2;
        }
        if(el === circles[3]){
            clear();
           setCircles(3);
           count = 3;
        } 
    },false);

});

start();
   
})();