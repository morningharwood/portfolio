/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';


const Clients = ({attributes}) => (
  <array
    keyName="clients"
    title="clients"
    ui="table"
    uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="clientName" title="Client Name" />
  </array>
);
export default Clients;
