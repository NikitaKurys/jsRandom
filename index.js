let n = Math.floor(Math.random() * 1000);
console.log(n);
let i = 1;

while(i > 0){
    let result = prompt("Попробуйте угадать число :) \nДля выхода из программы нажмите 'q'");

    if (isNaN(result) === false){
        if (result > n){
            alert('Ваше число больше');
        }
        else if (result < n){
            alert('Ваше число меньше');
        }
        else{
            alert('В яблочко!');
        }
    }
    else if (result === 'q') {
        break;
    }
    else{
        alert('Введите,пожалуйста,ЧИСЛО')
    }
}