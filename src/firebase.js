import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCceaCz0mMK6fatuJ2RmyCoXFd8ArIZotA",
  authDomain: "rubricaweb2.firebaseapp.com",
  projectId: "rubricaweb2",
  storageBucket: "rubricaweb2.appspot.com",
  messagingSenderId: "484015000042",
  appId: "1:484015000042:web:b90fd983224a8da9964a93",
  measurementId: "G-W3ES1KDW58"
};

export const db = getFirestore(firebaseConfig);