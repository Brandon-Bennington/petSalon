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

        document.getElementById("animalAge").innerText = lastAnimal.age;
        document.getElementById("animalGender").innerText = lastAnimal.gender;
        document.getElementById("animalBreed").innerText = lastAnimal.breed;
        document.getElementById("animalSpecies").innerText = lastAnimal.species.charAt(0).toUpperCase() + lastAnimal.species.slice(1);
        document.getElementById("animalService").innerText = lastAnimal.service;

        let imageSrc = `img/${lastAnimal.gender.charAt(0).toLowerCase()}${lastAnimal.species.charAt(0).toUpperCase() + lastAnimal.species.slice(1)}.png`;
        document.getElementById("lastAnimalImage").src = imageSrc;
    } else {
        document.getElementById("lastAnimalName").innerText = "No animals registered yet";
        document.getElementById("animalAge").innerText = "";
        document.getElementById("animalGender").innerText = "";
        document.getElementById("animalBreed").innerText = "";
        document.getElementById("animalSpecies").innerText = "";
        document.getElementById("animalService").innerText = "";
        document.getElementById("lastAnimalImage").src = "img/default.png";
    }
}

function init() {
    updateTotalAnimals();
    updateLastAddedAnimal();
}

window.onload = init;
