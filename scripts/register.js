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
        },
        {
            name:"Goofy",
            age:14,
            gender:"Male",
            service:"Nails cut",
        },
    ]
}

function displayName(){
    let names="";
    //suggestion:use a logo
    for(let i=0;i<3;i++){
        names+=`<p> ${jocasHouse.pets[i].name} </p>`;
        console.log(names)
    }
    document.getElementById("petNamaes").innerHTML=names;
}

function countPets(){
    console.log(jocasHouse.pets.length);
}


