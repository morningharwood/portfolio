// @flow
import React from 'react';
import {styled} from 'styletron-react';

const StyledHeader = styled('header', () => {
  return {
    fontWeight: 'normal',
    color: 'var(--primaryOn)',
  }
});

const StyledCategory = styled('h3', () => {
  return {
    fontSize: 'var(--ms-1)',
    fontFamily: 'var(--sans)',
    fontWeight: '700',
    margin: 0,
    color: 'var(--primaryAlt)',
    textTransform: 'uppercase',
  };
});


const StyledTitle = styled('h1', () => {
  return {
    fontSize: 'var(--ms4)',
    fontFamily: 'var(--serif)',
    margin: 0,
  };
});

const StyledParagraph = styled('p', () => {
  return {
    fontSize: 'var(--ms0)',
  };
});

const Header = props => {
  const {
    title,
    description,
    category,
  } = props;
  return (
    <StyledHeader>
      <StyledCategory>{category}</StyledCategory>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{description} </StyledParagraph>
    </StyledHeader>
  );
};

export default Header;
