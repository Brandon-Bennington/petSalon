let jocasHouse ={//obj
        name:"Joca's House",//var
        phone:"666-666-6666",//var
        hours:{//obj
            open:"9:00 am",//var
            close:"9:00 pm",//var
    },
    pets: []
}
//constructor ...
function Pet(name,age,gender,service){
    //properties = parameter;
    this.name = name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}

function register(){

}

function init(){
    let pet1 = new Pet("Scooby", 79, "Male", "Grooming");//declaring obj 
    jocasHouse.pets.push(pet1);
    console.log(pet1);

}

window.onload=init;//waiting to render the HTML 


