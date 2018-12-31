import CannerScript from 'canner-script';



export const Header = ({attributes, children}) => (
  <object keyName={attributes.keyName}>
    <string keyName="category" title="Header Category" />
    <string keyName="title" title="Header Title" />
    <string keyName="description" title="Header Description" />
  </object>
);