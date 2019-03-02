import *as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAz-i5SvX25PaEVTrLqgSaV6q_oCdFYfJE",
    authDomain: "fyps-d7a6f.firebaseapp.com",
    databaseURL: "https://fyps-d7a6f.firebaseio.com",
    projectId: "fyps-d7a6f",
    storageBucket: "fyps-d7a6f.appspot.com",
    messagingSenderId: "800985670846"
  };
  firebase.initializeApp(config);

  export default firebase 