let noRepetitions = false;
let displayedWords = new Set();
let groupSize = 1;
let autoPlayInterval;

function showOptions() {
    const x = document.getElementById("Options");
    x.style.visibility = x.style.visibility === "visible" ? "hidden" : "visible";
}

function applyGroupNumber() {
    const input = document.getElementById("lrange").value.trim();
    groupSize = parseInt(input, 10) || 1;
}

function showOptions2() {
    const x = document.getElementById("Options2");
    x.style.visibility = x.style.visibility === "visible" ? "hidden" : "visible";
}

let isAutoPlaying = false;

function startAutoPlay() {
    const intervalInput = document.getElementById("interval");
    const startPauseButton = document.getElementById("submitButton2");

    if (!isAutoPlaying) {
        const interval = parseInt(intervalInput.value.trim(), 10);
        if (!interval || interval <= 0) {
            alert("Please enter a valid interval in milliseconds.");
            return;
        }
        stopAutoPlay();
        autoPlayInterval = setInterval(function () {
            displayRandomWord();
        }, interval);
        intervalInput.disabled = true;
        startPauseButton.innerText = "Pause";
        isAutoPlaying = true;
    } else {
        stopAutoPlay();
        intervalInput.disabled = false;
        startPauseButton.innerText = "Start";
        isAutoPlaying = false;
    }
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function toggleNoRepetitions() {
    noRepetitions = !noRepetitions;
    displayedWords.clear();
    const btn = document.getElementById("colorButton");
    btn.style.backgroundColor = noRepetitions ? "#008000" : "";
    alert(`No repetitions is now ${noRepetitions ? "enabled" : "disabled"}`);
}
