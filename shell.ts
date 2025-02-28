class Shell {
    private commands: { [key: string]: Function };

    constructor() {
        this.commands = {};
    }

    registerCommand(command: string, action: Function) {
        this.commands[command] = action;
    }

    executeCommand(command: string, args: string[]) {
        if (this.commands[command]) {
            this.commands[command](...args);
        } else {
            console.error(`Command not found: ${command}`);
        }
    }
}

export default Shell;
