// @flow
import React from 'react';

const Template = ({pageContext: ctx}) => {
  return (
    <div>
      <h1>{ctx.data.name}</h1>
    </div>
  );
};



export default Template;
