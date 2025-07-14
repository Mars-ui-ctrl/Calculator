// let display = document.getElementById("display");
// let buttons = document.querySelectorAll("button");
// let clicksound = document.getElementById("click-sound");
// let errorsound = document.getElementById("error-sound");

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         errorsound.currentTime = 0;
//         clicksound.currentTime = 0; // reset sound
//         clicksound.play();
//         let value = button.innerText;
//         if (value === "C") {
//             display.value = "";
//         }
//         else if (value === "←") {
//             display.value = display.value.slice(0, -1);
//         }
//         else if (value === "=") {
//             try {
//                 display.value = eval(display.value);

//             }
//             catch (error) {
//                 display.value = "ERROR";
//                 errorsound.currentTime = 0;
//                 errorsound.play();
//                 clicksound.pause();
//             }
//         }
//         else {
//             display.value += value;
//         };



//     });
// });







const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clickSound = document.getElementById("click-sound");
const errorSound = document.getElementById("error-sound");

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("pressed");
setTimeout(() => button.classList.remove("pressed"), 100);
        const value = button.innerText;
        playSound(clickSound);
        if ("vibrate" in navigator) {
    navigator.vibrate(50); // vibrate for 50ms
}

        switch (value) {
            case "C":
                display.value = "";
                break;
            case "←":
                display.value = display.value.slice(0, -1);
                break;
            case "=":
                try {
                    display.value = math.evaluate(display.value);
                } catch {
                    display.value = "ERROR";
                    clickSound.pause();
                    playSound(errorSound);
                }
                break;
            default:
                display.value += value;
        }
    });
});
