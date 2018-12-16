/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';

const Roles = ({attributes}) => (
  <array keyName="roles" title="roles"
    ui="table" uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="roleName" title="Role" />

  </array>
);
export default Roles;
