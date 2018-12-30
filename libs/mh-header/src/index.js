// @flow
import React from 'react';
import {styled} from 'styletron-react';

const StyledHeader = styled('h1', () => {
  return {
    fontSize: 'var(--ms5a)',
    fontFamily: 'var(--serif)',
    color: 'var(--wow)'
  }
});

const Header = props => {
  const {title, description, category} = props;
  return (
    <header>
      <h3>{category}</h3>
      <StyledHeader>{title}</StyledHeader>
      <p>{description} </p>
    </header>
  );
};

export default Header;
