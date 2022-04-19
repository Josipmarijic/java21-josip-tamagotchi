import { Tamagotchi } from "./modules/Tamagotchi";

const inputName = document.getElementById("name");
const inputType = document.getElementById("type");
document.querySelector("button").addEventListener("click", function(e){
    e.preventDefault();
    const t1 = new Tamagotchi(inputName.value, inputType.value);
    document.querySelector("form").style.display = "none";
    document.querySelector("div").style.display = "block";
    document.getElementById("feed").addEventListener("click", function(){
        t1.feed();
    })
    document.getElementById("play").addEventListener("click", function(){
        t1.play();
    })
    
    
});








