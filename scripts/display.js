function displayCards(){
    //declare the variables
    let card="";
    const petDiv=document.getElementById("petDiv");
    //travel the array of pets
    for(let i=0;i<3;i++){
        let pet = jocasHouse.pets[i];
        //create the HTML template
        card+=`
            <div class="petCard">
                <h4>Name: ${pet.name}</h4>
                <h4>Age: ${pet.age}</h4>
                <h4>Gender: ${pet.gender}</h4>
                <h4>Breed: ${pet.breed}</h4>
                <h4>Service: ${pet.service}</h4>
            </div>
        `;
        petDiv.innerHTML=card;
    }
    //insert the template into the HTML 

}