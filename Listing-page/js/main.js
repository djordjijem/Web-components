var cart_content = document.getElementById('content__in__the__cart');
var add_btn = document.getElementsByClassName('products');


for(let i = 0; i < add_btn.length; i++){
    add_btn[i].addEventListener('click', function (event) {
 
      
      var dupNode = this.cloneNode([]);
      console.log(dupNode)
       
        
   });

}

