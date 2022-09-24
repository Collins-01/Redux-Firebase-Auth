import {initializeApp} from  'firebase/app';
import  {getAuth} from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyDn-mpZSDVq2FrVSxXIUAE0NcAg1zl7mfE",
    authDomain: "redux-react-auth.firebaseapp.com",
    projectId: "redux-react-auth",
    storageBucket: "redux-react-auth.appspot.com",
    messagingSenderId: "288898629994",
    appId: "1:288898629994:web:3731691822feb4b5cf6513",
    measurementId: "G-WZ32LKHVFV"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export default auth;