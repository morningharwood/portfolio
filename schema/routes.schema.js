/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';
import {Header} from './header.schema';

const Routes = ({attributes}) => (
  <array keyName="routes" title="routes"
    ui="table" uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <Header keyName="routeHeader" />
  </array>
);
export default Routes;
