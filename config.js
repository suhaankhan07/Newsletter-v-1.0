 import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyCQmQMX24tGAI30CWPAO3AQgJeOh4ooiCM",
    authDomain: "newslet-18c61.firebaseapp.com",
    databaseURL: "https://newslet-18c61.firebaseio.com",
    projectId: "newslet-18c61",
    storageBucket: "newslet-18c61.appspot.com",
    messagingSenderId: "214093010680",
    appId: "1:214093010680:web:b4df917c06ae58d3918d0d",
    measurementId: "G-NY2Z4N2MMN"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
   
   export default firebase.database();