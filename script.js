const text = document.getElementById("text");

const breatheInTime = 4000;
const holdTime = 7000;
const breatheOutTime = 8000;

function startBreathing() {
    text.innerText = "BREATHE IN";
    text.style.color = "rgb(116, 9, 138)";

    setTimeout(() => {
        text.innerText = "HOLD";
        text.style.color = "rgb(177, 8, 112)";

        setTimeout(() => {
            text.innerText = "BREATHE OUT";
            text.style.color = "rgb(216, 127, 25)";
        }, holdTime);
    }, breatheInTime);
}

setInterval(startBreathing, breatheInTime + holdTime + breatheOutTime);

startBreathing();
