const report = require('gatsby-cli/lib/reporter');
const firebase = require('firebase-admin');
const crypto = require('crypto');

const getDigest = id =>
  crypto
    .createHash('md5')
    .update(id)
    .digest('hex');

exports.sourceNodes = async (
  {actions},
  {types, credential},
) => {
  try {
    if (firebase.apps || !firebase.apps.length) {
      firebase.initializeApp({
        credential: firebase.credential.cert(credential),
      });
    }
  } catch (e) {
    report.warn(
      'Could not initialize Firebase. Please check `credential` property in gatsby-config.js',
    );
    report.warn(e);
    return;
  }
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });


  const {createNode} = actions;

  const promises = types.map(
    async ({ collection, type, map = node => node }) => {
      const snapshot = await db.collection(collection);
      const ssg = await snapshot.get();
      for (let doc of ssg.docs) {
        const contentDigest = getDigest(doc.id);
        createNode(
          Object.assign({}, map(doc.data()), {
            id: doc.id,
            parent: null,
            children: [],
            internal: {
              type,
              contentDigest,
            },
          })
        );
        Promise.resolve();
      }
      snapshot.onSnapshot((querySnapshot) => {
        querySnapshot.docs.forEach( (doc) => {
          const contentDigest = getDigest(doc.id);
          createNode(
            Object.assign({}, map(doc.data()), {
              id: doc.id,
              parent: null,
              children: [],
              internal: {
                type,
                contentDigest,
              },
            }),
          );
        });
      });
    }
  );
  await Promise.all(promises);
  return;
};
