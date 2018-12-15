// More Info: https://www.canner.io/docs/credential-firebase.html
const {FirestoreCredential} = require('canner-credential');

module.exports = {
  env: {
    // See https://www.canner.io/docs/credential-firebase.html to learn how to get
    // or try this line to store data in memory first
    // "default": []
    'default': [new FirestoreCredential(require('./cert'))],

    // for free plan, can use only one env.
    // "test": [new FirebaseCredential(require("path to cert.json"))]
  }
};
