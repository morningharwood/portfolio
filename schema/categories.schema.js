/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';


const Categories = ({attributes}) => (
  <array
    keyName="categories"
    title="categories"
    ui="table"
    uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="categoriesName" title="Category Name" />
  </array>
);
export default Categories;
