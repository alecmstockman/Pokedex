import * as readline from "readline";
import { getCommands } from "./commands.js"
// import { getCommands } from "./src/commands.ts"

export function cleanInput(input: string): string[] {
    return input
        .trim()
        .toLowerCase()
        .split(/\s+/);
}

export function startREPL() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
        });

    console.log("Welcome to the Pokedex!")
    const usage = `Usage

help: Displays a help message
exit: Exit the Pokedex`;
    console.log(usage)

    rl.prompt();
 
    rl.on("line", (line: string) => {
        const cleaned = cleanInput(line)
    
         if (cleaned.length === 0 || cleaned[0] === "") {
            rl.prompt();
            return;
        }
        const commandName = cleaned[0];
        const commands = getCommands();
        const cmd = commands[commandName];

        if (!cmd) {
            console.log("Unkown command");
        } else {
            try {
                cmd.callback(commands);
            } catch (e) {
                console.log(e)
            }
        }
       
        rl.prompt();
        });
}


