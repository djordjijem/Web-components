var cart_content = document.getElementById('content__in__the__cart');

//GET BUTTONS
var boots_btn = document.getElementById('add--boots--basket');
var car_btn = document.getElementById('add--car--basket');
var chevi_btn = document.getElementById('add--chevi--basket');
var scooter_btn = document.getElementById('add--scooter--basket');
var glass_btn = document.getElementById('add--glass--basket');
var shoes_btn = document.getElementById('add--shoes--basket');


    function addNewElement() {
        
        var parentElement = this.parentNode.parentNode.parentNode; 
        var dupNode = parentElement.cloneNode(true);
        
        var select = dupNode.children[0].children[1].children[0];
        select.style.opacity = '1';

        var add_to_basket_btn = dupNode.children[0].children[1].lastElementChild;
        add_to_basket_btn.parentNode.removeChild(add_to_basket_btn);

        var newBtn = document.createElement("button");
        var newBtnTxt = document.createTextNode('Remove From Cart');
        newBtn.appendChild(newBtnTxt);
        var promoCode = document.createElement('input');
        var promoCodeName = promoCode.setAttribute('name','promocode');
        var promoCodetype = promoCode.setAttribute('type','text');
        var label = document.createElement('label');
        var textForLabel = document.createTextNode('Enter promo code');
        label.appendChild(textForLabel);
        var labelAttr = label.setAttribute('for','promocode');
        var priceElement = document.createElement('p');
        priceElement.classList.add('productPrice');
        var priceValue = document.createTextNode('100$');
        priceElement.appendChild(priceValue);
       

        dupNode.children[0].children[1].appendChild(priceValue);
        dupNode.children[0].children[1].appendChild(promoCode);
        dupNode.children[0].children[1].appendChild(label);
       
        dupNode.children[0].children[1].appendChild(newBtn);
        cart_content.appendChild(dupNode);
       
        var removeButton = dupNode.children[0].children[1].lastElementChild;

        function removeFromCart(e){
            dupNode.parentNode.removeChild(dupNode);
        }

        removeButton.addEventListener('click', removeFromCart);
      
    }

boots_btn.addEventListener('click', addNewElement, false);
car_btn.addEventListener('click', addNewElement, false);
chevi_btn.addEventListener('click', addNewElement, false);
scooter_btn.addEventListener('click', addNewElement, false);
glass_btn.addEventListener('click', addNewElement, false);
shoes_btn.addEventListener('click', addNewElement, false);
 
    

   


