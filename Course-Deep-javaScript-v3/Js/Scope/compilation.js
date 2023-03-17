// // ../complication and scope....

// compiler is a computer program who convertion ur programming code to an another language according to ur language process.
// It's red marbel | red bucket;
// var teacher = "Kyle"; //Exicution eingeen; // It's look like one statement but it's actually two seprate things. //
// The teacher part is handels by compiler and second kyle part is handels by execution engine(CPU)

// variable only can play two roles first role target an assighnment and in this it's receiving an assignment.
// and second role is in source position it's going up to it's value;

//compilation ek process he iske andar compiler jo scope ke scope ke andar variable decraler ke baare me baat karta he.agar variable declare nhi he to scope usko banata he.
// aur uske baad compiler execution engine ke paas le jata he.

// function otherclass() {
//     // Formel declaration, Also creates new red marbel.
//     //   var teacher = "suzy";
//     var teacher
//     console.log("welcome!" + " " + teacher);
//     //  = "Suzy";// that's the blue marbel because it's inside the function and the value is called blue bucket.

// }

// function ask() {
//     // creates new pink marbel.
//     var question = "why?"; // new pink bucket.
//     console.log(question);
// }
// otherclass();
// ask();

// It's worst method.

// Dynamic Scope doesn't exist practically but theorically it exists.

// I made this instance just for understanding.
// var example = "Suzy";
// function fn() {
// //   example = "Yong";
//   Age = 21; // There is no variable of Age name but Global is made this variable for us.
//   console.log(Age); //21
//   console.log(example); //
// }
// fn();

// var a = "Hello !";
// // This is lexical scope it's goes to down words to up words and inner function can be check parent function values.
// //  but parent function cannot be check inner function values.

// function first() {
//   var b = "World Shanwaz ";
//   second();

//   function second() {
//     var c = "From this side ";
//     three();

//     function three() {
//       var d = "Im a JavaScript developer ";
//       four();

//       function four() {
//           var e = "for 1 year";
//           console.log(a + b + c + d + e);
//       }
//     }
//   }
// }
// first(); // execution of function first().

//note :- inner functions apne parent function ki value ko access kar skta he but parent function inner function ki value ko access nhi kar skta he. beta baap ki value ko access kar skta he

var global = "Kyle"; // formal declaration it will make red marbel.

// function declaration() { // It's also make red marbel.
//     var global = 'Suzy';
//     var name = "danish"
//     console.log(name); // It's formel declaration inside the function so it's gonna be make blue marbel.
//     declaration2("fayyaz"); // when we exicute a function with a variable it will check the globally there's any value of question.
//     // it will find after that he gonna be exicute.

//     function declaration2(question) { // Now it's also blue marbel because we're going through the blue marble form line no.(4)
//         console.log(global,question) // The question color is green marble because that's variable has inside the function.
//     }
// }
// declaration()

// function outer() {
//     var a = 10;

//     function inner() {
//         var b = 20;
//         console.log(a + b);
//     }

//     inner();
//   }

//   outer(); // outputs 30

// function declaration(a,b){
//     return a + b
// }
// console.log(declaration(3,2))//  this is function decleration

// const expression = function (a,b){
//     return a - b
// }
// (34 , 20)
// console.log(expression) //  this is function expression

// const  anonymous = function anon(a,b){
//     return a * b
//  }
//  (3,2)
//  console.log(anonymous)

// An IIFE is a javascript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman

// (function () {
//   console.log("hello yaseen ");
// })();

// // IIFE is anonymous

// (function (teacher) {
//   console.log(teacher);
// })("robart");

// IIFEs are whether anonymous are not but that are functions, which means we can pass in values.

// It's Exist on other languages but not in JavaScript, It's theorically exist in JavaScript.

// var teacher = 'Kyle';

// function student(question) {
//     var teacher2 = 'Simon';
//     console.log(teacher,question) // It's doesn't work lexically and dont pick up teacher from laxically, hes pickup from line no 10; In Dynamic Scope he checks where was function called from. and he is called from line no. 10 so he he will be pick teacher from that line.
// }

// function student2() {
//     var teacher = 'Suzy';
//     student('Desuza') // It checks where was student called from.
// }

// student2()

// a = "fayyaz"
// var a ;
// console.log(a);

// fn()
// function fn(){
//      console.log("my name is gafor");
// }

// (function (){
//     console.log("hii world");
// })
// ();  anonymous function

// const arr = [1,2,3];
// const arr2 = arr;
// console.log(arr)//[1,2,3]
// console.log(arr2)//[1,2,3]

// arr2.push(4);
// arr.pop();
// console.log(arr)//[1,2,3]
// console.log(arr2)//[1,2,3]

// let arr = [1,2,3];
// const arr2 = arr;
// console.log(arr)//[1,2,3]
// console.log(arr2)//[1,2,3]
// arr = [10,20,30];
// console.log(arr)//[10,20,30]
// console.log(arr2)//[1,2,3]

// var magneto = [8, 4, 8];
// (function (x) {
//   //IIFE
//   x.push(99);
//   console.log(x);//[8,4,8,99] 
//   x = [1, 4, 1]; //reassign variable (create new reference)
//   x.push(88);
//   console.log(x); //[1,4,1,88]
// })(magneto);
// console.log(magneto);

// var cisco = [7,4,7];
// var zoom = cisco.slice();  
// cisco.push(77,33);
// console.log(zoom);        
// console.log(cisco);

// console.log( 'Glaw' > 'Glea' );
// console.log('A' > 'Z');//false
// console.log('c' > 'A');//true


// console.log('&&' > '&');//true

// isAbleTODrive(19);
// isAbleTODrive(21);
// isAbleTODrive(14);
// isAbleTODrive(NaN);

// function xyx(a){
//     return a == a;
// }
// console.log(xyx(100));
// function lessThan100(a,b){
//     return a + b <= 100 ;
// }

// console.log(lessThan100(22, 15), true);
// console.log(lessThan100(83, 34), false);
// console.log(lessThan100(3, 77), true);

//create a function that takes a argument and give true if its age is greater than or equal to 18. otherwise return false
// console.log(isAble(19));
// console.log(isAble(14));
// console.log(isAble(35));
// console.log(isAble(8));

// var a = [{1:'hello'}, {2:'oye'}, {3: 'bhai'}];
// var b = a.indexOf({3: 'bhai'});;


// var a = [{key:'hello'}, {key:'oye'}, {key: 'bhai'}].findIndex(eachVal => eachVal === 'bhai');
// console.log(a());
[{key:'hello'}, {key:'oye'}, {key: 'bhai'}].findIndex(eachVal =>{
    console.log(eachVal);
    return eachVal.key === 'bhai'});
// [{key:'hello'}, {key:'oye'}, {key: 'bhai'}].indexOf('bhai');