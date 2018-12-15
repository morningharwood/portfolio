import CannerScript from 'canner-script';

// THIS WILL NOT WORK!

export const Header = ({attributes, children}) => (
  <object keyName="Header">
    <object keyName={attributes.keyName}>
      <string keyName="headerTitle" title="Header Title" />
      <string keyName="headerDesc" title="Header Description" />
    </object>
    {/*<array*/}
      {/*keyName="clients"*/}
      {/*title="clients"*/}
      {/*ui="table"*/}
      {/*uiParams={{columns: [{*/}
          {/*title: 'Client Name',*/}
          {/*dataIndex: 'clientName'*/}
        {/*}]}}*/}
    {/*>*/}
      {/*<relation*/}
        {/*keyName="client"*/}
        {/*ui="singleSelect"*/}
        {/*title="client"*/}
        {/*relation={{type: 'toOne', to: 'clients'}}*/}
        {/*uiParams={{*/}
          {/*textCol: 'clientName',*/}
          {/*columns: [{*/}
            {/*title: 'Client Name',*/}
            {/*dataIndex: 'clientName'*/}
          {/*}]*/}
        {/*}}*/}
      {/*/>*/}
    {/*</array>*/}
  </object>
);