/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default, Block, Tabs, Row, Col, Condition} from 'canner-script';

const Breakpoint = ({attributes}) => {
  return (
    <Row>
      <Col span={8}>
        <Block title="Small Breakpoint">
          {attributes.small}
        </Block>
      </Col>
      <Col span={8}>
        <Block title="Medium Breakpoint">
          {attributes.medium}
        </Block>
      </Col>
      <Col span={8}>
        <Block title="Large Breakpoint">
          {attributes.large}
        </Block>
      </Col>
    </Row>
  );
};

export default Breakpoint;