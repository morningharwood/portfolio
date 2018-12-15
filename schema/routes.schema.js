/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';
import {Header} from '../libs/mh-header/src/header.schema';

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
    <Header keyName="routeHeader" />
  </array>
);
export default Routes;
