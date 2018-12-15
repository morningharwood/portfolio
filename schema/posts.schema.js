/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default, Focus} from 'canner-script';

console.log(builder);
const Posts = ({attributes}) => <array
  keyName="posts"
  ui="tableRoute"
  title="posts"
  uiParams={{
    columns: attributes.columns
  }}
  imageStorage={attributes.imageStorage}
>
  <toolbar>
    <pagination/>
    <filter>
      <selectFilter
        label="Type"
        options={[{
          text: 'All',
          condition: {}
        }, {
          text: 'Draft',
          condition: {
            status: {
              draft: {
                eq: true
              }
            }
          }
        }, {
          text: 'Trashed',
          condition: {
            status: {
              trashed: {
                eq: true
              }
            }
          }
        }]}
      />
    </filter>
  </toolbar>
  <Focus focus={['title', 'content']}>
    <string keyName="title" title="title" required/>
    <object keyName="content" title="Content" ui="editor"/>
    <Default title="Status" keyName="status">
      <boolean keyName="trashed"/>
      <boolean keyName="draft"/>
    </Default>
    <image keyName="featureImage" title="Feature Image"/>
    <Default title="Page Property" keyName="page">
      <boolean keyName="topLevel" title="Parent page"/>
      <number keyName="order" title="Order" uiParams={{min: 0}}/>
    </Default>
    <Default title="Share" keyName="share">
      <boolean keyName="showShareButton" title="Show sharing button"/>
      <boolean keyName="showLikeButton" title="Show like button"/>
    </Default>
    <relation
      keyName="author"
      ui="singleSelect"
      title="author"
      relation={{type: 'toOne', to: 'users'}}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: 'Name',
          dataIndex: 'name'
        }]
      }}
    />
    <relation
      keyName="route"
      ui="singleSelect"
      title="route"
      relation={{type: 'toOne', to: 'routes'}}
      uiParams={{
        textCol: 'name',
        columns: [{
          title: 'Name',
          dataIndex: 'name'
        }]
      }}
    />
  </Focus>
</array>;

export default Posts;

