/** @jsx builder */
/* eslint-disable react/prop-types */

import builder from 'canner-script';
import Users from './schema/users.schema.js';
import Routes from './schema/routes.schema';
import Clients from './schema/clients.schema';
import Components from './schema/components.schema';
import Agencies from './schema/agencies.schema';
import Roles from './schema/roles.schema';
import Categories from './schema/categories.schema';
import Tags from './schema/tags.schema';
import Articles from './schema/articles.schema';

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

const agencyColumns = [{
  title: 'Agency Name',
  dataIndex: 'agencyName'
}];

const componentColumns = [{
  title: 'Component Name',
  dataIndex: 'componentName',
}];

const rolesColumns = [{
  title: 'Roles Name',
  dataIndex: 'rolesName',
}];
const categoryColumns = [{
  title: 'Category Name',
  dataIndex: 'categoryName',
}];

const tagColumns = [{
  title: 'Tag Name',
  dataIndex: 'tagName',
}];

const articleColumns = [{
  title: 'Article Name',
  dataIndex: 'articleName',
}];

export default (
  <root>
    <Users columns={userColumns} />
    <Routes columns={routeColumns} />
    <Clients columns={clientColumns} />
    <Agencies columns={agencyColumns} />
    <Roles columns={rolesColumns} />
    <Categories columns={categoryColumns}/>
    <Tags columns={tagColumns}/>
    <Components columns={componentColumns} />
    <Articles columns={articleColumns} />

  </root>
);
