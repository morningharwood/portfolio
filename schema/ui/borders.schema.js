/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Row, Condition, Block} from 'canner-script';
import Breakpoint from './breakpoint.schema';
import PositionToggle from './position-toggle.schema';

const Borders = ({attributes}) => {
  return (
    <object keyName={attributes.keyName}>
      <Block title={'Borders'}>
        <Breakpoint
          small={
            <Row>
              <boolean keyName="switchBordersSmall" ui="switch"/>
              <Condition match={(value, operator) => {
                return !!value.switchBordersSmall;
              }}>
                <PositionToggle keyName={'small'}/>
              </Condition>
            </Row>
          }
          medium={
            <Row>
              <boolean keyName="switchBordersMedium" ui="switch"/>
              <Condition match={(value, operator) => {
                return !!value.switchBordersMedium;
              }}>
                <PositionToggle keyName={'medium'}/>
              </Condition>
            </Row>
          }
          large={
            <Row>
              <boolean keyName="switchBordersLarge" ui="switch"/>
              <Condition match={(value, operator) => {
                return !!value.switchBordersLarge;
              }}>
                <PositionToggle keyName={'large'}/>
              </Condition>
            </Row>
          }
        />
      </Block>
    </object>
  );
}

export default Borders;