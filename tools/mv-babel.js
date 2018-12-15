// @flow
const fs = require('fs');
const path = require('path');
// destination.txt will be created or overwritten by default.

const BABEL = Object.create(null);
const PATHS = Object.create(null);

BABEL.CONFIG = 'babel.config.js';
PATHS.BABEL_PATH = path.join(__dirname, '../', BABEL.CONFIG);
PATHS.SOURCE_PATH = path.join(process.cwd(), BABEL.CONFIG);

fs.copyFile(PATHS.BABEL_PATH, PATHS.SOURCE_PATH, err => {
  if (err) throw err;
  console.log(`${PATHS.BABEL_PATH} was copied to ${PATHS.SOURCE_PATH}`);
});
