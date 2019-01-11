// @flow
import React from 'react';

const Template = ({pageContext: ctx}) => {
  return (
    <div>
      <h1>{JSON.stringify(ctx.data)}</h1>
      <MhHeader data={ctx.data.header} />
      <Navgation data={ctx.data.navigation} />
    </div>
  );
};

export default Template;
