import { startREPL } from "./repl.js";
import { initState } from "./state.js"
import { PokeAPI } from "./pokeapi.js"


async function main() {
  const state = initState(5000);
  
  try { 
    startREPL(state);
  } catch (err) {
    console.log(err);
  }
    
}

main();