// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной

let ex1 = document.getElementsByTagName('input');

function forP(){
    let data_length = this.dataset.length;
    let input_length = this.value.length;
    if(data_length == input_length){
        this.style.borderColor = 'green';
    }
    else{
        this.style.borderColor = 'red';
    }
};

for(let i = 0; i < ex1.length; i++){
    ex1[i].addEventListener('blur', forP)
};