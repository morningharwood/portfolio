/** @jsx builder */
/* eslint-disable react/prop-types */
import builder, {Row, Condition, Block} from 'canner-script';

const PositionToggle = ({attributes}) => {
  return (
    <object keyName={attributes.keyName}>
      <boolean keyName="switchTop" title="Top" ui="switch"/>
      <boolean keyName="switchRight" title="Right" ui="switch"/>
      <boolean keyName="switchBottom" title="Bottom" ui="switch"/>
      <boolean keyName="switchLeft" title="Left" ui="switch"/>
    </object>
  )
};

export default PositionToggle;