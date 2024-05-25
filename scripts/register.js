let jocasHouse = {
    name: "Joca's House",
    phone: "666-666-6666",
    hours: {
        open: "9:00 am",
        close: "9:00 pm",
    },
    pets: []
}

function Pet(name, age, gender, breed, service) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}
function isValid(aPet){
    let validation=true;

    if(aPet.name==""){
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");
        alert("Please enter a name");
    }
    if(aPet.age==""){
        validation=false;
        document.getElementById("txtAge").classList.add("alert-error");
        alert("Please enter an age");
    }
    if(aPet.gender==""){
        validation=false;
        document.getElementById("txtGender").classList.add("alert-error");
        alert("Please enter pet's gender");
    }
    if(aPet.breed==""){
        validation=false;
        document.getElementById("txtBreed").classList.add("alert-error");
        alert("Please enter pet's breed");
    }
    if(aPet.service==""){
        validation=false;
        document.getElementById("txtService").classList.add("alert-error");
        alert("Please enter a service");
    }

    return validation; 
}


function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;

    //if (inputName && inputService) {
    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService);
    if(isValid(newPet)){    
        jocasHouse.pets.push(newPet);
            displayPetCount();
            displayPetNames();
            displayCards();
        } else {
            alert("Please fill in the required fields.");
        }
}

function init() {
    let pet1 = new Pet("Scooby", 15, "Male", "Great Dane", "Grooming");
    let pet2 = new Pet("Scrappy", 3, "Male", "Great Dane", "Training");
    let pet3 = new Pet("Bella", 4, "Female", "Labrador", "Health Check");
    jocasHouse.pets.push(pet1, pet2, pet3);
    displayCards();
}

function displayPetCount() {
    document.getElementById("petCount").innerText = `Total Pets Registered: ${jocasHouse.pets.length}`;
}


window.onload = init;
