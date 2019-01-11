// @flow
import React from 'react';

const Template = ({pageContext: ctx}) => {
  return (
    <div>
      <h1>{JSON.stringify(ctx.data)}</h1>
    </div>
  );
};

export default Template;
