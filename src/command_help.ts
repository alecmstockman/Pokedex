import type { CLICommand } from "./command.js"

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Prints a help menu here")
}