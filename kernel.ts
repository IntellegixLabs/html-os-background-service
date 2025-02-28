class Kernel {
    private processes: any[];

    constructor() {
        this.processes = [];
    }

    startProcess(process: any) {
        this.processes.push(process);
        process.start();
    }

    stopProcess(process: any) {
        const index = this.processes.indexOf(process);
        if (index > -1) {
            this.processes.splice(index, 1);
            process.stop();
        }
    }
}

export default Kernel;
