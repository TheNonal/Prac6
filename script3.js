// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.

let ex1 = document.getElementsByTagName('p');

function forP(){
    this.innerHTML = this.innerHTML * this.innerHTML;
};

for(let i = 0; i < ex1.length; i++){
    ex1[i].addEventListener('click', forP)
};