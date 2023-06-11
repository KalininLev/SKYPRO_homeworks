// //Task 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];


// people.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//       return -1;
//     }

//     return 0;
//   });
// console.log(people.sort());


// //Task 2
// const people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
//  ];

//  function isPositive(arr) {
//     return arr.filter(el => el > 0); 
// }

// function isMale(arr) {
//     return arr.filter(el => el.gender == 'male'); 
// }

// function filter(arr, callback) {
//     return callback(arr);
// }

// console.log(filter([3, -4, 1, 9, 0, -234], isPositive));
// console.log(filter(people, isMale));


// //Task 3
// let timerId = setInterval(() => console.log(new Date()), 3000);
// setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);


// //Task 4
// function delayForSecond(callback) {
//     // Код писать можно только внутри этой функции
//     setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })


// //Task 5
// // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// // а затем вызывает переданный колбэк
// function delayForSecond(cb) {setTimeout(() => {console.log('Прошла одна секунда');if(cb) { 	cb(); }}, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(() => sayHi('Gleb'))
