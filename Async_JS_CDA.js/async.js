async function searchPokemon(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`Pokémon "${name}" introuvable (code ${response.status})`);
    }
    const pokemon = await response.json();
    console.log(pokemon.name, pokemon.height, pokemon.weight);
  } catch (error) {
    console.error("Erreur :", error.message);
  }
}
searchPokemon("squirtle");
searchPokemon("squirtel");