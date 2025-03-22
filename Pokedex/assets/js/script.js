const listaPokemon  = document.querySelector('#pokemonList');
let URL = 'https://pokeapi.co/api/v2/pokemon/';
const botones = document.querySelectorAll('.btn-header')

for(let i = 1; i <= 151; i++){
    fetch(URL + i)
    .then((response) => response.json())
    .then(data => showPokemon(data))

}
function showPokemon(data){
    let tipos = data.types.map((type) => `<p class="tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `
            <p class="pokemon__id__back">#${data.id}</p>
            <div class="img__pokemon">
                <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
            </div>
            <br><br>
            <div class="pokemon__info">
                <div class="NombreCont">
                    <p class="pokemonId">#${data.id}</p>
                    <h2 class="pokemon__nombre">${data.name}</h2>
                </div>
                <div class="pokemon_tipos">
                    ${tipos}
                </div>
                <div class="pokemon__stats">
                    <p class="stat">${data.height}m</p>
                    <p class="stat">${data.weight}Kg</p>
                </div>
            </div>
    `;
    listaPokemon.appendChild(div)
}

botones.forEach((boton) => boton.addEventListener('click', (item)=>{
    let botonId = item.currentTarget.id;
    listaPokemon.innerHTML = ""
    if(botonId === 'dark'){
        let div = document.createElement('div');
            div.innerHTML = `
                <p class= "text-center fs-3 textNohay">No hay pokemon del tipo seleccionado</p>
            `;
            listaPokemon.appendChild(div)
        }
    for(let i = 1; i <= 151; i++){
        fetch(URL + i)
        .then((response) => response.json())
        .then(data => {
            
            if(botonId === 'verTodos'){
                showPokemon(data);
            }
            else{
                let tipos = data.types.map(type => type.type.name);
                
                    if (tipos.some(tipo => tipo.includes(botonId))){
                        showPokemon(data)
                    }      
            }

        })
    }

}));

document.querySelector('#miInput').addEventListener('input',()=>{
    let look = document.getElementById('miInput').value.trim();
    listaPokemon.innerHTML = "";

    for(let i = 1; i <= 151; i++){
        fetch(URL + i)
        .then((response) => response.json())
        .then(data => {
            if(!look || data.name.toLowerCase().includes(look.toLowerCase())){
                showPokemon(data);
            }
        })
        .catch(error => console.error('ERROR:', error));
    }
});