//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"

let ex1 = document.getElementsByTagName('input');
let p = document.getElementById('test');

function forP(){
    p.innerHTML = this.value;
};

for(let i = 0; i < ex1.length; i++){
    ex1[i].addEventListener('blur', forP)
};
