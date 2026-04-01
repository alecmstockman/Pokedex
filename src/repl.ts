import { State } from "./state.js"

export function cleanInput(input: string): string[] {
    return input
        .trim()
        .toLowerCase()
        .split(/\s+/);
}

export function startREPL(state: State) {

    console.log("Welcome to the Pokedex!")
    const usage = `
    USAGE:
    help: Displays a help message
    exit: Exit the Pokedex
    `;

    console.log(usage)

    state.readline.prompt();
 
    state.readline.on("line", async (line: string) => {
        const cleaned = cleanInput(line)
    
         if (cleaned.length === 0 || cleaned[0] === "") {
            state.readline.prompt();
            return;
        }

        const commandName = cleaned[0];
        const args = cleaned.slice(1);
        console.log(`Command args: ${args}`)
        const cmd = state.commands[commandName];

        if (!cmd) {
            console.log("Unknown command");
        } else {
            try {
                await cmd.callback(state, ...args);
            } catch (e) {
                console.log(e)
            }
        }
       
        state.readline.prompt();
        });
}


