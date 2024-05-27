let jocasHouse = {
    name: "Joca's House",
    phone: "666-666-6666",
    hours: {
        open: "9:00 am",
        close: "9:00 pm",
    },
    pets: [
        { name: "Scooby", age: 15, gender: "Male", breed: "Great Dane", species: "dog", service: "Grooming" },
        { name: "Scrappy", age: 3, gender: "Male", breed: "Great Dane", species: "dog", service: "Training" },
        { name: "Bella", age: 4, gender: "Female", breed: "Labrador", species: "dog", service: "Health Check" }
    ]
};

function updateTotalAnimals() {
    document.getElementById("totalAnimals").innerText = jocasHouse.pets.length;
}

function updateLastAddedAnimal() {
    if (jocasHouse.pets.length > 0) {
        let lastAnimal = jocasHouse.pets[jocasHouse.pets.length - 1];
        document.getElementById("lastAnimalName").innerText = lastAnimal.name;
        document.getElementById("lastAnimalDetails").innerText = `Age: ${lastAnimal.age}, Gender: ${lastAnimal.gender}, Breed: ${lastAnimal.breed}, Species: ${lastAnimal.species}, Service: ${lastAnimal.service}`;
        
        let imageSrc = `images/${lastAnimal.species.toLowerCase()}.png`;
        document.getElementById("lastAnimalImage").src = imageSrc;
    } else {
        document.getElementById("lastAnimalName").innerText = "No animals registered yet";
        document.getElementById("lastAnimalDetails").innerText = "";
        document.getElementById("lastAnimalImage").src = "images/default.png";
    }
}

function init() {
    updateTotalAnimals();
    updateLastAddedAnimal();
}

window.onload = init;
