/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';
import Elements from './elements.schema';

const Templates = ({attributes}) => (
  <array keyName="outlets" title="outlets"
         ui="table" uiParams={{
    columns: attributes.columns
  }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="outletName" />
    <relation
      keyName="route"
      ui="singleSelect"
      title="route"
      relation={{type: 'toOne', to: 'routes'}}
      uiParams={{
        textCol: 'routePath',
        columns: [{
          title: 'Name',
          dataIndex: 'routePath'
        }]
      }}
    />
    <array
      keyName="elements"
      title="elements"
      ui="table"
      uiParams={{
        columns: [{
          title: 'elements',
          dataIndex: 'element'
        }]
      }}
    >
      <Elements />
    </array>

  </array>
);
export default Templates;
