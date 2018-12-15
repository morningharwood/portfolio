// @flow
import React from 'react';

const Header = props => {
  const {title, description} = props;
  return (
    <div>
      <div>{title}</div>
      <div>{description} </div>
    </div>
  );
};

export default Header;
