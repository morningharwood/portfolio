/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default, Condition, Block} from 'canner-script';
import {Header} from '../libs/mh-header/src/header.schema';

const elementsConfig = [{
  text: 'Header',
  value: 'HEADER',
  Component: Header,
}];

const Elements = ({attributes}) => (
  <Block>
    <string
      keyName="component"
      ui="select"
      uiParams={{
        options: elementsConfig,
      }}
    />
    <string keyName='elementName' />
    {elementsConfig.map(({Component, value, text}, index) => {
      return (
        <Condition
          match={v => v.component === value}
        >
          <Component keyName={text.toLowerCase()} />
        </Condition>
      )
    })}
  </Block>
);

export default Elements;
