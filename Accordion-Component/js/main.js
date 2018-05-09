(function(){
  "use strict";

  let heading = document.querySelectorAll('.heading');
 
  heading.forEach(function(el){
      el.addEventListener('click', function(e){
        let active = document.querySelector('.active');
        active.classList.remove('active');  
        this.classList.add('active');   
      });
  });
})();