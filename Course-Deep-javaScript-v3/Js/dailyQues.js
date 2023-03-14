console.log("bismillah");

const obj = {
  name: "user",
  fn1: () => {
    console.log(this, this.name); // Arrow function don't have its own "this" and "new" keyword. arrow function constructable nhi he .sirf callable he.
  },
  fn2: function () {
    console.log(this, this.name);
  },
};

obj.fn1();
obj.fn2();
// var a = obj.fn2;
// a();

// fn1 = () => {
//     return fn2 =() => {      this  = true
//       return fn3 = () => {
//         console.log(this);
//       }
//     }
//   }
