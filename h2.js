//Task 1
let number = 10;
alert(number);
number = 20;
alert(number);

//Task 2
const firstIphoneDate = '9 января 2007';
alert(firstIphoneDate);

//Task 3
const jsCreator = 'Brendan Eich';
alert(jsCreator);

//Task 4
let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

//Task 5
const result = 2**5;
alert(result);

//Task 6
let x = 9;
let y = 2;
alert(x % y)

//Task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Task 8
let age = +prompt('Сколько вам лет?');
alert(age);

//Task 9
const user = {
    name:'Alex',
    age:24,
    isAdmin:true,
};

//Task 9.1
user['city of residence'] = ''

//Task 9.2
user.age = 25

//Task 9.3
delete user['city of residence']

//Task 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?')
alert(user[info])

//Task 10
const userName = prompt('Как Вас зовут?');
alert(`Привет, ${userName}!`)
