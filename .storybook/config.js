import { configure } from '@storybook/react';

const req = require.context('../libs', true, /\.story\.js$/);
console.log(req);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
