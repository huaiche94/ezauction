import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCf7tQskwujUs5YJyZeXAAgCUXudfucIms",
  authDomain: "ezauction-dbd9b.firebaseapp.com",
  databaseURL: "https://ezauction-dbd9b.firebaseio.com",
  projectId: "ezauction-dbd9b",
  storageBucket: "ezauction-dbd9b.appspot.com",
  messagingSenderId: "136888816026"
};
const fire = firebase.initializeApp(config);
export default fire;
