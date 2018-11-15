  import firebase from 'firebase/App'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgxC8NI7VKqMIHKRa9q2XVPmzot5sK0vs",
    authDomain: "mario-chat.firebaseapp.com",
    databaseURL: "https://mario-chat.firebaseio.com",
    projectId: "mario-chat",
    storageBucket: "mario-chat.appspot.com",
    messagingSenderId: "698740349405"
  };
  const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  export default firebaseApp.firestore();
