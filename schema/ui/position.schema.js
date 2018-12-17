/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Row, Condition} from 'canner-script';

const Position = ({attributes}) => {
  return (
    <object keyName={attributes.keyName}>
      <number
        keyName="sliderTop"
        uiParams={{
          min: 0,
          max: 80,
          step: 1
        }}
        title="Top"
        ui="input"/>
      <number
        keyName="sliderRight"
        uiParams={{
          min: 0,
          max: 80,
          step: 1
        }}
        title="Right"
        ui="input"/>
      <number
        keyName="sliderBottom"
        uiParams={{
          min: 0,
          max: 80,
          step: 1,
        }}
        title="Bottom"
        ui="input"/>
      <number
        keyName="sliderLeft"
        uiParams={{
          min: 0,
          max: 80,
          step: 1
        }}
        title="Left"
        ui="input"/>
    </object>
  )
};
export default Position;