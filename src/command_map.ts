import type { State } from "./state.js"


export  async function commandMap(state: State) {    
    
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL || undefined);
    for (const result of locations.results) {
        console.log(result.name)
    };
    
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    return;
}

export async function commandMapBack(state: State): Promise<void> {
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL || undefined);
    for (const result of locations.results) {
        console.log(result.name)
    };

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    return;
}
