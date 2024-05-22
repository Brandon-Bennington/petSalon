let jocasHouse ={
    name:"Joca's House",
    phone:"666-666-6666",
    hours:{
        open:"9:00 am",
        close:"9:00 pm",
    },
    pets: [//array
    {
        name:"Scooby", 
        age: 12,
        gender:"Male",
        service:"Grooming"
    },
    {
        name:"Scrappy",
        age:3,
        gender:"Male",
        service:"Grooming",
    }
    ]
}

function displayName(){
    console.log(petSalon.pets[1].name);
}

function countPets(){
    console.log(petSalon.pets.length);
}


