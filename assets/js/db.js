import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

import { runTransaction } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyB7XyOLNmKHz7i5OCp76JBHYEFMjNDByVg",
  authDomain: "shotlist-10855.firebaseapp.com",
  projectId: "shotlist-10855",
  storageBucket: "shotlist-10855.appspot.com",
  messagingSenderId: "961267694086",
  appId: "1:961267694086:web:b8731035eb353b696ba187",
  measurementId: "G-KQD7E23TT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* doc db */
const starCountRef = ref(db, "shotlist/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  /* accounts = Object.keys(data).map(function (key) {
    return snapshot.val()[key];
  });
  accounts.map((item) => {
    render(item)
  }); */
});

/* them vao db */

const save = () => {
  try {
    const list = []
    const images = document.querySelectorAll('.image .content')
    const scenes = document.querySelectorAll('.scene .content')
    const setups = document.querySelectorAll('.setup .content')
    const shots = document.querySelectorAll('.shot .content')
    const subjects = document.querySelectorAll('.subjects .content')
    const camera = document.querySelectorAll('.camera .content')
    const ints = document.querySelectorAll('.int .content')
    const shotSizes = document.querySelectorAll('.shot-size .content')
    const shotTypes = document.querySelectorAll('.shot-type .content')
    const cameraMovements = document.querySelectorAll('.camera-movement .content')
    const equipments = document.querySelectorAll('.equipment .content')
    const lens = document.querySelectorAll('.lens .content')
    const descriptions = document.querySelectorAll('.description .content')
    const lyrics = document.querySelectorAll('.lyrics')
    const sounds = document.querySelectorAll('.sound .content')
    const note = document.querySelectorAll('.note .content')
    const scriptTimes = document.querySelectorAll('.script-time .content')
    const ests = document.querySelectorAll('.est .content')
    const shootTime = document.querySelectorAll('.shoot-time .content')
    const status = document.querySelectorAll('.status .content')
    console.log(images);
    const obj = {
      image: '',
    };
    console.log(obj);

    set(ref(db, "shotlist/" + obj.scene), obj);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

save()

const render =() => {

}
