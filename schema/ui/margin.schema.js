/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Row, Condition, Block} from 'canner-script';
import Breakpoint from './breakpoint.schema';
import Position from './position.schema'

const Margin = () => {
  return (
    <Row>
      <Block title={'Margin'}>
        <Breakpoint
          small={
            <Row>
              <boolean keyName="switchSmall" ui="switch"/>
              <Condition match={(value, operator) => {
                return !!value.switchSmall;
              }}>
                <Position keyName={'small'}/>
              </Condition>
            </Row>
          }
          medium={
            <Row>
              <boolean keyName="switchMedium" ui="switch"/>
              <Condition match={(value, operator) => {
                return !!value.switchMedium;
              }}>
                <Position keyName={'medium'}/>
              </Condition>
            </Row>
          }
          large={
            <Row>
              <boolean keyName="switchLarge" ui="switch"/>
              <Condition match={(value, operator) => {
                return !!value.switchLarge;
              }}>
                <Position keyName={'large'}/>
              </Condition>
            </Row>
          }
        />
      </Block>
    </Row>
  );
}

export default Margin;