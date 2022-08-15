import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getFirestore, doc, setDoc, onSnapshot, collection, query, where, } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB9eizKWMF8gJfOM7WwSw358u9PzIobfZc",
    authDomain: "formfirebase-f11ca.firebaseapp.com",
    projectId: "formfirebase-f11ca",
    storageBucket: "formfirebase-f11ca.appspot.com",
    messagingSenderId: "1047025986127",
    appId: "1:1047025986127:web:cfe5f79e38f5828c26d83a"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener('click', async () => {
    await setDoc(doc(db, "userData", `user${Date.now()}`), {
    firstName: firstname.value,
    lastName: lastname.value,
  });
})

const q = await query(collection(db, "userData"));
onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach(async(doc) => {
    list.innerHTML = '';
    const data = await doc.data()
    list.innerHTML += `<p>${data.firstName} ${data.lastName}</p>`;
  });
});