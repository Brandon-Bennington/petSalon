let globalVariable = "I'm in global scope";

function myFunction(){
    //This function can access globalVariable
    console.log(globalVariable);
}

myFunction(); 

function myFunction() {
    let localVariable = "I'm in local scope";
    console.log(localVariable);
}

myFunction();
//Accessing localVariable here would result in an errro

//object literal 
let student1 = {
    name: "Kevin",
    enail: "kevin@gmail.com",
    grade101: 3.5,
    grade102: 3.9,
};

let student2 = {
    name: "Alice",
    email: "alice@gmail.com",
    grade101: 4.0,
    grade102: 3.8,
}

let student3 = {
    name: "John",
    email: "JonSnow@gmail.com",
    grade101: 3.9,
    grade102: 3.6,
}

console.log(student1);
console.log(student2);

//Arrays []
let myArray=[10,false,"Richard",student2]
console.log(myArray[2]);//Richard aa