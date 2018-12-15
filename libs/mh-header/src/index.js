// @flow
import React from 'react';

const Header = props => {
  const {title, description, category} = props;
  return (
    <header>
      <h3>{category}</h3>
      <h1>{title}</h1>
      <p>{description} </p>
    </header>
  );
};

export default Header;
