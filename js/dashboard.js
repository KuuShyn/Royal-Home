// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import {
  getDatabase,
  update,
  ref,
  child,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
$(document).ready(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyAsj-0IqtUQktIP4oARc_pkq_5rbKcBbOU",
    authDomain: "smart-a6c4d.firebaseapp.com",
    databaseURL:
      "https://smart-a6c4d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-a6c4d",
    storageBucket: "smart-a6c4d.appspot.com",
    messagingSenderId: "688509571679",
    appId: "1:688509571679:web:3fdaf820f66f87667601ea",
    measurementId: "G-H0P7G39GT2",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();

  const LightStateRef = ref(db, "LIGHTS");

  // Update Manual and Smart states for each plug on page load
  onValue(LightStateRef, (snapshot) => {
    const data = snapshot.val();
    for (let i = 1; i <= 2; i++) {
      const plugId = `Plug${i}`;
      const manualState = data[plugId].Manual;
      const smartState = data[plugId].Smart;
      $(`#ManualLight${i}`).prop("checked", manualState === "on");
      $(`#SmartLight${i}`).prop("checked", smartState === "on");
    }
  });

  function updatePlugValue(plug, type, value) {
    update(child(LightStateRef, plug), { [type]: value })
      .then(() => {
        console.log(`Plug ${plug} is now ${value} in ${type} mode`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // click event for manual and smart switches for plug1
  $("#ManualLight1, #SmartLight1").on("click", (event) => {
    const type = event.currentTarget.id === "ManualLight1" ? "Manual" : "Smart";
    const value = $(event.currentTarget).prop("checked") ? "on" : "off";
    updatePlugValue("Plug1", type, value);
  });

  // click event for manual and smart switches for plug2
  $("#ManualLight2, #SmartLight2").on("click", (event) => {
    const type = event.currentTarget.id === "ManualLight2" ? "Manual" : "Smart";
    const value = $(event.currentTarget).prop("checked") ? "on" : "off";
    updatePlugValue("Plug2", type, value);
  });
});
