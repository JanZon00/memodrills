import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, get, set, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

window.onload = function() {
    if (localStorage.getItem('access_granted') !== 'true') {
      window.location.href = "index.html";
    }
}

const firebaseConfig = {
  apiKey: "AIzaSyADU828Wkib8MUf94R0gb0KYAPQntoGV-c",
  authDomain: "memodrills.firebaseapp.com",
  databaseURL: "https://memodrills-default-rtdb.firebaseio.com/",
  projectId: "memodrills",
  storageBucket: "memodrills.firebasestorage.app",
  messagingSenderId: "87093226116",
  appId: "1:87093226116:web:c6a60a544f1f727826f0d1"
};

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);

const db = getDatabase(app);

let currentList = "";
let words = [];

async function addData(listName, wordList) {
  try {
    const wordsRef = ref(db, `wordLists/${listName}`);
    await set(wordsRef, { words: wordList });
    console.log("Lista słów została zapisana do Realtime Database!");
    loadWordLists();
  } catch (e) {
    console.error("Błąd podczas zapisu danych: ", e);
  }
}

async function getData(listName) {
  try {
    const wordsRef = ref(db, `wordLists/${listName}/words`);
    const snapshot = await get(wordsRef);
    if (snapshot.exists()) {
      words = snapshot.val();
      console.log("Dane pobrane z bazy:", words);
    } else {
      console.log("Brak danych w bazie.");
    }
  } catch (e) {
    console.error("Błąd podczas pobierania danych: ", e);
  }
}

async function loadWordLists() {
  const listsRef = ref(db, "wordLists");
  const snapshot = await get(listsRef);
  const select = document.getElementById("list-select");
  select.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.innerText = "Choose a list...";
  select.appendChild(defaultOption);

  if (snapshot.exists()) {
    const lists = snapshot.val();
    for (let listName in lists) {
      const option = document.createElement("option");
      option.value = listName;
      option.innerText = listName;
      select.appendChild(option);
    }
  }
}

let autoPlayInterval;

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

function displayRandomWord() {
    const wordElement = document.getElementById("word");
    if (words.length === 0) {
        wordElement.innerText = "No words available.";
        return;
    }

    const wordsToDisplay = [];
    for (let i = 0; i < groupSize; i++) {
        let word;

        if (noRepetitions && displayedWords.size >= words.length) {
            wordElement.innerText = "No more unique words.";
            stopAutoPlay();
            return;
        }

        do {
            const newWordIndex = Math.floor(Math.random() * words.length);
            word = words[newWordIndex];
        } while (noRepetitions && displayedWords.has(word));

        wordsToDisplay.push(word);
        displayedWords.add(word);
    }

    wordElement.innerHTML = wordsToDisplay.map(word => `<div>${word}</div>`).join("");
}

document.getElementById('next-button').addEventListener('click', handleNextButtonClick);
document.getElementById('list-select').addEventListener('change', handleListChange);

function handleNextButtonClick() {
  displayRandomWord();
}

async function handleListChange(e) {
  const selectedList = e.target.value;
  currentList = selectedList;
  await getData(selectedList);
  displayRandomWord();
}

document.getElementById('file-input').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file && file.type === "text/plain") {
    const reader = new FileReader();
    reader.onload = async function(e) {
      const fileContent = e.target.result;
      const wordList = fileContent.split('\n').map(word => word.trim()).filter(word => word !== "");
      if (wordList.length > 0) {
        const listName = prompt("Enter a name for the list:");
        if (listName) {
          await addData(listName, wordList);
        }
      } else {
        alert("Invalid file format. Ensure the file contains one word per line.");
      }
    };
    reader.readAsText(file);
  } else {
    alert("Please upload a valid text (.txt) file.");
  }
}

document.getElementById('delete-button').addEventListener('click', handleDeleteList);

async function handleDeleteList() {
  const listName = document.getElementById('delete-input').value.trim();
  
  if (!listName) {
    alert("Please enter a valid list name to delete.");
    return;
  }

  if (listName === "International Names") {
    alert('You are not allowed to delete the "International Names" list.');
    return;
  }

  const listRef = ref(db, `wordLists/${listName}`);
  try {
    await remove(listRef);
    alert(`List "${listName}" has been deleted.`);
    loadWordLists();
  } catch (e) {
    console.error("Błąd podczas usuwania listy: ", e);
  }
}

window.addEventListener('DOMContentLoaded', async function() {
  await loadWordLists();
  if (currentList) {
    await getData(currentList);
    displayRandomWord();
  }
});

window.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    displayRandomWord();
  }
});

document.getElementById('list-select').addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
  }
});

window.addEventListener("keydown", checkKeyPressP, false);
function checkKeyPressP(key) {
	if (key.keyCode == "80") {
		clearInterval(myInterval);
	}
}
