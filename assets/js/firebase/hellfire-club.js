import app from './app.js'
import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'


export async function subscriptionToHellFireClub(subscription) {
    const db = getFirestore(app)
    const HellFireClubCollection = collection(db, "hellfire-club")
    const docRef = await addDoc(HellFireClubCollection, subscription)
    return docRef.id
} 