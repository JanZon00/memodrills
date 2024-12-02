function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function showOnClick() {
  var x = document.getElementById("displayNumber");
  var y = Math.floor(Math.random() * 1000);
  x.style.cssText  = "font-size:44px;color:white;"
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
var x;
const numbers = new Set();


var imagesArray = ["deck/1.png", "deck/2.png", "deck/3.png", "deck/4.png", "deck/5.png", "deck/6.png", "deck/7.png", "deck/8.png", "deck/9.png", "deck/10.png", "deck/11.png", "deck/12.png", "deck/13.png", "deck/14.png", "deck/15.png", "deck/16.png", "deck/17.png", "deck/18.png", "deck/19.png", "deck/20.png", "deck/21.png", "deck/22.png", "deck/23.png", "deck/24.png", "deck/25.png", "deck/26.png", "deck/27.png", "deck/28.png", "deck/29.png", "deck/30.png", "deck/31.png", "deck/32.png", "deck/33.png", "deck/34.png", "deck/35.png", "deck/36.png", "deck/37.png", "deck/38.png", "deck/39.png", "deck/40.png", "deck/41.png", "deck/42.png", "deck/43.png", "deck/44.png", "deck/45.png", "deck/46.png", "deck/47.png", "deck/48.png", "deck/49.png", "deck/50.png", "deck/51.png", "deck/52.png"];

function rangeFunction(){
	preloadImages(imagesArray);
	var a = document.getElementById("cards").value;
	console.log(a);
	let opcjaEweliny = document.getElementById("submitButton4");
	let txt = opcjaEweliny.textContent || opcjaEweliny.innerText;
	if(a == 2 && txt == "Opcja Eweliny"){
		var karta2;
		var karta3;
		
		karta2 = Math.floor(Math.random() * 52);
		karta3 = karta2;
		
		while(karta3 == karta2){
			karta3 = Math.floor(Math.random() * 52);
		}
		if(karta2 != karta3){
			document.canvas2.src = imagesArray[karta2];
			document.canvas3.src = imagesArray[karta3];
			document.canvas.src = src="blank.jpg";
			document.canvas4.src = src="blank.jpg";
		}
	}
	else if(a == 2 && txt == "Normalnie"){
		var karta2;
		var karta3;
		
		karta2 = Math.floor(Math.random() * 52);
		karta3 = karta2;
		
		while(karta3 == karta2){
			karta3 = getRandomInt(40, 51);
		}
		if(karta2 != karta3){
			var s = getRandomInt(0, 3);
			if(s == 1){
			document.canvas2.src = imagesArray[karta2];
			document.canvas3.src = imagesArray[karta3];
			document.canvas.src = src="blank.jpg";
			document.canvas4.src = src="blank.jpg";
			}
			else{
			document.canvas2.src = imagesArray[karta3];
			document.canvas3.src = imagesArray[karta2];
			document.canvas.src = src="blank.jpg";
			document.canvas4.src = src="blank.jpg";
			}
		}
	}
	else if(a == 3){
		var karta1;
		var karta2;
		var karta3;
		
		karta1 = Math.floor(Math.random() * 52);
		karta2 = karta1;
		karta3 = karta1;
		
		while(karta2 == karta1){
			karta2 = Math.floor(Math.random() * 52);
		}
		
		
		while(karta3 == karta1 || karta3 == karta2){
			karta3 = Math.floor(Math.random() * 52);
		}
		if(karta2 != karta1 && karta3 != karta1 && karta3 != karta2){
			document.canvas.src = imagesArray[karta1];
			document.canvas2.src = imagesArray[karta2];
			document.canvas3.src = imagesArray[karta3];
		}
	}
	else{
		var karta1;
		var karta2;
		var karta3;
		var karta4;
		
		karta1 = Math.floor(Math.random() * 52);
		karta2 = karta1;
		karta3 = karta1;
		karta4 = karta1;
		
		while(karta2 == karta1){
			karta2 = Math.floor(Math.random() * 52);
		}	
		while(karta3 == karta1 || karta3 == karta2){
			karta3 = Math.floor(Math.random() * 52);
		}
		while(karta4 == karta1 || karta4 == karta2 || karta4 == karta3){
			karta4 = Math.floor(Math.random() * 52);
		}
		if(karta2 != karta1 && karta3 != karta1 && karta3 != karta2 && karta4 != karta1 && karta4 != karta2 && karta4 != karta3){
			document.canvas.src = imagesArray[karta1];
			document.canvas2.src = imagesArray[karta2];
			document.canvas3.src = imagesArray[karta3];
			document.canvas4.src = imagesArray[karta4];
		}
	}
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
 if (key.keyCode == "39") {
	rangeFunction();
 }
}
window.addEventListener("keydown", checkKeyPressRight, false);

function checkKeyPressRight(key) {
	if (key.keyCode == "38") {
		rangeFunction2();
	}
}

function getRandomItem(set) {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}

function rangeFunction2() {	
 if(numbers.size === 0){
	
 }
 else{
  var r = getRandomItem(numbers);
  if(r < 100 && r >= 10){
	num = "0" + r;
	document.getElementById("displayNumber").innerHTML = num;
  }
  else if(r < 10 && r >= 0){
	num = "00" + r;
	document.getElementById("displayNumber").innerHTML = num;
  }
  else{
	document.getElementById("displayNumber").innerHTML = r;
  }
 }
}

function autoPlay() {
	var v = document.getElementById("interwał").value;
	console.log(v);	
	myInterval = setInterval(rangeFunction, v);
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
function showOptions3() {
  var x = document.getElementById("Options3");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}
function showOptions4() {
  var x = document.getElementById("Options4");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

let waskie = 0;
function changeBorder() {
  if(waskie == 0){
  document.getElementById('card1').style.marginLeft = "74px";
  document.getElementById('card2').style.marginLeft = "25px";
  document.getElementById('card3').style.marginRight = "25px";
  document.getElementById('card4').style.marginRight = "74px";
  waskie = 1;
  }
  else{
  document.getElementById('card1').style.marginLeft = "120px";
  document.getElementById('card2').style.marginLeft = "40px";
  document.getElementById('card3').style.marginRight = "40px";
  document.getElementById('card4').style.marginRight = "120px";
  waskie = 0;
  }
}

let btn = document.getElementById('submitButton3');
let message = document.querySelector('h1');
let index = 0;

const texts = ['WĄSKO', 'SZEROKO'];

btn.addEventListener('click', () =>{
	btn.innerText = texts[index];
  index = index >= texts.length - 1 ? 0 : index + 1;
  changeBorder();
});

let btn2 = document.getElementById('submitButton4');
let index2 = 0;

const texts2 = ['Normalnie', 'Opcja Eweliny'];

btn2.addEventListener('click', () =>{
	btn2.innerText = texts2[index2];
  index2 = index2 >= texts2.length - 1 ? 0 : index2 + 1;
  rangeFunction();
});
