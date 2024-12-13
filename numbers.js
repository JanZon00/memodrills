window.onload = function() {
    if (localStorage.getItem('access_granted') !== 'true') {
      window.location.href = "index.html";
    }
}

let isBlack = true;

function toggleColor() {
  const button = document.getElementById('colorButton');
  
  if (!isBlack) {
    button.style.backgroundColor = '#366799';
    isBlack = true;
  } else {
    button.style.backgroundColor = '#0779f0';
    isBlack = false;
  }
}

function toggleText() {
  const button = document.getElementById('colorButton');
  
  if (isBlack) {
	button.innerHTML = 'No repetitions';
  } else {
	button.innerHTML = queue.length;
  }
}

function showOnClick() {
  var x = document.getElementById("displayNumber");
  var y = Math.floor(Math.random() * 1000);
  x.style.cssText  = "font-size:44px;color:white;";
  if (x.style.display === "none") {
	document.getElementById("displayNumber").innerHTML = y;
  } else {
    document.getElementById("displayNumber").innerHTML = y;
  }
}	
function showHelp() {
  var x = document.getElementById("Pomoc");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function showOptions() {
  var x = document.getElementById("Options");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '37') {
    }
    else if (e.keyCode == '39') {
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num;
var x, c;
var a = 0;
var b = 0;
const numbers = new Set();
let norepeat = false;
let queue = [];

function norepeatFunction(){
	if(norepeat == false) {norepeat = true;}
	else { norepeat = false; }
}

function mixArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
	return arr;
}


function rangeFunction() {	
  a = document.getElementById("lrange").value;
  b = document.getElementById("rrange").value;
  
  if(norepeat == true){
	queue = [];
	for (let i = a; i <= b; i++) {
		queue.push(i);
	}
	queue = mixArr(queue);
  }
  displayFunction();
}

function rangeFunction2(){
	
	if(norepeat == false){
	  norepeat = true;
	  rangeFunction()
	}else{
		norepeat = false;
	}
}

function displayFunction() {
  console.log(queue);
  console.log(queue.length);

  c = norepeat ? queue.pop() : getRandomInt(a, b);
  toggleText();

  let formattedNumber = c.toString();
  while (formattedNumber.length < b.toString().length) {
    formattedNumber = "0" + formattedNumber;
  }

  document.getElementById("displayNumber").innerHTML = formattedNumber;
  document.getElementById("displayNumber").style.cssText = "font-size:44px;color:white;";

  window.addEventListener("keydown", function (key) {
    if (key.keyCode == "82") {
      numbers.add(c);
    }
  }, { once: true });
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
 if (key.keyCode == "39") {
	displayFunction();
 }
}

let isAutoPlaying = false;
let myInterval;

function autoPlay() {
    const button = document.getElementById("submitButton2");
    const intervalInput = document.getElementById("interwał");

    if (!isAutoPlaying) {
        const intervalValue = parseInt(intervalInput.value);

        if (isNaN(intervalValue) || intervalValue <= 0) {
            alert("Please enter a valid positive number for milliseconds.");
            return;
        }

        myInterval = setInterval(displayFunction, intervalValue);
        button.textContent = "Pause";
        intervalInput.disabled = true;
        isAutoPlaying = true;
    } else {
        clearInterval(myInterval);
        button.textContent = "Start";
        intervalInput.disabled = false;
        isAutoPlaying = false;
    }
}
window.addEventListener("keydown", checkKeyPressP, false);
function checkKeyPressP(key) {
	if (key.keyCode == "80") {
		clearInterval(myInterval);
	}
}
function showOptions2() {
  var x = document.getElementById("Options2");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}