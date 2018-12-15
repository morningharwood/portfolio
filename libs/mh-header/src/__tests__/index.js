// @flow
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../index';

describe('Block', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Header title={'title'} />);
    expect(tree).toMatchSnapshot();
  });
});
