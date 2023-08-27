import inquirer from 'inquirer';
import chalk from 'chalk';

const res = await inquirer.prompt({
    type: "number",
    message: "Enter the time in seconds: ",
    name: "seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a valid number.";
        } else if (input <= 0 || input > 3600) {
            return "Please enter a number between 1 and 3600 seconds.";
        } else {
            return true;
        }
    },
}
);

function startCountdown(seconds: number) {
    let remainingSeconds = seconds;

    function updateTimerDisplay() {
        const minutes = Math.floor(remainingSeconds / 60);
        // console.log(minutes)
        const seconds = remainingSeconds % 60;
        // console.log(seconds)
        console.log(`${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`);
    }

    function countdown() {
        if (remainingSeconds <= 0) {
            console.log("Timer has expired");
            process.exit();
        }

        updateTimerDisplay();
        remainingSeconds--;

        setTimeout(countdown, 1000);
    }

    countdown();
}

startCountdown(res.seconds);

