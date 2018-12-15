/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';


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
      <pagination />
    </toolbar>
    <string keyName="blockName" title="Block Name" />
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
      keyName="table"
      uiParams={{
        columns: [{
          title: "components",
          key: "components",
          dataIndex: "components"
        }]
      }}
      ui="table">
      <relation
        keyName="component"
        ui="singleSelect"
        title="component"
        relation={{type: 'toMany', to: 'components'}}
        uiParams={{
          textCol: 'componentName',
          columns: [{
            title: 'Component Name',
            dataIndex: 'componentName'
          }]
        }}
      />
    </array>

    {/*
      :::In place of this comment:::
      For each component added add the schema of tht component into the template for author editing.
    */}
  </array>
);

// Must write a generator that will be an array of components.
// Array<RelativeComponents>
// Show Component as a Nested field.

export default blocks;
