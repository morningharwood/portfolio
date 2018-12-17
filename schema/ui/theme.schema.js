/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Row, Block} from 'canner-script';

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
    <Row>
      <Block title="Theme">
        <string
          keyName="theme"
          ui="select"
          defaultValue={themeParams[2].value}
          uiParams={{
            options: themeParams,
          }}
        />
      </Block>
    </Row>
  );
}

export default Theme;