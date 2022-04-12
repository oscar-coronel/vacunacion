import { collection, getDocs, doc, getDoc } from "firebase/firestore"

import { db } from "../firebase/config"


export const loadUsers = async ( uid ) => {
    const querySnapshot = await getDocs(collection(db, 'users'))
    let usersData = []
    querySnapshot.forEach((doc) => {
        usersData.push({
            id: doc.id,
            ...doc.data()
        })
    })
    return usersData
}

export const loadUser = async ( uid ) => {
    const docRef = doc(db, 'users', `${ uid }`)
    const docSnap = await getDoc(docRef)

    return {
        id: docSnap.id,
        ...docSnap.data()
    }
}