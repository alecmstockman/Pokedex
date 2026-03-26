import { createInterface, type Interface } from "readline";


export type CLICommand = {
    name: string;
    description: string;
    callback: (commands: Record<string, CLICommand>) => void;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
};

export function initState(): State {
    const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
            });
    const = {
            exit: {
                name: "exit",
                description: "Exits the pokedex",
                callback: (state: State) => void;,
            },
            help: {
                name: "help", 
                description: "Displays help options",
                callback: commandHelp,
            }
            // can add more commands here
        };
        
    return;
}