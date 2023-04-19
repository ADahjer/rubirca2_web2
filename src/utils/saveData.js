import { db } from '../firebase';
import { addDoc, doc, collection } from 'firebase/firestore';

// guardar los datos en la base de datos
export const saveData = async (data) => {
  try {
    await addDoc(collection(db, 'pedidos'), data);
  } catch (error) {
    console.log(error);
  }
}