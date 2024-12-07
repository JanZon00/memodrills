window.onload = function() {
    if (localStorage.getItem('access_granted') !== 'true') {
      window.location.href = "index.html";
    }
}

let isBlack = true;
let repeatDigit = null; 

function powtarzanieFunction() {
  repeatDigit = parseInt(document.getElementById("powtarzanie").value);
  if (isNaN(repeatDigit) || repeatDigit < 0 || repeatDigit > 7) {
    alert("Wprowadź liczbę od 0 do 7 lub odśwież stronę żeby zresetować.");
    repeatDigit = null;
    return;
  }
  displayFunction();
}

function toggleColor() {
  const button = document.getElementById('colorButton');
  isBlack = !isBlack;
  button.style.backgroundColor = isBlack ? '#366799' : '#0779f0';
}

function toggleText() {
  const button = document.getElementById('colorButton');
  button.innerHTML = isBlack ? 'Bez powtarzania' : queue.length;
}

function showOnClick() {
  const display = document.getElementById("displayNumber");
  display.style.cssText = "font-size:44px;color:white;";
  display.innerHTML = getRandomBinary(a);
}

function showHelp() {
  const helpSection = document.getElementById("Pomoc");
  helpSection.style.display = helpSection.style.display === "block" ? "none" : "block";
}

function showOptions() {
  const options = document.getElementById("Options");
  options.style.visibility = options.style.visibility === "visible" ? "hidden" : "visible";
}

function showOptions3() {
  const options = document.getElementById("Options3");
  options.style.visibility = options.style.visibility === "visible" ? "hidden" : "visible";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + Math.ceil(min);
}

function getRandomBinary(length) {
  let binary = '';
  for (let i = 0; i < length; i++) {
    binary += Math.floor(Math.random() * 2);
  }
  return binary;
}

let a = 0,
  b = 0,
  queue = [],
  norepeat = false;

function norepeatFunction() {
  norepeat = !norepeat;
}

function mixArr(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function rangeFunction() {
  a = parseInt(document.getElementById("lrange").value) || 0;
  b = parseInt(document.getElementById("rrange").value) || 0;

  b = b > 3 ? 3 : b;
  
  const biggerSpaceInput = document.getElementById("biggerSpace");
  if (!biggerSpaceInput.value) {
    biggerSpaceInput.value = a;
  }

  if (norepeat) {
    queue = mixArr(Array.from({ length: b - a + 1 }, (_, i) => i + a));
  }
  displayFunction();
}

function rangeFunction2() {
  norepeat = !norepeat;
  if (norepeat) rangeFunction();
}

function displayFunction() {
  const display = document.getElementById("displayNumber");
  const biggerSpaceValue = parseInt(document.getElementById("biggerSpace").value) || 1;
  let binaryBlocks = '';

  for (let i = 0; i < b; i++) {
    let binaryBlock = '';

    if (i === 0 && repeatDigit !== null && a === 3 && b === 3) {
      binaryBlock = repeatDigit.toString(2).padStart(a, '0');
    } else {
      binaryBlock = getRandomBinary(a);
    }

    let rowWithSpacing = '';
    for (let j = 0; j < binaryBlock.length; j++) {
      rowWithSpacing += `<div style="display:inline-block;width:20px;text-align:center;margin-right:5px;">${binaryBlock[j]}</div>`;
      if ((j + 1) % biggerSpaceValue === 0) {
        rowWithSpacing += `<div style="display:inline-block;width:8px;"></div>`;
      }
    }
    binaryBlocks += `<div style="display:inline-block;width:100%;margin-bottom:5px;">${rowWithSpacing}</div>`;
  }

  if (norepeat) toggleText();
  display.style.cssText = "font-size:40px;color:white;overflow:auto;margin: 0 auto;line-height: 1.1;";
  if (window.innerWidth > 768) {
    display.style.width = "30%";
  } else {
    display.style.width = "80%";
  }

  display.innerHTML = binaryBlocks;

  updateDisplayHeight(b);
}

function updateDisplayHeight(rrange) {
  const display = document.getElementById("displayNumber");
  if (rrange === 1) {
    display.style.height = "80px";
  } else if (rrange === 2) {
    display.style.height = "128px";
  } else if (rrange === 3) {
    display.style.height = "180px";
  }
}

function autoPlay() {
  const interval = parseInt(document.getElementById("interwał").value) || 1000;
  myInterval = setInterval(displayFunction, interval);
}

function showOptions2() {
  const options = document.getElementById("Options2");
  options.style.visibility = options.style.visibility === "visible" ? "hidden" : "visible";
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) displayFunction(); // ArrowRight
  if (e.keyCode === 80) clearInterval(myInterval); // 'P'
});
