// 3 most popular pokemon pikachu charizard squirtle 
//three moves-  data.moves[0].move.name for one move, change indext 0-2
//height- data.height
//weight - data.weight
//image - data.sprites  pick whatever image you want

const pikachuUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
const charizardUrl ="https://pokeapi.co/api/v2/pokemon/charizard";
const squirtleUrl = "https://pokeapi.co/api/v2/pokemon/squirtle";
const pikachuArea = document.getElementById('pikachu'); //grabs tag from  html
const charizardArea = document.getElementById('charizard');
const squirtleArea = document.getElementById('squirtle');
//const key =

let displayPokemon = (data,area) => {

  //this is creating creating an html tag
  let pokemonImg = document.createElement('img'); //has to be a html tag for the data we want to retrieve
  let pokemonMove1 = document.createElement('p');
  let pokemonMove2 = document.createElement('p');
  let pokemonMove3 = document.createElement('p');
  let pokemonHeight = document.createElement('p');
  let pokemonWeight = document.createElement('p');

  //this is assinging that tag with its value
  pokemonImg.src = data.sprites.front_default;
  pokemonMove1.innerText = data.moves[0].move.name;
  pokemonMove2.innerText = data.moves[1].move.name;
  pokemonMove3.innerText = data.moves[2].move.name;
  pokemonHeight.innerText = data.height;
  pokemonWeight.innerText = data.weight;

  //attatching to html
  area.appendChild(pokemonImg);
  area.appendChild(pokemonMove1);//appendChild t
  area.appendChild(pokemonMove2);
  area.appendChild(pokemonMove3);
  area.appendChild(pokemonHeight);
  area.appendChild(pokemonWeight);


}


async function fetchPokemon(url,area){
  try{  
  let response = await fetch(url);//fetch grabs all the data from the url  
  let data = await response.json()//data is now json
    
    console.log(data);
    console.log(data.abilities[0].ability.name); //these were for testing the data
    displayPokemon(data,area);
  }catch(e){
    console.error(e);
  }
  }

 fetchPokemon(pikachuUrl,pikachuArea);
 fetchPokemon(charizardUrl,charizardArea);
 fetchPokemon(squirtleUrl,squirtleArea);


 





