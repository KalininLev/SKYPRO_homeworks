//Task 1
let password = 'пароль';
let question = prompt('Введите пароль');
if (question == password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Task 2
let c = 7;
if ((c > 0) && (c < 10 )) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//c = 0 - Неверно
//c = 10 - Неверно
//c = -3 - Неверно
//c = 2 - Верно

//Task 3
let d = 64;
let e = 256;
if ((d > 100) || (e > 100)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Task 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

//Task 5
let monthNumber = prompt('Введите номер месяца!');
if (monthNumber > 0 && monthNumber <= 12) {
    switch (monthNumber) {
        case '1':
        case '2':
        case '12':
            alert('Зима!');
            break;
        case '3':
        case '4':
        case '5':
            alert('Весна!');
            break;
        case '6':
        case '7':
        case '8':
            alert('Лето!');
            break;
        case '9':
        case '10':
        case '11':
            alert('Осень!');
            break;
    }
} 

//Task 6

//Task 7
let number = prompt('Пожалуйста, введите любое число!')
if (isNaN(number)) {

} else {
    alert((number%2) === 0 ? 'Число четное!':'Число нечетное!')
}

//Task 8 and 9
let clientOS = 0;
let clientDeviceYear = 2015;
if (clientOS === 0) {
    if (clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для iOS по ссылке')
    } else { 
        console.log('Установите версию приложения для iOS по ссылке')
    }
} else if (clientOS === 1) {
    if (clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для Android по ссылке')
    } else { 
        console.log('Установите версию приложения для Android по ссылке')
    }
}
