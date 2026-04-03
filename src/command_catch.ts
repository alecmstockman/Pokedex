import type { State } from "./state.js"


export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a Pokemon name")
    };
    const name = args[0];
    const pokemon = await state.pokeAPI.fetchPokemon(name)

    const difficulty = pokemon.base_experience

    const catchRate = 1 / (1 + difficulty / 100);
    
    console.log(`Throwing a Pokeball at ${name}...`)  
    console.log(`Catch rate: ${(catchRate * 100).toFixed(1)}%`);
  
    if (Math.random() < catchRate) {
        console.log(`${name} was caught!`)
        state.caughtPokemon[pokemon.name] = pokemon
        console.log(`${name} was added to your Pokedex`)
    } else {
        console.log(`${name} escaped!`)
    };
    
}