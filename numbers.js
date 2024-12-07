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
  
  if(norepeat == false){
	  c = getRandomInt(a, b);
  }
  else{
	  toggleText();
	  c = queue.pop();
  }
  
  x = document.getElementById("displayNumber");
  x.style.cssText  = "font-size:44px;color:white;"
  x = c;
  window.addEventListener("keydown", checkKeyPressR, false);
  function checkKeyPressR(key) {  
	  if (key.keyCode == "82") {
		  numbers.add(x);
	  }
  }

  if(b <= 99 && b >= 10){
    if(x < 100 && x >= 10){
      document.getElementById("displayNumber").innerHTML = x;
      }
      else if(x < 10 && x >= 0){
      num = "0" + x;
      document.getElementById("displayNumber").innerHTML = num;
    }
  }
  else if(b <= 9){
    document.getElementById("displayNumber").innerHTML = x;
  }
  else{
    if(x < 100 && x >= 10){
    num = "0" + x;
    document.getElementById("displayNumber").innerHTML = num;
    }
    else if(x < 10 && x >= 0){
    num = "00" + x;
    document.getElementById("displayNumber").innerHTML = num;
    }
    else{
    document.getElementById("displayNumber").innerHTML = x;
    }
  }
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
 if (key.keyCode == "39") {
	displayFunction();
 }
}

function autoPlay() {
	var v = document.getElementById("interwał").value;
	console.log(v);	
	myInterval = setInterval(displayFunction, v);
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