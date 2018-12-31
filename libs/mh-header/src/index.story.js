// @flow
import React from 'react';
import {storiesOf} from '@storybook/react';

import Header from './index';


storiesOf('Header', module)
  .add('with default fixtures', () => (
    <Header
      title={'Nike Jordan Editor'}
      description={'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.'}
      category={'Web Application'}
    />
  ));