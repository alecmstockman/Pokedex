import type { State } from "./state.js"


export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a Pokemon name")
    };
    const name = args[0];
    console.log(`Throwing a Pokeball at ${name}`)
}