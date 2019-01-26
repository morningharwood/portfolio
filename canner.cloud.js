// More Info: https://www.canner.io/docs/credential-firebase.html
const {FirestoreCredential} = require('canner-credential');

module.exports = {
  env: {
    'default': [new FirestoreCredential(require('./cert'))],
  }
};
