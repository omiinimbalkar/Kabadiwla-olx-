import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAa1f7Rw1F9O7bfiHuertzoY3imE5WSbHs",
  authDomain: "scraper-f7ebb.firebaseapp.com",
  databaseURL: "https://scraper-f7ebb-default-rtdb.firebaseio.com",
  projectId: "scraper-f7ebb",
  storageBucket: "scraper-f7ebb.appspot.com",
  messagingSenderId: "548949106224",
  appId: "1:548949106224:web:03a2e275e21fc01a5357f5",
  measurementId: "G-8B5HS406ET"
};

export default firebase.initializeApp(firebaseConfig)

