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
    // alert("Ya quedo tu!")

    //Se parsean los dartos de una cadena a un numero. Para saber el ataque de cada uno
    const ataquePropio = parseInt(pokeAtaque.textContent); 
    const ataqueRival = parseInt(poke2Ataque.textContent);

    //Se pasan los nombre de los pokemones para usarlos como texto
    const namePropio = namePoke.textContent
    const nameRival = namePoke2.textContent

    //mediante un condicional se evaluar quien gana de los dos pokemons
    if (ataqueRival > ataquePropio) {
        //Si el ataque del pokemon es más alto que el Propio, entonces gana Rival
        alert(nameRival + " es el ganador!!");
    } else if (ataquePropio > ataqueRival){
        //En caso que el ataque de pokemon Propio sea más alto que Rival, Gana Propio
        alert(namePropio + " es el ganador!!");
    }else{
        alert("Esto fue un empate");
    }
}

//Esto de los eventos va sin parenresis
window.addEventListener('load', obtenerPokeRival)
btnElejir.addEventListener("click", obtenerPokePropio)
botonPelear.addEventListener("click", combate)



