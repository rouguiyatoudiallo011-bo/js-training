
const form = document.querySelector("#search-form");
const input = document.querySelector("#search");
const resultInfo = document.querySelector("#result");

// Fonction pour chercher le Pokémon
async function searchPokemon(name) {
  try {


    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`
    );



        if (!response.ok) {
         throw new Error( `Pokémon "${name}" introuvable (code ${response.status})` );
         }

    const result = await response.json();

    console.log(result);

    // Informations du Pokémon
    const resultName = result.name;
    const resultImg = result.sprites.front_default;
    const resultHeight = result.height;
    const resultWeight = result.weight;

    // Deuxième image : sprite shiny
    const resultImgTwo = result.sprites.front_shiny;

    return {
      nameOne: resultName,
      urlOne: resultImg,
      heightOne: resultHeight,
      weightOne: resultWeight,

      nameTwo: resultName,
      urlTwo: resultImgTwo
    };

  } catch (error) {
    console.error("Erreur :", error.message);
    return null;
  }
}


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const pokemon = await searchPokemon(input.value);

  if (!pokemon) {
    resultInfo.textContent = "Pokémon introuvable";
    return;
  }

  resultInfo.innerHTML = "";

  // Première partie
  const divOne = document.createElement("div");

  const imgOne = document.createElement("img");
  imgOne.src = pokemon.urlOne;
  imgOne.className = "imgOneCl";

  const pNameOne = document.createElement("p");
  pNameOne.textContent = pokemon.nameOne;
  pNameOne.className = "pNameOneCl"

  const pHeight = document.createElement("p");
  pHeight.textContent = `Taille : ${pokemon.heightOne}`;
  pHeight.className = "pHeightCl";

  const pWeight = document.createElement("p");
  pWeight.textContent = `Poids : ${pokemon.weightOne}`;
   pWeight.className = "pWeightCl";

  divOne.appendChild(imgOne);
  divOne.appendChild(pNameOne);
  divOne.appendChild(pHeight);
  divOne.appendChild(pWeight);


  // Deuxième partie
  const divTwo = document.createElement("div");

  const pNameTwo = document.createElement("p");
  pNameTwo.textContent = pokemon.nameTwo;
 pNameTwo.className = "pNameTwoCl";


  const imgTwo = document.createElement("img");
  imgTwo.src = pokemon.urlTwo;
  imgTwo.className = "imgTwoCl";



  divTwo.appendChild(imgTwo);
  divTwo.appendChild(pNameTwo);


  resultInfo.appendChild(divOne);
  resultInfo.appendChild(divTwo);
});

