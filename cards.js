window.onload = function() {
    if (localStorage.getItem('access_granted') !== 'true') {
      window.location.href = "index.html";
    }
}

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

let btn = document.getElementById('submitButton3');
let index = 0;

const texts = ['Narrow', 'Wide'];

btn.addEventListener('click', () => {
    index = index >= texts.length - 1 ? 0 : index + 1;
    btn.innerText = texts[index];
    changeBorder();
});

let waskie = false;

function changeBorder() {
    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    let card3 = document.getElementById('card3');
    let card4 = document.getElementById('card4');

    if (!waskie) {
        card1.style.marginLeft = "74px";
        card2.style.marginLeft = "25px";
        card3.style.marginRight = "25px";
        card4.style.marginRight = "74px";
    } else {
        card1.style.marginLeft = "120px";
        card2.style.marginLeft = "40px";
        card3.style.marginRight = "40px";
        card4.style.marginRight = "120px";
    }
    waskie = !waskie;
}


let num;
var x;
const numbers = new Set();


var imagesArray = ["deck/1.png", "deck/2.png", "deck/3.png", "deck/4.png", "deck/5.png", "deck/6.png", "deck/7.png", "deck/8.png", "deck/9.png", "deck/10.png", "deck/11.png", "deck/12.png", "deck/13.png", "deck/14.png", "deck/15.png", "deck/16.png", "deck/17.png", "deck/18.png", "deck/19.png", "deck/20.png", "deck/21.png", "deck/22.png", "deck/23.png", "deck/24.png", "deck/25.png", "deck/26.png", "deck/27.png", "deck/28.png", "deck/29.png", "deck/30.png", "deck/31.png", "deck/32.png", "deck/33.png", "deck/34.png", "deck/35.png", "deck/36.png", "deck/37.png", "deck/38.png", "deck/39.png", "deck/40.png", "deck/41.png", "deck/42.png", "deck/43.png", "deck/44.png", "deck/45.png", "deck/46.png", "deck/47.png", "deck/48.png", "deck/49.png", "deck/50.png", "deck/51.png", "deck/52.png"];

let btn2 = document.getElementById('submitButton4');
let index2 = 0;

const texts2 = ["Normal", "Ewelina's option"];

btn2.addEventListener('click', () => {
    index2 = index2 >= texts2.length - 1 ? 0 : index2 + 1;
    btn2.innerText = texts2[index2];
    rangeFunction();
});

function rangeFunction() {
    preloadImages(imagesArray);
    var a = parseInt(document.getElementById("cards").value); // Pobieramy liczbę kart jako liczbę całkowitą
    console.log(a);

    let opcjaEweliny = document.getElementById("submitButton4").innerText;

    let cards = [
        document.getElementById("card1"),
        document.getElementById("card2"),
        document.getElementById("card3"),
        document.getElementById("card4")
    ];
    cards.forEach(card => {
        card.style.visibility = "hidden";
        card.src = "blank.jpg";
    });
    if (isNaN(a) || a < 1 || a > 4) {
        console.error("Invalid number of cards specified:", a);
        a = 4;
    }

    let usedIndices = new Set();
    let drawnFromHighRange = false;

    for (let i = 0; i < a; i++) {
        let cardIndex;

        if (opcjaEweliny === "Ewelina's option" && a === 2) {
            if (i === a - 1 && !drawnFromHighRange) {
                do {
                    cardIndex = Math.floor(Math.random() * (52 - 40)) + 40;
                } while (usedIndices.has(cardIndex));
                drawnFromHighRange = true;
            } else {
                let range = Math.random() < 0.5 ? [40, 52] : [0, 52];
                let min = range[0];
                let max = range[1];
                do {
                    cardIndex = Math.floor(Math.random() * (max - min)) + min;
                } while (usedIndices.has(cardIndex));
                if (cardIndex >= 40) {
                    drawnFromHighRange = true;
                }
            }
        } else {
            do {
                cardIndex = Math.floor(Math.random() * 52);
            } while (usedIndices.has(cardIndex));
        }

        usedIndices.add(cardIndex);
        cards[i].style.visibility = "visible";
        cards[i].src = imagesArray[cardIndex];
    }
}


window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
 if (key.keyCode == "39") {
	rangeFunction();
 }
}
window.addEventListener("keydown", checkKeyPressRight, false);

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