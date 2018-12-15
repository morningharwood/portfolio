/** @jsx builder */
/* eslint-disable react/prop-types */

import builder from 'canner-script';
import Posts from './schema/posts.schema.js';
import Users from './schema/users.schema.js';
import Routes from './schema/routes.schema';

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

const postColumns = [{
  title: 'Title',
  dataIndex: 'title'
}];

const routeColumns = [{
  title: 'Name',
  dataIndex: 'name'
}];

export default (
  <root>
    <Posts columns={postColumns} />
    <Users columns={userColumns} />
    <Routes columns={routeColumns} />
  </root>
);
