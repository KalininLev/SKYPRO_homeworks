// //Task 1
// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
//     if (arr[i] == 10) {
//     break;
//     }
// }

// //Task 2
// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));

// //Task 3
// const arr = [1, 3, 5, 10, 20];
// arr.join(' ');

// //Task 4
// const multiArr = [];
// for (let i = 0; i < 3; i++) {
//     multiArr[i] = [];
//     for (let el = 0; el < 3; el++){
//     multiArr[i][el] = 1;
//     }
// }
// console.log(multiArr);

// //Task 5
// const arr = [1, 1, 1];
// arr.push(2, 2, 2)
// console.log(arr);

// //Task 6
// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort().pop()
// console.log(arr);

// //Task 7
// const arr = [9, 8, 7, 6, 5];
// let num =Number(prompt('Введите число (1 - 10)'))
// if (arr.includes(num)) {
//     alert('Число содержится')
// } else {
//     alert('Число не содержится')
// }

// //Task 8
// const str = 'abcdef'
// const result = str.split('').reverse().join('')
// console.log(result);

// //Task 9
// // Первый вариант
// const bigArr = [[1, 2, 3,],[4, 5, 6]] 
// console.log(bigArr.flat());

// // Второй вариант
// const bigArr = [[1, 2, 3,],[4, 5, 6]];
// const newArr = [];
// for (let arrs of bigArr) {
//     for (let el of arrs) {
//         newArr.push(el)
//     }
// }
// console.log(newArr);

// //Task 10
// let arr = [1, 2, 3, 4, 5, 6, 10]
// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }

// //Task 11
// let arr = [1, 4, 8, 23, 12];
// const quadArr = arr => arr.map(el => el**2)
// console.log(quadArr(arr));

// //Task 12
// const wordsArr = ['слово', '', 'слог', 'длинное предложение', 'буква']
// const getLengthWords = arr => wordsArr.map(el => el.length)
// console.log(getLengthWords(wordsArr));

// //Task 13
// function filterPositive(array) {
//     return array.filter(el => el < 0)
// }
//  console.log(filterPositive([-1, 0, 5, -10, 56]));
// console.log(filterPositive([-25, 25, 0, -1000, -2]));

// //Task 14
// const array = [];
// array.length = 10
// for (let i = 0; i <= array.length - 1; i++) {
//     array[i] = Math.floor(Math.random() * (10 - 0 + 1))
// }
// console.log(array);
// const num = array.filter(el => el%2 == 0);
// console.log(num);

// //Task 15
// const array = [];
// array.length = 6
// for (let i = 0; i <= array.length - 1; i++) {
//     array[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1)
// }
// console.log(array);
// const result = array.reduce((a, b) => a + b) / array.length
// console.log(result);