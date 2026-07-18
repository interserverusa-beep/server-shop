// کدی که از فایربیس گرفتی را اینجا جایگزین کن
const firebaseConfig = {
  apiKey: "AIzaSyCZDyapSiYQQP7PDQpYC0zydYIIteNO6xg",
  authDomain: "my-first-app-54331.firebaseapp.com",
  projectId: "my-first-app-54331",
  storageBucket: "my-first-app-54331.firebasestorage.app",
  messagingSenderId: "346063177403",
  appId: "1:346063177403:web:88d4e33797a150e2ff0b9e",
  measurementId: "G-8MH3T2QZGN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
