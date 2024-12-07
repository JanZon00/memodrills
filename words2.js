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

function startAutoPlay() {
    const interval = parseInt(document.getElementById("interval").value.trim(), 10);
    if (!interval || interval <= 0) {
        alert("Please enter a valid interval in milliseconds.");
        return;
    }
    stopAutoPlay();
    autoPlayInterval = setInterval(function() {
        displayRandomWord();
    }, interval);
    alert(`Auto advance started with interval: ${interval} ms`);
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
