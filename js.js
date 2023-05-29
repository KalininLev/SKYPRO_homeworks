// ['Alex', 'Jacob', 'Mark', 'Max'] -- 'Alex, Jacob and 2 others like this'
// ['Max', 'John', 'Mark'] -- 'Max, John and Mark like this'
// ['Jacob', 'Alex'] -- 'Jacob and Alex like this'
// ['Peter'] -- 'Peter likes this'
// [] -- 'no one likes this'

// ПОДСКАЗКА ПРОВЕРИТЬ КАКИЕ СВОЙСТВА ЕСТЬ У МАССИВА!

let names = ['Alex', 'Jacob', 'Mark', 'Max', 'Misha', 'Sasha', 'Nicola']


function likes(names) {
    switch (names.length) {
        case 0: return 'no one likes this';

        case 1: return `${names[0]} likes this`;

        case 2: return `${names[0]} and ${names[1]} like this`;

        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;

        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
           
    }
}


console.log(likes(names));