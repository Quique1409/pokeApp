const imgPoke2 = document.querySelector('#poke2');
const namePoke2 = document.querySelector('#nombrePoke-rival');
const poke2Tipo = document.querySelector('#tipoRival');
const poke2Ataque = document.querySelector('#ataqueRival');

const input = document.querySelector("#input");
const btnElejir = document.querySelector("#btn-poke");

const imgPoke = document.querySelector("#poke");
const namePoke = document.querySelector("#nombrePoke-propio");
const pokeTipo = document.querySelector("#tipoPropio");
const pokeAtaque = document.querySelector("#ataquePropio");

const botonPelear = document.querySelector("#combate");


const getNumRandom = () => {
    let min = Math.ceil(0);
    let max = Math.floor(1001);

    return Math.floor(Math.random() * (max - min) + min);
}

const obtenerPokePropio = ()=>{
    const numPokePropio = input.value;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${numPokePropio}`).then((res)=>{
        //console.log(res); //Para ver la consola desde la web de la API
        return res.data
    }).then((res)=>{
        console.log(res);
        imgPoke.src = res.sprites.back_default;
        pokeTipo.innerHTML = res.types[0].type.name;
        namePoke.innerHTML = res.name;
        pokeAtaque.innerHTML = res.stats[0].base_stat;
    })
}

const obtenerPokeRival = () =>{

    const numPokeRival = getNumRandom();

    axios.get(`https://pokeapi.co/api/v2/pokemon/${numPokeRival}`).then((res)=>{
        //console.log(res); //Para ver la consola desde la web de la API
        return res.data
    }).then((res)=>{
        console.log(res);
        imgPoke2.src = res.sprites.front_default;
        poke2Tipo.innerHTML = res.types[0].type.name;
        namePoke2.innerHTML = res.name;
        poke2Ataque.innerHTML = res.stats[0].base_stat;
    })
}

const combate = ()=>{
    //alert("Ya quedo tu!")

    //Se parsean los dartos de una cadena a un numero
    const ataqueRival = parseInt(poke2Ataque.textContent);
    const ataquePropio = parseInt(pokeAtaque.textContent); 
}

//Esto de los eventos va sin parenresis
window.addEventListener('load', obtenerPokeRival)
btnElejir.addEventListener("click", obtenerPokePropio)
botonPelear.addEventListener("click", combate)



