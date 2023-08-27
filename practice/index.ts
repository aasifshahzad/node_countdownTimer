import inquirer from 'inquirer'
import { differenceInSeconds } from "date-fns"

//Countdown timer using "date-fns" module
//https://youtu.be/gEhM5mjn2Jk

const res = await inquirer.prompt(
    {
        type: "number",
        message: "Enter the time in seconds: ",
        name: "seconds",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid number."
            } else if (input > 60) {
                return "Second must be in 60"
            } else {
                return true
            }
        },
    }
);

function startTime(val: number) {
    const InitialTime = new Date().setSeconds(new Date().getSeconds() + val );
    const intervalTime = new Date(InitialTime);
    setInterval(() => {
        const currentTime = new Date();
        //console.log(currentTime);
        const timeDiff = differenceInSeconds(intervalTime , currentTime) - 2;
        //console.log(timeDiff);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit()
        }
        const minutes = Math.floor(((timeDiff) % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`);
    }, 1000)
}

startTime(res.seconds);