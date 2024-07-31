import * as functions from "firebase-functions";

import * as admin from "firebase-admin";

admin.initializeApp();



exports.onUserDeleted = functions.auth.user().onDelete(async (user) => {

  let firestore = admin.firestore();

  let userRef = firestore.doc("users/" + user.uid);

  await firestore.collection("users").doc(user.uid).delete();

});
