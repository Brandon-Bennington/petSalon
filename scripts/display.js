function displayRows() {
    const petTable = document.getElementById("petTable");
    petTable.innerHTML = "";

    let dogCount = 0;
    let catCount = 0;
    let otherCount = 0;

    jocasHouse.pets.forEach((pet, index) => {
        let row = `
            <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.species}</td>
                <td>${pet.service}</td>
                <td class="actions-cell">
                    <button class="btn btn-warning btn-sm mb-2" onclick="editPet(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deletePet(${index})">Delete</button>
                </td>
            </tr>
        `;
        petTable.innerHTML += row;

        switch (pet.species.toLowerCase()) {
            case "dog":
                dogCount++;
                break;
            case "cat":
                catCount++;
                break;
            default:
                otherCount++;
                break;
        }
    });

    document.getElementById("dogCount").innerText = dogCount;
    document.getElementById("catCount").innerText = catCount;
    document.getElementById("otherCount").innerText = otherCount;
}

function displayTotalPets() {
    document.getElementById("total").innerText = jocasHouse.pets.length;
}
