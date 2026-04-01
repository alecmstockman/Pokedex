import type { State } from "./state.js"


export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !==1) {
        throw new Error("you must provide a location name");
    };
    const name = args[0];
    const location = await state.pokeAPI.fetchLocation(name);

    const pokemonList = location.pokemon_encounters;
    console.log(`Exploring ${location.name}...`)
    console.log("Found Pokemon:");
    for (const item of pokemonList) {
        console.log(` - ${item.pokemon.name}`);
    };

}