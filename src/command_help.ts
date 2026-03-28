import type { State } from "./state.js"


export async function commandHelp(state: State) {
    for (const cmd of Object.values(state.commands)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    };
}

// commands: Record<string, CLICommand>