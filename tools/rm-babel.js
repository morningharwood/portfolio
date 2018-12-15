// @flow
const fs = require('fs');
const path = require('path');
// destination.txt will be created or overwritten by default.

const BABEL = Object.create(null);
const PATHS = Object.create(null);

BABEL.CONFIG = 'babel.config.js';
PATHS.BABEL_PATH = path.join(__dirname, '../', BABEL.CONFIG);
PATHS.SOURCE_PATH = path.join(process.cwd(), BABEL.CONFIG);

fs.unlink(PATHS.SOURCE_PATH, function(err) {
  if (err && err.code === 'ENOENT') {
    // file doens't exist
    console.info("File doesn't exist, won't remove it.");
  } else if (err) {
    // other errors, e.g. maybe we don't have enough permission
    console.error('Error occurred while trying to remove file');
  } else {
    console.info(`removed`);
  }
});
