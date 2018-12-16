import CannerScript from 'canner-script';

// THIS WILL NOT WORK!

export const Header = ({attributes, children}) => (
  <object keyName={attributes.keyName}>
    <string keyName="headerTitle" title="Header Title" />
    <string keyName="headerDesc" title="Header Description" />
    <dateTime keyName="dateFrom" ui="dateTime"/>
    <dateTime keyName="dateTo" ui="dateTime"/>
  </object>
);