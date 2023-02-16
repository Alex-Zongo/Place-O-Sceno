import firebase from "firebase";

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	authDomain: "place-o-sceno.firebaseapp.com",
// 	projectId: "place-o-sceno",
// 	storageBucket: "place-o-sceno.appspot.com",
// 	messagingSenderId: "94577665027",
// 	appId: "1:94577665027:web:355d971b655fba12f29a36",
// 	measurementId: "G-MPYKS6E709",
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "place-o-sceno.firebaseapp.com",
	projectId: "place-o-sceno",
	storageBucket: "place-o-sceno.appspot.com",
	messagingSenderId: "94577665027",
	appId: "1:94577665027:web:355d971b655fba12f29a36",
	measurementId: "G-MPYKS6E709",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
