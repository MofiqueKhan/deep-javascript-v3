function ask(question) {
    console.log(this.teacher,question) // Binding Means Use a function in an object & use an object in a function.
}

var workshop1 = {
    teacher : 'Kyle',
    ask,
};

var workshop2 = {
    teacher : 'Suzy',
    ask,
};

// workshop1.ask("This Is Implicit Binding") // Implicit Binding;
// workshop2.ask("This Is Implicit Binding")

ask.call(workshop1,'This is Explicit Binding') // Explicit Binding;
ask.call(workshop2,'This is Explicit Binding')


function myFunc() {
    console.log(obj.name)
}

const obj = {
    name : 'Kyle',
    myFunc,
}

obj.myFunc() // Implicit Binding;

function myFunc2() {
    console.log(obj2.name)
}

const obj2 = {
    name : 'Simpson',
    myFunc2,
}

myFunc2.call(obj2); // Emplicit Binding;