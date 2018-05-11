(function(){
  "use strict";

  let heading = document.querySelectorAll('.heading');
 
  heading.forEach(function(el){
      el.addEventListener('click', function(e){
        let parent = this.parentElement.parentElement;
        let active = parent.querySelectorAll('.active');
        active[0].classList.remove('active'); 
        this.classList.add('active');   
      });
  });
})();