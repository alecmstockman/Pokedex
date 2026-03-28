import { commandExit } from "./command_exit.js"
import { commandHelp } from "./command_help.js"
import { commandMap, commandMapBack } from "./command_map.js"
import type { CLICommand } from "./state.js"


export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays help options",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays next 20 locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays previous 20 locations",
            callback: commandMapBack
        },
    };
}