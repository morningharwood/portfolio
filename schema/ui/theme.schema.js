/** @jsx builder */
/* eslint-disable react/prop-types */

import builder from 'canner-script';

const themeParams = [{
  text: 'Dark',
  value: 'DARK',
}, {
  text: 'Light',
  value: 'LIGHT'
}, {
  text: 'Inherit',
  value: 'INHERIT'
}];

const Theme = () => {
  return (
    <string
      keyName="theme"
      ui="select"
      defaultValue={themeParams[2].value}
      uiParams={{
        options: themeParams,
      }}
    />
  );
}

export default Theme;