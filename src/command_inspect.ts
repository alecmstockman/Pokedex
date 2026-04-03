import type { State } from "./state.js"


export async function commandInspect(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a Pokemon name")
    };
    const name = args[0];

    if (!state.caughtPokemon[name]) {
        console.log("you have not caught that pokemon")
    } else {
        const pokemon = state.caughtPokemon[name];

        console.log(`Name: ${state.caughtPokemon[name].name}`);
        console.log(`Height: ${state.caughtPokemon[name].height}`);
        console.log(`Weight: ${state.caughtPokemon[name].weight}`);
        console.log(`Stats:`);
        console.log(`  -hp: ${pokemon.stats[0].base_stat}`)
        console.log(`  -attack: ${pokemon.stats[1].base_stat}`)
        console.log(`  -defense: ${pokemon.stats[2].base_stat}`)
        console.log(`  -special-attack: ${pokemon.stats[3].base_stat}`)
        console.log(`  -special-attack: ${pokemon.stats[4].base_stat}`)
        console.log(`  -speed: ${pokemon.stats[5].base_stat}`)
        console.log(`Types:`);
        for (const type of pokemon.types) {
            console.log(`  - ${type.type.name}`)
        };
    };
    
}