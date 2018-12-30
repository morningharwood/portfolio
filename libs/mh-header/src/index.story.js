// @flow
import React from 'react';
import {storiesOf} from '@storybook/react';
import {Provider, styled} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";

import Header from './index';

const engine = new Styletron();


storiesOf('Header', module)
  .addDecorator(story => (
    <Provider value={engine}>
      {story()}
    </Provider>
  ))
  .add('with default fixtures', () => (
    <Header
      title={'Nike Jordan Editor'}
      description={'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.'}
      category={'Web Application'}
    />
  ));
