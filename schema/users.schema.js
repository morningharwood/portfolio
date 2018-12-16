/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';

const Users = ({attributes}) => (
  <array keyName="users" title="users"
    ui="table" uiParams={{
      columns: attributes.columns
    }}
    imageStorage={attributes.imageStorage}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="name" title="name" required />
    <string keyName="email" title="Email" />
    <number keyName="age" title="Age" />
  </array>
);
export default Users;
