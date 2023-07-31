// Add your code to this file

//Body
let body = document.querySelector("body");
document.body.style.backgroundColor = "rgba(14,11,140,255)";

// Introduction
let heading = document.querySelector("h1");
heading.style.textDecoration = "underline";

let heading2 = document.querySelector("h2");
heading2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
heading2.style.textAlign = "center";

//Images
let img = document.querySelector("img");
img.style.border = "5px dotted rgba(235,196,11,255)";


//Pokemon Img
let allimg = document.getElementsByClassName("pokemon_images");
    for(i = 0; i < allimg.length; i++){
    allimg[i].style.border = "5px dotted rgba(235,196,11,255)";
    }
// Pokemon Name
let pokemonName = document.getElementsByClassName("pokemon_names")
    for(i = 0; i < pokemonName.length; i++) {
        pokemonName[i].innerText += "!";
        pokemonName[i].style.color ="rgba(245,234,164,255)";
    }

// Bulbasaur Container
let background = document.getElementById("bulbasaur_container");
background.style.backgroundColor = "rgba(77,141,142,255)";


// Footer
let footer = document.querySelector("footer");
footer.innerHTML  = "ALL STAR CODE - DOM PROJECT";
footer.style.textDecoration = "underline overline";
footer.style.fontSize = "150%"