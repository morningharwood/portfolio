/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default, Block} from 'canner-script';
import Theme from './ui/theme.schema';
import Margin from './ui/margin.schema';
import Borders from './ui/borders.schema';
import Meta from './ui/meta.schema';
import Elements from './elements.schema';


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
    <relation
      keyName="route"
      ui="singleSelect"
      title="route"
      relation={{type: 'toOne', to: 'routes'}}
      uiParams={{
        textCol: 'routePath',
        columns: [{
          title: 'Name',
          dataIndex: 'routePath'
        }]
      }}
    />
    <Theme defaultTheme={'sos'} />
    <array
      keyName="sections"
      title="sections"
      ui="table"
      uiParams={{
        columns: [{
          title: 'sections',
          dataIndex: 'sectionName'
        }]
      }}
    >
      <Block title={'Section Name'}>
        <string keyName="sectionName" title="name"/>
      </Block>
      <Theme />
      <Margin keyName={'margin'} />
      <Borders keyName={'borders'}/>
      <array
        keyName="elements"
        title="elements"
        ui="table"
        uiParams={{
          columns: [{
            title: 'elements',
            dataIndex: 'element'
          }]
        }}
      >
        <Elements />
      </array>

    </array>
  </array>
);
export default Articles;
