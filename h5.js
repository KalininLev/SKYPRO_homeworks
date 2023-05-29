// //Task 1
// function num(a, b) {
//     if (a >= b) {
//         return a
//     } else {
//         return b
//     }
// }

// console.log(num(10, 10))

// //Task 2
// function num(n) {
//     if (n % 2 == 0) {
//         return 'Число четное'
//     } else {
//         return 'Число нечетное'
//     }
// }

// console.log(num(349));

// //Task 3
// const squaring = (num) => {
//     let result = num * num;
//     console.log(result);
//     return result;
// }
// squaring(64)

// //Task 4
// function hello() {
//     let age = prompt('Сколько Вам лет?');
//     if (age >= 13) {
//         alert('Добро пожаловать!');
//     } else if (age < 0 || isNaN(age)) {
//         alert('Вы ввели неправильное значение!')
//     } else {
//         alert('Привет, друг!')
//     }
// }
// hello()

// //Task 5
// function isNumbers(firstNum, secondNum) {
//     if (isNaN(firstNum) || isNaN(secondNum) || (firstNum == '') || (secondNum == '')) {
//         let result = 'Одно или оба значения не являются числом';
//         console.log(result);
//         return result
//     } else {
//         let result = firstNum * secondNum;
//         console.log(result);
//         return result
//     }
// }
// isNumbers(23, )

// //Task 6
// function number() {
//     let num = prompt('Введите число');
//     if (isNaN(num) || (num == '')) {
//         let result = 'Переданный параметр не является числом'
//         console.log(result);
//         return result
//     } else {
//         let result = `${num} в кубе равняется ${num**3}`;
//         console.log(result);
//         return result
//     }
// }
// number()

// //Task 7
// function area() {
//     return this.radius**2 * 3.14
// }

// function perimeter() {
//     return this.radius * 2 * 3.14
// }

// const circle1 = {
//     radius: 200,
//     getArea: area,
//     getPerimeter: perimeter,
// }

// const circle2 = {
//     radius: 96,
//     getArea: area,
//     getPerimeter: perimeter,
// }
// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

//Task 8
const playSeasonsBtn = document.querySelector('#game-1');

function seasonsGameStart() {
    let numberOfMonth = prompt('Введите номер месяца!')
    if ((numberOfMonth > 0) && (numberOfMonth <= 12)) {
        switch (numberOfMonth) {
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
    } else if (isNaN(numberOfMonth)) {
        alert('Вы ввели неправильное значение!')
    } else {
        alert('Такого месяца нет!')
    }
}

playSeasonsBtn.addEventListener('click', () => {
    seasonsGameStart()
})
