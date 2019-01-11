/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';

const Routes = ({attributes}) => (
  <array keyName="routes" title="routes"
    ui="table" uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="routePath" title="Page Path" />
  </array>
);
export default Routes;
