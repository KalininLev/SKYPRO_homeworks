// //Task 1
// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

// //Task 2
// function searchStart(arr, query) {
//     return arr.filter(function(el){
//         return el.toLowerCase().indexOf(query.toLowerCase()) > -1
//     })
// }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

// //Task 3
// const num = 32.58884;
// console.log(Math.floor(num)); // 32
// console.log(Math.ceil(num)); // 33
// console.log(Math.round(num)); // 33

// //Task 4
// const arr = [52, 53, 49, 77, 21, 32];
// const maxValue = Math.max(...arr);
// const minValue = Math.min(...arr);
// console.log(maxValue);
// console.log(minValue);

// //Task 5
// const randomNum = () => Math.floor(Math.random() * (10 - 1) + 1)
// console.log(randomNum());

// //Task 6
// const generateArray = (num) => {
//     const arr = [];
//     arr.length = Math.floor(num/2);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.round(Math.random() * num)
//     }
//     return arr
// }
// console.log(generateArray(12));


// //Task 7
// const randomNum = (minValue, maxValue) => {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(randomNum(5, 10));

// //Task 8
// let currentDate = new Date();
// console.log(currentDate);

// //Task 9
// let currentDate = new Date();
// currentDate.getDate(currentDate.setDate(73));
// console.log(currentDate);

// //Task 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// const currentDate = () => {
//     let myDate = new Date();
//     let fullDate = `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}`;
//     let fullTime = `Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`;
//     let time = `${fullDate} 
//     ${fullTime}`
//     return time
// }
// console.log(currentDate());

//Task 11
const playShuffleBtn = document.querySelector('#game-2');

function shuffleGameStart() {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const shuffle = arr => {arr.sort(() => Math.random() - 0.5)}
    shuffle(words);
    alert(words);
    let fWord = prompt('Введите первое слово!');
    let sWord = prompt('Введите последнее слово!');
    if ((fWord.toLowerCase() != words.at(0).toLowerCase()) && (sWord.toLowerCase() != words.at(-1).toLowerCase())) {
        alert('Ой-ой, похоже Вы ошиблись, попробуйте снова!');
    } else if ((fWord.toLowerCase() == words.at(0).toLowerCase()) && (sWord.toLowerCase() == words.at(-1).toLowerCase())) {
        alert('Поздравляем! Вы выйграли!');
    } else {
        alert('Вы были близки к победе!')
    }
}

playShuffleBtn.addEventListener('click', () => {
    shuffleGameStart()
})
