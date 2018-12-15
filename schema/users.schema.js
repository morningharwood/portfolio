/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default} from 'canner-script';

const Users = ({attributes}) => (
  <array keyName="users" title="users"
    ui="table" uiParams={{
      columns: attributes.columns
    }}
    imageStorage={attributes.imageStorage}
  >
    <toolbar>
      <pagination />
      <sorter
        options={[{
          field: 'age',
          label: 'Age'
        }]}
      />
    </toolbar>
    <string keyName="name" title="name" required />
    <string keyName="email" title="Email" required validation={{
      format: 'email',
      errorMessage: 'Please enter a valid email address',
    }} />
    <number keyName="age" title="Age" />

    <relation ui="multipleSelect" keyName="posts" relation={{to: 'posts', type: 'toMany'}} title="Posts" uiParams={{
      textCol: 'title',
      columns: [{
        title: 'Title',
        dataIndex: 'title'
      }]
    }} />
  </array>
);
export default Users;
