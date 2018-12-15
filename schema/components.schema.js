/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';


const Components = ({attributes}) => (
  <array
    keyName="components"
    title="components"
    ui="table"
    uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="componentName" title="Component Name" />
  </array>
);
export default Components;
