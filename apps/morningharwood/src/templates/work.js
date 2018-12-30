// @flow
import React from 'react';

const Template = ({data, pageContext: ctx}) => {
  return (
    <div>
      <h1>{ctx.data.name}</h1>
    </div>
  );
};

export default Template;
