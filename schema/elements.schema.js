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
    <Condition
      match={v => v.component === 'HEADER'}
    >
      <Header keyName="elementName"/>
    </Condition>
  </Block>
);

export default Elements;
