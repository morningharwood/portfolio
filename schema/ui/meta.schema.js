/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Block} from 'canner-script';

const Meta = () => {
  return (
    <object keyName={'meta'}>
      <Block title={'Meta Tags'}>
        <string keyName="metaTitle" title="title"/>
        <array keyName="metaKeywords" title="Meta Keywords" ui="tag"/>
        <string keyName="metaDescription" title="Meta Description"/>
      </Block>
    </object>
  )
};

export default Meta;
