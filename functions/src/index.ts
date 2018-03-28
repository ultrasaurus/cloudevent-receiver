import * as functions from 'firebase-functions'

// if you need to use the Firebase Admin SDK, uncomment the following:
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase);


function addToCollection(obj: any) {
  let name = 'events'
  console.log('name', name);
  return admin.firestore()
              .collection(name)
              .add(obj).then(writeResult => {
                let result = {id: writeResult.id, collection:name, doc: obj};
                console.log(result);
                return result;
  });
}

export let handleEvent = functions.https.onRequest((req, res) => {
  console.log('addDocument query', req.query);
  // const name = req.query.name;
  // const value = req.query.value;
  // let obj = {};
  // obj[name] = value;

  // addToCollection(obj).then(result => {
  //   // Send back a message that we've succesfully written the message
  //   res.json(result);
  // });
});
