/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default, Condition} from 'canner-script';
import {Header} from '../libs/mh-header/src/header.schema';

const blockConfig = [{
  text: 'Header',
  value: 'HEADER',
  Component: Header,
}];

const blocks = ({attributes}) => (
  <array
    keyName="blocks"
    title="blocks"
    ui="table"
    uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination/>
    </toolbar>
    <string keyName="blockName" title="Block Name"/>

    <relation
      keyName="route"
      ui="singleSelect"
      title="route"
      relation={{type: 'toOne', to: 'routes'}}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: 'Name',
          dataIndex: 'name'
        }]
      }}
    />
    <array
      keyName="components"
      title="components"
      ui="table"
      uiParams={{
        columns: [{
          title: 'components',
          dataIndex: 'blockName2'
        }]
      }}
    >
      <string
        keyName="component"
        ui="select"
        uiParams={{
          options: blockConfig,
        }}
      />
      {blockConfig.map(({Component, value, text}, index) => {
        return (
          <Component keyName="blockName2" />
        )
      })}

    </array>
  </array>
);

// Must write a generator that will be an array of components.
// Array<RelativeComponents>
// Show Component as a Nested field.

export default blocks;
