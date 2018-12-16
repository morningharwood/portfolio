/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';


const Agencies = ({attributes}) => (
  <array
    keyName="agencies"
    title="agencies"
    ui="table"
    uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="agencyName" title="Agency Name" />
  </array>
);
export default Agencies;
