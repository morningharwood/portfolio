import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import {Provider} from 'styletron-react';
import {Client as Styletron} from "styletron-engine-atomic";

const engine = new Styletron();
const req = require.context('../libs', true, /\.story\.js$/);

addDecorator(story => (
  <Provider value={engine}>
    {story()}
  </Provider>
))

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
