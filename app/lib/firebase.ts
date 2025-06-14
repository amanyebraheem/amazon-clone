

import {getApp , getApps , initializeApp} from "firebase/app"







const firebaseConfig = {

  apiKey: "AIzaSyB41VIpwArdMx4w_sM43zOUqfxnKJA6Abw",

  authDomain: "clone-8b0dc.firebaseapp.com",

  projectId: "clone-8b0dc",

  storageBucket: "clone-8b0dc.firebasestorage.app",

  messagingSenderId: "279029547959",

  appId: "1:279029547959:web:44993dd8f74873d82b1e32",

  measurementId: "G-CT2X87WP8N"

};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);

export {db};