import { auth, app, db } from "./firebase";

import { collection, getDoc, getDocs, getFirestore, onSnapshot, query, where } from "firebase/firestore";

export const getPremiumStatus = async (app) => {
    const userId = auth.currentUser?.uid;

    if(!userId) throw new Error('User not logged in')

     const subscriptionRef = collection(db, "customers", userId, "subscriptions")

     const q = query(subscriptionRef, where("status", "in", ["trialing", "active"]))

     return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            // In this implementation we only expect one active or trialing subscription to exist.
            console.log();
            if (snapshot.docs.length === 0) {
            //   console.log("No active or trialing subscriptions found");
              resolve(false);
            } else {
            //   console.log("Active or trialing subscription found", snapshot.docs[0]._document.data.value.mapValue.fields.items.arrayValue.values[0].mapValue.fields.subscription.stringValue);
              resolve(true);
            }
            unsubscribe();
          },
          reject
        );
      });
}

export const getSubscriptionName = async (app) => {
    const userId = auth.currentUser?.uid;

    if(!userId) throw new Error('User not logged in')

     const subscriptionRef = collection(db, "customers", userId, "subscriptions")

     const {docs} = await getDocs(subscriptionRef)

     const subData = docs.map((elem) => ({...elem.data()}))

    //  console.log(subData[0].items[0].subscription)

     return(subData[0].items[0].subscription)


}
