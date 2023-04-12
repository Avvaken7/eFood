import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmToA4VmrAEmPxV05k3WhbHs42NAQN01g",
    authDomain: "e-food-f8681.firebaseapp.com",
    projectId: "e-food-f8681",
    storageBucket: "e-food-f8681.appspot.com",
    messagingSenderId: "596883450980",
    appId: "1:596883450980:web:a06a6c7eb316cd85bcc371"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
