// let arr = ['Shahadat', 'Hossain', 'Bhuian']

    
// let [fName, lName, surName] = arr;

// console.log(fName, lName, surName);

// let a, b;
// a = 10, b = 20;

// [a, b] = [b, a];

// console.log(a, b);

// let person = {
//     fName: 'Shahadat',
//     lName: 'Hossain',
//     dob:'20-06-2000'
// }

// let {fName:firstName, lName:lastName, dob:dateOfBirth} = person;
// console.log(firstName, lastName, dateOfBirth);


// function details({fName,lName,dob}) {
//     console.log(fName, lName, dob);
// }

// details(person)

// let str = 'Shahadat';
// let newStr = [...str];


// arr1 = ['first', 'second', 'third'];
// arr2 = ['fourth', 'five', 'six'];
// arr3 = ['seven', 'eight', 'nine'];

// newArr = [...arr1, ...arr2, ...arr3];
// console.log(newArr);


// let arr = ['first', 'second', 'third'];


// let test = (fName, lName,finalName) => {
//     console.log(`Hello ${fName} ${lName} ${finalName}`);
// }

// test(...arr);

// let a = [1, 2, -1, 2, 80];
// console.log(Math.max(...a))

// let a = [7, 5, 3, 4, 6, 8, 9, 1];
// let [f, s, ...t] = a;
// console.log(f, s, t);

// let person = {
//     fName: 'Shahadat',
//     sName: 'Hossain',
//     surName: 'Bhian'
// }

// let { fName, ...sName } = person;
// console.log(fName, sName);

// let test = (f, s,...t) => {
//     console.log(f, s,t);
// }
// test('Shahadat', 5, 5, 6, 7, 8);

// let a = Symbol('ok');

// let person = {
//     [a]: 'hello',
//     name: 'Shahadat',
//     id:190621
// }

// console.log(person)

// a = 'shahadat';
// let iter = a[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function customIterator(arr) {
//     let i = 0;

//     return {
//         next: function () {
//             return i < a.length ? { value: arr[i++], done: false } : { done: true };
//         }
//     }
// }
// let members = customIterator(a);
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());


// generator 
// function* genFunc() {
//     yield 1
//     yield 'shahadat'
//     yield 'mysha'
//     yield 2
//     yield 3
// }

// let gen = genFunc();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// let prom = new Promise((resolve, reject) => {
//     let a;
//     setTimeout(() => {
//         a = 1 + 1;
//     }, 4000);
//     if (a == 2) resolve('Solved');
//     else reject('failed');
// });

// prom.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })

// console.log('I am after promises');


async function getJokes() {
    let response=await fetch(`https://api.github.com/users/Coder-Shahadat`);
    let data = await response.json();
    return data;
}

getJokes().then((profile) => {
    console.log(profile);
});