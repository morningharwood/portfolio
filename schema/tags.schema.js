/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';


const Tags = ({attributes}) => (
  <array
    keyName="tags"
    title="tags"
    ui="table"
    uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="tagName" title="Tag Name" />
  </array>
);
export default Tags;
