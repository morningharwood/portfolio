// @flow
import React from 'react';
import {storiesOf} from '@storybook/react';
import Header from './index';

storiesOf('Button 2', module).add('with text', () => (
  <Header title={'wow'} description={'yess'} />
));
