import { addDoc, collection , writeBatch} from "firebase/firestore";
import { db } from "../firebase/config";

const SendForm = async (form) =>
{   
    const batch = writeBatch(db);
    try {
        const reference = await addDoc(collection(db, 'forms'), form);
        await batch.commit();
        if(reference.id) return {id:reference.id};
    } catch (error) {
        return {error: `Error al guardar formulario: ${error.message}`}
    }
}

export default SendForm;