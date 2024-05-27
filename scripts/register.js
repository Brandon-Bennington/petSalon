let jocasHouse = {
    name: "Joca's House",
    phone: "666-666-6666",
    hours: {
        open: "9:00 am",
        close: "9:00 pm",
    },
    pets: []
}

function Pet(name, age, gender, breed, species, service) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = capitalizeWords(breed);
    this.species = capitalizeWords(species);
    this.service = service;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function isValid(aPet) {
    let validation = true;

    if (aPet.name == "") {
        validation = false;
        document.getElementById("txtName").classList.add("alert-error");
        alert("Please enter a name");
    }
    if (isNaN(aPet.age) || aPet.age == "") {
        validation = false;
        document.getElementById("txtAge").classList.add("alert-error");
        alert("Please enter a valid age");
    }
    if (aPet.gender == "") {
        validation = false;
        document.getElementById("txtGender").classList.add("alert-error");
        alert("Please select a gender");
    }
    if (aPet.breed == "" || typeof aPet.breed !== 'string') {
        validation = false;
        document.getElementById("txtBreed").classList.add("alert-error");
        alert("Please enter a breed");
    }
    if (aPet.species == "" || typeof aPet.species !== 'string') {
        validation = false;
        document.getElementById("txtSpecies").classList.add("alert-error");
        alert("Please enter a species");
    }
    if (aPet.service == "") {
        validation = false;
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
    let inputSpecies = document.getElementById("txtSpecies").value;
    let inputService = document.getElementById("txtService").value;

    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputSpecies, inputService);
    if (isValid(newPet)) {
        jocasHouse.pets.push(newPet);
        displayRows();
    } else {
        alert("Please fill in the required fields.");
    }
}

function deletePet(index) {
    if (confirm("Are you sure you want to delete this pet?")) {
        jocasHouse.pets.splice(index, 1);
        displayRows();
    }
}

function editPet(index) {
    let pet = jocasHouse.pets[index];
    document.getElementById("txtName").value = pet.name;
    document.getElementById("txtAge").value = pet.age;
    document.getElementById("txtGender").value = pet.gender;
    document.getElementById("txtBreed").value = pet.breed;
    document.getElementById("txtSpecies").value = pet.species;
    document.getElementById("txtService").value = pet.service;

    // Temporarily remove the pet from the list for editing
    jocasHouse.pets.splice(index, 1);

    // Change the register button to update button
    let registerButton = document.querySelector('button[onclick="register();"]');
    registerButton.textContent = "Update";
    registerButton.setAttribute("onclick", `update(${index});`);
}

function update(index) {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputSpecies = document.getElementById("txtSpecies").value;
    let inputService = document.getElementById("txtService").value;

    let updatedPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputSpecies, inputService);
    if (isValid(updatedPet)) {
        jocasHouse.pets.splice(index, 0, updatedPet);
        displayRows();

        // Change the update button back to register button
        let updateButton = document.querySelector('button[onclick^="update"]');
        updateButton.textContent = "Register";
        updateButton.setAttribute("onclick", "register();");

        // Clear the form
        document.getElementById("txtName").value = "";
        document.getElementById("txtAge").value = "";
        document.getElementById("txtGender").value = "";
        document.getElementById("txtBreed").value = "";
        document.getElementById("txtSpecies").value = "";
        document.getElementById("txtService").value = "";
    } else {
        alert("Please fill in the required fields.");
    }
}

function init() {
    let pet1 = new Pet("Scooby", 15, "Male", "Great Dane", "dog", "Grooming");
    let pet2 = new Pet("Scrappy", 3, "Male", "Great Dane", "dog", "Training");
    let pet3 = new Pet("Bella", 4, "Female", "Labrador", "dog", "Health Check");
    jocasHouse.pets.push(pet1, pet2, pet3);
    displayRows();
    displayTotalPets();
    displayServiceCount();
}

window.onload = init;
