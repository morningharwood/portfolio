/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';
import Theme from './ui/theme.schema';
import Margin from './ui/margin.schema';
import Borders from './ui/borders.schema';
import Meta from './ui/meta.schema';

const Articles = ({attributes}) => (
  <array
    keyName="articles"
    title="articles"
    ui="table"
    uiParams={{
      columns: attributes.columns
    }}
  >
    <toolbar>
      <pagination/>
    </toolbar>
    <string keyName="articleName" title="Article Name"/>
    <Meta />
    <Theme defaultTheme={'sos'} />
    <array
      keyName="sections"
      title="sections"
      ui="table"
      uiParams={{
        columns: [{
          title: 'sections',
          dataIndex: 'blockName2'
        }]
      }}
    >
      <Theme />
      <Margin />
      <Borders keyName={'borders'}/>
    </array>
  </array>
);
export default Articles;
