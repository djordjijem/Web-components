var cart_content = document.getElementById('content__in__the__cart');
var total__price = document.getElementById('totalPrice');
//create arr for the total prices
var priceArr = [];
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
        label.setAttribute('for','promocode');
        var priceElement = document.createElement('p');
        priceElement.classList.add('productPrice');
        var priceValue = document.createTextNode('100$');
        priceElement.appendChild(priceValue);
       

        dupNode.children[0].children[1].appendChild(priceElement);
        dupNode.children[0].children[1].appendChild(promoCode);
        dupNode.children[0].children[1].appendChild(label);
       
        dupNode.children[0].children[1].appendChild(newBtn);
        cart_content.appendChild(dupNode);
        
        //add value of item in the arr,used 100 for every,just //for example and clarity
        priceArr.push(100);

            select.addEventListener('change', function(e){
        
                var option_value = e.target.value;
             
                var numberValue = Number(option_value.replace(/[^0-9\.]+/g,""));
                var getPriceEl = dupNode.children[0].children[1].children[3];
                
                var getPriceValue = getPriceEl.innerHTML;
               
                var excludeDollarSign = getPriceValue.substring(0,3);
                var getPriceNumber = Number(excludeDollarSign.replace(/[^0-9\.]+/g,""));
                
                
               
                
                
               if(numberValue === 0){
                removeFromCart();
               var index = priceArr.indexOf(100);
                  if(index > -1){
                      priceArr.splice(index,1);
                  }
                 
            }else{
                getPriceEl.innerHTML = '';
                var priceValue = getPriceNumber*numberValue + '$'
                getPriceEl.innerHTML = priceValue;
                var index = priceArr.indexOf(100);
                  if(index > -1){
                      priceArr.splice(index,1);
                      priceArr.push(100*numberValue);
                  }
            }
              console.log(priceArr);
               
            },false);
       
       

        var removeButton = dupNode.children[0].children[1].lastElementChild;

        function removeFromCart(){
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
 
    
var abc = [1,2,3,4];
var index = abc.indexOf(2);
if(index > -1){
    abc.splice(index,1);
}


   var aaa = abc.reduce(function(acc,edd){
       return acc + edd;
   },0)

   console.log(aaa)
