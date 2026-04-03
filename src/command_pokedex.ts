import type { State } from "./state.js"


export async function commandPokedex(state: State, ...args: string[]) {
    // console.log(state.caughtPokemon)
    console.log("Your Pokedex:")

    for (const [name, pokemon] of Object.entries(state.caughtPokemon)) {
        console.log(`  -${name}`)
    };
    
}