import { startREPL } from "./repl.js";
import { initState } from "./state.js"
import { PokeAPI } from "./pokeapi.js"


async function main() {
  const state = initState();
  
  try { 
    startREPL(state);
  } catch (err) {
    console.log(err);
  }
    
}

main();