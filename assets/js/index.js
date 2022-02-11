import animalesData from "./Animales.js";

let animales = [];

const cargaTemplate = ()=>{

    const animalTemplate = document.getElementById("Animales");
    animalTemplate.innerHTML = "";
    animales.forEach((a) =>{
        animalTemplate.innerHTML += `
        <div class="card" style="width: 18rem;"> 
        <img src="${a.getImage}" class="card-img-top" alt="..."> 
        <div> 
        <button onclick="playSonido(${a.getNombre()})" ></button>        
        </p> 
        </div> 
        </div> 
        
        
        `
    }

}