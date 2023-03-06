import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCwYNsT39-6h1c090jAGAaZDt2zFHTpLtM",
  authDomain: "project-60-d85fd.firebaseapp.com",
  databaseURL: "https://project-60-d85fd-default-rtdb.firebaseio.com",
  projectId: "project-60-d85fd",
  storageBucket: "project-60-d85fd.appspot.com",
  messagingSenderId: "243401709471",
  appId: "1:243401709471:web:23a98b1c0f1e8f2dfe4faa"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase.database()

