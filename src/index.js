console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
    filterBreeds();   
})

function fetchImages() {
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        renderImages(json)
      });
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        renderBreeds(json)
    });
}

function renderImages(json) {
    const container = document.querySelector("#dog-image-container")
    json.message.forEach(image => {
        let dogImg = document.createElement("img")
        dogImg.src = `${image}`
        container.appendChild(dogImg);
    });
}

function renderBreeds(breedArr) {
    for (const breed in breedArr){
        const breedList = document.createElement("li")
        breedList.innerText = breed
        breedList.addEventListener("click", function(){
            breedList.style = "color:green" 
        })
    const list = document.querySelector("#dog-breeds")
    list.appendChild(breedList)
    }

}

function filterBreeds(){
    dropList = document.querySelector("#breed-dropdown");
    dropList.addEventListener("change", function(){
        allBreeds = document.querySelectorAll("li")
        for (const breed of allBreeds) {
            if (breed.innerText[0] != dropList.value){
                breed.style="display:none;"
            } else {
                breed.style="display:visible"
            }
        }  
    })
} 

