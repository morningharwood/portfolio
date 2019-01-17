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
import Outlets from './schema/outlets.schema';
import {FirebaseStorage} from '@canner/storage';



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

const outletsColumns = [{
  title: 'Article Name',
  dataIndex: 'outletName',
}];


const fileStorage = new FirebaseStorage(options);

export default (
  <root fileStorage={fileStorage}>
    <Users columns={userColumns} />
    <Routes columns={routeColumns} />
    <Clients columns={clientColumns} />
    <Agencies columns={agencyColumns} />
    <Roles columns={rolesColumns} />
    <Categories columns={categoryColumns}/>
    <Tags columns={tagColumns}/>
    <Components columns={componentColumns} />
    <Articles columns={articleColumns} />
    <Outlets columns={outletsColumns} />

  </root>
);
