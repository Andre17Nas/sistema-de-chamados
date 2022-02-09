import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDSLQJ6BH57wsjnmBG5OJfKI_S1DjcIdtY",
    authDomain: "sistema-chamados-41f04.firebaseapp.com",
    projectId: "sistema-chamados-41f04",
    storageBucket: "sistema-chamados-41f04.appspot.com",
    messagingSenderId: "328055542015",
    appId: "1:328055542015:web:b4aa085bdba3e09ebc3cca"
  };

//const app = initializeApp(firebaseConfig);

if(!firebase.getApps.length){
    firebase.initializeApp(firebaseConfig);
}