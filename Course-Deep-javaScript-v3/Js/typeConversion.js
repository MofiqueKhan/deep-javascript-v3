console.log("Bismillah");


// coercion and Type conversion in javascript ;

// const obj = {
//     name: "user",
//     fn1: () => {
//       console.log(this, this.name); // Arrow function don't have its own "this" and "new" keyword. arrow function constructable nhi he .sirf callable he.
//     },
//     fn2: function () {
//       console.log(this, this.name);
//     },
//   };
//   obj.fn1();
//   obj.fn2();
  
//   function fn() {
//     console.log(this);
//   }


// var a = {
//     fn : function abc(){
//         console.log("shi btaa....");
//     },
// };

//   var xyz = new a.fn();
//   console.log(xyz);

function parent() {
    var teacher = 'Kyle'
    return teacher;
}

function child() {
    
    var teacher = 'Simon'
    parent()
}
console.log(child());




