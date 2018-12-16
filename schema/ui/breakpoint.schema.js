/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, {Default, Block, Tabs, Row, Col, Condition} from 'canner-script';

const Breakpoint = ({attributes}) => {
  return (
    <Row>
      <Block title="Small Breakpoint">
        {attributes.small}
      </Block>
      <Block title="Medium Breakpoint">
        {attributes.medium}
      </Block>
      <Block title="Large Breakpoint">
        {attributes.large}
      </Block>
    </Row>
  );
};

export default Breakpoint;