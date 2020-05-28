import * as firebase from 'firebase'
export default () => {
    var firebaseConfig = {
    apiKey: "AIzaSyABaKyzyUIFvz_-nyTia13ciiCFCyFQ0_s",
    authDomain: "gestoria-61890.firebaseapp.com",
    databaseURL: "https://gestoria-61890.firebaseio.com",
    projectId: "gestoria-61890",
    storageBucket: "gestoria-61890.appspot.com",
    messagingSenderId: "679211934757",
    appId: "1:679211934757:web:00881f0cfa04a9a009cbcc",
    measurementId: "G-1XTSWWFTC9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
