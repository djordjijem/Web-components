var seven = document.querySelector('.seven'),
    eight = document.querySelector('.eight'),
    nine = document.querySelector('.nine'),
    zero = document.querySelector('.zero'),
    one = document.querySelector('.one'),
    two = document.querySelector('.two'),
    three = document.querySelector('.three'),
    four = document.querySelector('.four'),
    five = document.querySelector('.five'),
    six = document.querySelector('.six'),
    count = document.querySelector('.count span'),
    minus = document.querySelector('.subtraction'),
    plus = document.querySelector('.addition'),
    dot = document.querySelector('.dot'),
    percentage = document.querySelector('.percentage'),
    multiplication = document.querySelector('.multi'),
    division = document.querySelector('.division'),
    getRoot = document.querySelector('.CE'),
    result = document.querySelector('.result span'),
    open_br = document.querySelector('.open-br'),
    close_br = document.querySelector('.close-br');
    
 var eraseContent = document.querySelector('.C'),
     delOne = document.querySelector('.del'),
     equals = document.querySelector('.equals');
     
 
 
function getElement(){
    var text = document.createTextNode(this.textContent);
    count.appendChild(text);
    result.innerHTML = ''; 
}
function eraseEl(){
    count.innerHTML = '';
    result.innerHTML = '';
}
function getResult() {

    var content = count.innerHTML;
    var score = document.createTextNode(eval(content));

    result.appendChild(score);
    count.innerHTML = '';
}
function delChar(){

    var content = count.textContent;
    var res = document.createTextNode(content.substr(0,
    content.length - 1));

    count.innerHTML = '';
    count.appendChild(res);
}
function getProcent(){
    var text = document.createTextNode('*(1/100)');
    count.appendChild(text);
}

/* ADD Events and functionality */
one.addEventListener('click', getElement);
two.addEventListener('click', getElement);
three.addEventListener('click', getElement);
four.addEventListener('click', getElement);
five.addEventListener('click', getElement);
six.addEventListener('click', getElement);
seven.addEventListener('click', getElement);
eight.addEventListener('click', getElement);
nine.addEventListener('click', getElement);
zero.addEventListener('click', getElement);
minus.addEventListener('click', getElement);
plus.addEventListener('click', getElement);
dot.addEventListener('click', getElement);
percentage.addEventListener('click', getProcent);
multiplication.addEventListener('click', getElement);
division.addEventListener('click', getElement);
getRoot.addEventListener('click', getElement);
open_br.addEventListener('click',getElement);
close_br.addEventListener('click',getElement);
delOne.addEventListener('click', delChar);
eraseContent.addEventListener('click', eraseEl);
equals.addEventListener('click', getResult);


