 import inquirer from 'inquirer';

let startTime: number = 0;
let running: boolean = false;
let interval:any;

function startTimer() {
    interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds
        displayTime(elapsedTime.toFixed(2));
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function toggleTimer() {
    if (running) {
        stopTimer();
        console.log("stop")
    } else {
        startTime = new Date().getTime() - (startTime > 0 ? startTime : 0); // Resume or start
        startTimer();
    }
    running = !running;
}

function startStopwatch() {
    inquirer
        .prompt({
            type: 'input',
            name: 'action',
            message: 'Press Enter to start/stop the stopwatch...',
        })
        .then((answer) => {
            if (answer.action === '') {
                toggleTimer();
                startStopwatch(); // Continue the loop
            }
        });
}

function displayTime(time: string) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(`Elapsed Time: ${time} seconds`);
}

console.log('Simple Stopwatch');
console.log('Press Enter to start/stop the stopwatch...');

startStopwatch();
