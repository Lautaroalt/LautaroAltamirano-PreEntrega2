import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";


import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD354DkXOS0kH62CmE-auWtiSrIrFY67mo",
  authDomain: "proyectofinal-ecommerce-coder.firebaseapp.com",
  projectId: "proyectofinal-ecommerce-coder",
  storageBucket: "proyectofinal-ecommerce-coder.appspot.com",
  messagingSenderId: "27554318722",
  appId: "1:27554318722:web:a0f4637c4507d408eca79b"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


