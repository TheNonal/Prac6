// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

let ex1 = document.getElementsByTagName('input');
function forP(){
    alert(this.value);
    this.removeEventListener('click', forP);
};

for(let i = 0; i < ex1.length; i++){
    ex1[i].addEventListener('click', forP)
};