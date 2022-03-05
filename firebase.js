import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyC_po9kgPerpFoyXrVPOx_sfUpaHbDDX8g",
	authDomain: "linkedin-51553.firebaseapp.com",
	projectId: "linkedin-51553",
	storageBucket: "linkedin-51553.appspot.com",
	messagingSenderId: "88105487381",
	appId: "1:88105487381:web:52ad06ff4708c4d577521c",
};

const firebaseASpp = firebase.initializeApp(firebaseConfig);
const db = firebaseASpp.firestore();
const auth = firebase.auth();
export { db, auth };
