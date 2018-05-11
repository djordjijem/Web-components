var btn = document.querySelectorAll('.btn');
var result = document.getElementById('result');
var count = document.getElementById('count');
var equals = document.getElementById('equals');
var percentage = document.getElementById('percentage');
var ce = document.getElementById('CE');
var del = document.getElementById('del');
 
function getElement(){
   count.innerText += this.textContent;
   result.innerHTML = '';
}
function eraseEl(){
    count.innerText = '';
    result.innerText = '';
}
function getResult() {
    result.innerText += eval(count.innerText);
    count.innerText = '';
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
btn.forEach(function(el){
    el.addEventListener('click', getElement);
});
equals.addEventListener('click', getResult);
del.addEventListener('click', delChar);
ce.addEventListener('click', eraseEl);
percentage.addEventListener('click', getProcent);

