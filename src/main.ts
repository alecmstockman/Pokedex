import { startREPL } from "./repl.js";
import { initState } from "src/state.js"


function main() {
  startREPL();
  initState();
}

main();