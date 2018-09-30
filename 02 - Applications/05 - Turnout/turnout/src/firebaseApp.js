import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBjAJDfQmL-THpNj3eLD7jaGR7FfruBSMU",
    authDomain: "turnoutfundamentals.firebaseapp.com",
    databaseURL: "https://turnoutfundamentals.firebaseio.com",
    projectId: "turnoutfundamentals",
    storageBucket: "turnoutfundamentals.appspot.com",
    messagingSenderId: "415582463773"
};


export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');