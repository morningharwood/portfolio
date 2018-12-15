/** @jsx builder */
/* eslint-disable react/prop-types */

import builder from 'canner-script';
import Blocks from './schema/blocks.schema.js';
import Users from './schema/users.schema.js';
import Routes from './schema/routes.schema';
import Clients from './schema/clients.schema';
import Components from './schema/components.schema';

// Install @canner/@canner/storage and uncomment the codes below to upload image in your CMS
// More Info: https://www.canner.io/docs/guides-storage.html
// --------------------------------------
// import {ImgurStorage} from '@canner/storage';
// const imageStorage = new ImgurStorage({
//   clientId: "your imgur client id",
//   mashapeKey: "" // optional
// });
console.log(builder);

const userColumns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Email',
  dataIndex: 'email'
}, {
  title: 'Age',
  dataIndex: 'age'
}];

const routeColumns = [{
  title: 'Route Path',
  dataIndex: 'routePath'
}];

const clientColumns = [{
  title: 'Client Name',
  dataIndex: 'clientName'
}];
const componentColumns = [{
  title: 'Component Name',
  dataIndex: 'componentName',
}];

const blockColumns = [{
  title: 'Block Name',
  dataIndex: 'blockName',
}];

export default (
  <root>
    <Users columns={userColumns} />
    <Routes columns={routeColumns} />
    <Clients columns={clientColumns} />
    <Components columns={componentColumns} />
    <Blocks columns={blockColumns} />
  </root>
);
