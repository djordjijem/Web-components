var cart_content = document.getElementById('content__in__the__cart');
var show_content = document.querySelector('.all_cart_content');
var show_content_btn = document.getElementById('show-hide-cart');
var total__price = document.getElementById('totalPrice');
var promo_code_input = document.getElementById('promo-code');
//create arr for the total prices
var priceArr = []; // ****** THE KEY FOR THIS CODE IS IN THIS ARR,JUST FOLLOW THIS ARR IF U AIN'T CLEAR *******
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
var message = document.createElement('p');
var text = document.createTextNode('SUCCESSFUL');
message.appendChild(text);
message.style.color = 'green';

show_content.style.opacity = '0';
show_content_btn.addEventListener('click', function(e){
    if(show_content.style.opacity === '0'){
        show_content.style.opacity = '1';
    }else{
        show_content.style.opacity = '0';
    }
});
    //AddNewEl function
    function addNewElement() {

        show_content.style.opacity = '1';
        //get container from CLICKED product
        var parentElement = this.parentNode.parentNode.parentNode;
        //clone continer 
        var dupNode = parentElement.cloneNode(true);
        //get select el from cloned container
        var select = dupNode.children[0].children[1].children[0];
        select.style.opacity = '1';
        //get ADD TO BASKET btn and remove it from cloned el
        var add_to_basket_btn = dupNode.children[0].children[1].lastElementChild;
        add_to_basket_btn.parentNode.removeChild(add_to_basket_btn);
        //create new btn for cloned el,btnTxt,input,input name label,label txt,price el and price val and append it to CLONED el
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
        //get the price val,split string on '$' and convert '100' string into NUMBER
        let currentPriceValue = dupNode.children[0].children[1].children[3].innerHTML.split('$')[0];
        let currentPriceNumberVal = Number(currentPriceValue.replace(/[^0-9\.]+/g,""));
        //add value of item in the arr,used 100 for every,just for example and clarity
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
        //add event listener 'change' for  select element
        select.addEventListener('change', function(e){
                //get string value from selected target,convert it to NUMBER(from string)
                //get price string,aggain,after changing value of select,and replace it
                var option_value = e.target.value;
                var numberValue = Number(option_value.replace(/[^0-9\.]+/g,""));
                //get price value,on the el BEFORE the change
                var getPriceEl = dupNode.children[0].children[1].children[3];
                var getPriceValue = getPriceEl.innerHTML;
            
                let currentPriceValue = dupNode.children[0].children[1].children[3].innerHTML.split('$')[0];
                let currentPriceNumberVal = Number(currentPriceValue.replace(/[^0-9\.]+/g,""));
               
               if(numberValue === 0){
                removeFromCart();
               }else{  
                (function (){
                    //find the value BEFORE change,and update it with new value
                    var priceIndex = priceArr.indexOf(currentPriceNumberVal);
                    getPriceEl.innerHTML = '';
                    priceArr.splice(priceIndex, 1, 100*numberValue);
                    getPriceEl.innerHTML = 100*numberValue + '$';
                })();
             }
             //update total price
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
            //remove this node from the DOM
            dupNode.parentNode.removeChild(dupNode);
            //update the price,because it's been removed
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
        }//removeFromCart fn

        removeButton.addEventListener('click', removeFromCart);
       
        //Get 15% off for the shoes and snickers with "BIGSALE" code,use one time
        //listen the change on input with INPUT event
        promoCode.addEventListener('input', function (e) {
            //get the container for THIS el,get the ptices and update the priceArr
            let ancestor = this.parentElement.parentElement.parentElement;
            let getPriceContainer = ancestor.children[0].children[1].children[3];
            let getPrice = ancestor.children[0].children[1].children[3].innerHTML.split('$')[0];
            let getPriceNumber = Number(getPrice.replace(/[^0-9\.]+/g,""));
            let indexPrice = priceArr.indexOf(getPriceNumber);
            let totalPriceValue = priceArr.reduce(function(acc,next){
                return acc + next;
            },0);
            //check if the id form THIS ancestor (container) is the needed id (id from target div--ancestorShoesId)
            //check if the input value is promo code value
            if(ancestor.id === ancestorShoesId && this.value === promo_code_shoes){
               //update price,update priceArr
                getPriceContainer.innerHTML = '';
                priceArr.splice(indexPrice, 1, getPriceNumber*0.85);
                getPriceContainer.innerHTML = getPriceNumber * 0.85 + '$';
                promoCode.parentElement.replaceChild(message, promoCode);
                total__price.innerHTML = '';
                total__price.innerHTML = totalPriceValue - getPriceNumber + getPriceNumber*0.85 + 'S';
                //after submiting change all other codes,so they can't be used,cus the condition is USE EVERY CODE ONCE
                promo_code_one_product = 'aabbcceedd';
                promo_code_shoes = 'aabbcceedd';
                promo_code_for_all_products = 'aabbcceedd';
            }else if(ancestor.id === ancestorBootsId && this.value === promo_code_shoes){

                getPriceContainer.innerHTML = '';
                priceArr.splice(indexPrice, 1, getPriceNumber*0.85);
                getPriceContainer.innerHTML = getPriceNumber * 0.85 + '$'; 
                promoCode.parentElement.replaceChild(message, promoCode);
                total__price.innerHTML = '';
                total__price.innerHTML = totalPriceValue - getPriceNumber + getPriceNumber*0.85 + 'S';
                promo_code_one_product = 'aabbcceedd';
                promo_code_shoes = 'aabbcceedd';
                promo_code_for_all_products = 'aabbcceedd';
                //get 10% off on a car,use one time
            }else if(this.value === promo_code_one_product){

                getPriceContainer.innerHTML = '';
                priceArr.splice(indexPrice, 1, getPriceNumber*0.90);
                getPriceContainer.innerHTML = getPriceNumber * 0.90 + '$'; 
                promoCode.parentElement.replaceChild(message, promoCode);
                total__price.innerHTML = '';
                total__price.innerHTML = totalPriceValue - getPriceNumber + getPriceNumber*0.90 + 'S';
                promo_code_one_product = 'aabbcceedd';
                promo_code_shoes = 'aabbcceedd';
                promo_code_for_all_products = 'aabbcceedd';
            }
          },false);
           // get 5% off for complete order,use once
          promo_code_input.addEventListener('input', function (event) {
           
            if(this.value === promo_code_for_all_products){
        
                let totalPriceValue = priceArr.reduce(function(acc,next){
                    return acc + next;
                },0);
                total__price.innerHTML = '';
                total__price.innerHTML = totalPriceValue * 0.95 + '$';
                promo_code_one_product = 'aabbcceedd';
                promo_code_shoes = 'aabbcceedd';
                promo_code_for_all_products = 'aabbcceedd';
            }
        },false);

              
    }//Add new el function

boots_btn.addEventListener('click', addNewElement, false);
car_btn.addEventListener('click', addNewElement, false);
chevi_btn.addEventListener('click', addNewElement, false);
scooter_btn.addEventListener('click', addNewElement, false);
glass_btn.addEventListener('click', addNewElement, false);
shoes_btn.addEventListener('click', addNewElement, false);