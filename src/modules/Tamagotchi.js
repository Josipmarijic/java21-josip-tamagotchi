export class Tamagotchi{
    #name;
    #type;
    #happines = 5;
    #hunger = 5;
    #hungerID;
    #happinesID;
    #img;
    
    


constructor(tName, type) {
    this.#name = tName;
    this.#type = type;
    this.#img = document.querySelector("img");
    const dogImgURL = new URL("../images/dog.jpg", import.meta.url);
    this.#img.src = dogImgURL.href;
    this.#hungerID = setInterval(this.gettingHungry.bind(this), 2000);
    this.#happinesID = setInterval(this.gettingSad.bind(this), 2000);
    document.getElementById("firstname").innerText = `Jag heter ${this.#name}`;
    document.getElementById("type1").innerText = `Jag är en ${this.#type}`;
}

gettingHungry(){
    if(this.#hunger  >= 10){
        console.log("starved to death");
        const dead = document.createElement("h1").innerText = `vila i frid ${this.#name} dog av hunger`;
        document.body.append(dead);
        document.querySelector("div").style.display = "none";
        const deadDogImgURL = new URL("../images/deaddog.jpg", import.meta.url);
        this.#img.src = deadDogImgURL.href;
        clearInterval(this.#hungerID);
        clearInterval(this.#happinesID);
        //this.dead();
    }else if(this.#hunger >= 6){
    this.#hunger++;
    document.getElementById("food").innerText = "Jag är Hungrig :(";
    console.log('hunger in class', this.#hunger);
    document.getElementById('hunger').innerText = `om siffran når tio dör jag ${this.#hunger}`;

    
    }
    else 
        document.getElementById("food").innerText = "jag är mätt :)";
        this.#hunger++;
        document.getElementById('hunger').innerText = `om siffran når tio dör jag ${this.#hunger}`;

    
}

gettingSad(){
    if(this.#happines <= 0){
        console.log("died of saddness")
        const dead = document.createElement("h1").innerText = `vila i frid ${this.#name} dog av ensamhet`;
        document.body.append(dead);
        document.querySelector("div").style.display = "none";
        const deadDogImgURL = new URL("../images/deaddog.jpg", import.meta.url);
        this.#img.src = deadDogImgURL.href;
        clearInterval(this.#hungerID);
        clearInterval(this.#happinesID);
        //this.dead();
    }else if (this.#happines <= 6){
        document.getElementById("playWithMe").innerText = "Lek med mig :("
        this.#happines = this.#happines - 1;
        document.getElementById('happines').innerText = `om siffran når noll dör jag ${this.#happines}`;
    console.log('happiness in class', this.#happines);
    }else document.getElementById("playWithMe").innerText = "Jag är glad :)";
    this.#happines = this.#happines - 1;
    document.getElementById('happines').innerText = `om siffran når noll dör jag ${this.#happines}`;

    
}

feed(){
   this.#hunger = this.#hunger - 1;
}

play(){
    this.#happines++;
}



}

