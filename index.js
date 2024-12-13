import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, get, set} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9wR_77owFbGaxJVOudW_X383uLnQGKYg",
  authDomain: "memodrills-key.firebaseapp.com",
  databaseURL: "https://memodrills-key-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "memodrills-key",
  storageBucket: "memodrills-key.firebasestorage.app",
  messagingSenderId: "724844117124",
  appId: "1:724844117124:web:4c08890cab090cb85b96d1"
};

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);

const db = getDatabase(app);

function checkAccess() {
  const userKey = document.getElementById("accessKey").value;
  if (userKey === correctKey) {
	localStorage.setItem('access_granted', 'true');
	document.getElementById('accessForm').style.display = 'none';
	document.getElementById('mainContent').style.display = 'block';
  } else {
	alert("Incorrect key. Please try again.");
  }
}

function saveKeyToDatabase(key) {
  const db = getDatabase();
  set(ref(db, 'accessKeys/' + key), true)
    .then(() => {
      console.log('Key saved successfully');
    })
    .catch((error) => {
      console.error('Error saving key:', error);
    });
}

function checkAccessKey(userKey) {
  const db = getDatabase();
  const keyRef = ref(db, 'accessKeys/' + userKey);

  get(keyRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("Key is valid");
        localStorage.setItem('access_granted', 'true');
        document.getElementById('accessForm').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
      } else {
        console.log("Key is invalid");
        alert("Incorrect key. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error checking key:", error);
    });
}

window.onload = function() {
  if (localStorage.getItem('access_granted') === 'true') {
	document.getElementById('accessForm').style.display = 'none';
	document.getElementById('mainContent').style.display = 'block';
  } else {
	document.getElementById('accessForm').style.display = 'block';
	document.getElementById('mainContent').style.display = 'none';
  }
}
