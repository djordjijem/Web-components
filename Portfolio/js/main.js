
//header
(function(){
    "use strict";
   
var container = document.querySelector('.container'), 
    hamburger = document.querySelector('.header__hamburger'),
    logo = document.querySelector('.header__logo'),
    dropdown = document.querySelector('.dropMenu'),
    count = 1,
    dropdownList = document.querySelectorAll('.dropMenu__item'),
    section = document.querySelectorAll('section'),
    searchIcon = document.querySelector('.header__searchElIcon'),
    closeModal = document.querySelector('.modal__span'),
    main = document.querySelector('.main'),
    input = document.querySelector('.header__searchEl input');

function initiateDropdown(marginLeft, width, dropdownMargin, mainMargin){
    logo.style.marginLeft = marginLeft;
    dropdown.style.width = width;
    dropdown.style.marginLeft = dropdownMargin;  
}
function changeIcons(current, content){
    current.innerHTML = '';
    current.innerHTML = content;
}

    hamburger.addEventListener('click', function(event){
        if(count === 1){
           count = 0;
           initiateDropdown('-5px', '120px', '-10px');
           section.forEach(function(el){
               el.style.marginLeft = '110px';
               el.style.transition = '0.6s';
           });
           changeIcons(this, '<i class="fas fa-times"></i>');
        }else {
           count = 1;
           initiateDropdown('-130px', '0', '-10px');
           section.forEach(function(el){
            el.style.marginLeft = '50px';
        });
        changeIcons(this, '<i class="fas fa-bars"></i>');
        }
   },false);
  
dropdownList.forEach(function (el) {
    el.addEventListener('click', function(ev){
        count = 1;
           initiateDropdown('-130px', '0', '-30px');
           section.forEach(function(el){
            el.style.marginLeft = '50px';
        });
        changeIcons(hamburger, '<i class="fas fa-bars"></i>');
    });
  });

   searchIcon.addEventListener('click', function(event){
     document.querySelector('.modal').style.display = 'block';
   });
   closeModal.addEventListener('click', function (event){
    document.querySelector('.modal').style.display = 'none';
  });

  window.addEventListener('scroll', function(e){
      dropdown.style.top = '0';
  });
  input.addEventListener('click',function(ev){
      document.querySelector('.header__searchElDiv p').style.fontSize = '1em';
      document.querySelector('.header__searchElDiv p').style.transition = '0.2s';
      ev.stopImmediatePropagation();
  });
  window.addEventListener('click',function(ev){
    document.querySelector('.header__searchElDiv p').style.fontSize = '1.4em';
});

})();

//projects
(function(){
    "use strict";

var projects_content = document.querySelector('.projects__holderContent'),
    tabs = document.querySelectorAll('.projects__listItems li');
 


function removeBgColor(){
    tabs.forEach(function(el){
        el.style.backgroundColor = 'inherit';
        el.style.color = 'black';
    });
}
function setColor(el){
    el.style.backgroundColor = 'rgb(76, 74, 74)';
    el.style.color = '#D961AD';
}

function removeContent(){
    projects_content.querySelectorAll('.projects__holders').forEach(function(el) {
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
                setDisplayAndColor('.projects__holders--calculator');
                removeBgColor();
                setColor(this);
              break;
              case 'Non-JS UI Components':
                removeContent();
                setDisplayAndColor('.projects__holders--non-JS-Components');
                removeBgColor();
                setColor(this);
              break;
              case 'Other Projects':
                removeContent();
                setDisplayAndColor('.projects__holders--other-projects');
                removeBgColor();
                setColor(this);
              break;
              case 'Forms':
                removeContent();
                setDisplayAndColor('.projects__holders--forms');
                removeBgColor();
                setColor(this);
              break;
              case 'Web Component':
                removeContent();
                setDisplayAndColor('.projects__holders--web-component');
                removeBgColor();
                setColor(this);
              break;
              case 'Shopping Cart':
                removeContent();
                setDisplayAndColor('.projects__holders--shopping-cart');
                removeBgColor();
                setColor(this);
              break;
              case 'Clock':
                removeContent();
                setDisplayAndColor('.projects__holders--clock');
                removeBgColor();
                setColor(this);
              break;
              default:
              break;
          }
        },false);
    });




})();
//carousel
(function(){
   "use strict";

    var content = document.querySelectorAll('.projects__Description'),
        right_arrow = document.querySelector('.projects__right-arrow'),
        left_arrow = document.querySelector('.projects__left-arrow'),
        count = 0,
        circles = document.querySelectorAll('.projects__circles--icon');

   function clear(){
      content.forEach(function(el){
        el.style.display = 'none';
    });
    circles.forEach(function (el) {
        el.style.backgroundColor = 'inherit';
      });
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

//skills
(function(){
    "use strict";
var skills = document.querySelectorAll('.skills__chartsItem');

skills.forEach(function(el){
    el.addEventListener('mouseover', function(ev){
        this.children[1].classList.toggle('show');
    },false);
    el.addEventListener('mouseleave', function(ev){
        this.children[1].classList.toggle('show');
    },false);
});

})();