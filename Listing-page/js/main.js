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

var ancestorShoesId = document.getElementById('shoes').id;
var ancestorBootsId = document.getElementById('boots').id;

var promo_code_shoes = 'BIGSALE';
var promo_code_one_product = 'WELOVECODING';
var promo_code_for_all_products = 'SUPERSALE';


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
        
        let currentPriceValue = dupNode.children[0].children[1].children[3].innerHTML.split('$')[0];
        let currentPriceNumberVal = Number(currentPriceValue.replace(/[^0-9\.]+/g,""));
        //add value of item in the arr,used 100 for every,just //for example and clarity
        priceArr.push(currentPriceNumberVal);
        total__price.innerHTML = '';
        if(priceArr.length > 0){
            let totalPriceValue = priceArr.reduce(function(acc,next){
                return acc + next;
            },0);
            total__price.innerHTML = totalPriceValue + '$';
        }else {
            total__price.innerHTML = '';
         }
               
        select.addEventListener('change', function(e){
        
                var option_value = e.target.value;
                var numberValue = Number(option_value.replace(/[^0-9\.]+/g,""));
                var getPriceEl = dupNode.children[0].children[1].children[3];
                var getPriceValue = getPriceEl.innerHTML;
                var excludeDollarSign = getPriceValue.substring(0,3);
                var getPriceNumber = Number(excludeDollarSign.replace(/[^0-9\.]+/g,""));

                let currentPriceValue = dupNode.children[0].children[1].children[3].innerHTML.split('$')[0];
                let currentPriceNumberVal = Number(currentPriceValue.replace(/[^0-9\.]+/g,""));
                
               if(numberValue === 0){
                removeFromCart();
               }else{  
                (function (){
                    var priceIndex = priceArr.indexOf(currentPriceNumberVal);
                    getPriceEl.innerHTML = '';
                    priceArr.splice(priceIndex, 1, 100*numberValue);
                    getPriceEl.innerHTML = 100*numberValue + '$';
                })();
             }
             total__price.innerHTML = '';
             if(priceArr.length > 0){
                let totalPriceValue = priceArr.reduce(function(acc,next){
                    return acc + next;
                },0);
                total__price.innerHTML = totalPriceValue + '$';
             } else {
                total__price.innerHTML = '';
             }
         },false); 
        var removeButton = dupNode.children[0].children[1].lastElementChild;

        function removeFromCart(){
            dupNode.parentNode.removeChild(dupNode);
            var getPriceEl = dupNode.children[0].children[1].children[3];
            var getPriceValue = getPriceEl.innerHTML;
            var excludeDollarSign = getPriceValue.substring(0,3);
            var getPriceNumber = Number(excludeDollarSign.replace(/[^0-9\.]+/g,""));
            let index = priceArr.indexOf(getPriceNumber);
            priceArr.splice(index, 1);
            let totalPriceValue = priceArr.reduce(function(acc,next){
                return acc + next;
            },0);
            if(priceArr.length === 0){
                total__price.innerHTML = 0 + '$';
            }else{
                total__price.innerHTML = totalPriceValue + '$';
            } 
        }

        removeButton.addEventListener('click', removeFromCart);
       
        //Get Promotion only for shoes and snickers with "BIGSALE" code
        promoCode.addEventListener('input', function (e) {

            let ancestor = this.parentElement.parentElement.parentElement;
            let getPriceContainer = ancestor.children[0].children[1].children[3];
            let getPrice = ancestor.children[0].children[1].children[3].innerHTML.split('$')[0];
            let getPriceNumber = Number(getPrice.replace(/[^0-9\.]+/g,""));
            let comparePrices = getPriceNumber;
            //POTREBNO je uporediti cijenu poslije snizenja sa cijenom u arraju,kako bi se sprijecilo dvostruko snizenje (unosenje koda)
            if(ancestor.id === ancestorShoesId && this.value === promo_code_shoes){
                getPriceContainer.innerHTML = '';
                getPriceContainer.innerHTML = getPriceNumber * 0.85 + '$';
                   
            }else if(ancestor.id === ancestorBootsId && this.value === promo_code_shoes){
                getPriceContainer.innerHTML = '';
                getPriceContainer.innerHTML = getPriceNumber * 0.85 + '$';
            }
          });
    }

boots_btn.addEventListener('click', addNewElement, false);
car_btn.addEventListener('click', addNewElement, false);
chevi_btn.addEventListener('click', addNewElement, false);
scooter_btn.addEventListener('click', addNewElement, false);
glass_btn.addEventListener('click', addNewElement, false);
shoes_btn.addEventListener('click', addNewElement, false);