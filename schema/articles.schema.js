/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';
import Theme from './ui/theme.schema';
import Breakpoint from './ui/breakpoint.schema';

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
    <string keyName="metaTitle" title="title"/>
    <array keyName="metaKeywords" title="Meta Keywords" ui="tag"/>
    <string keyName="metaDescription" title="Meta Description"/>
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
      <Breakpoint
        small={<string keyName="name" />}
        medium={<string keyName="name2" />}
        large={<string keyName="name3" />}
      />
    </array>
  </array>
);
export default Articles;
