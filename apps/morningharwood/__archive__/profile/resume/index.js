// @flow
import React, {Fragment} from 'react';
import {styled, withStyle} from 'styletron-react';
import {Helmet} from 'react-helmet';

const RedAnchor = styled('a', {color: 'red'});
const FancyAnchor = withStyle(RedAnchor, {fontFamily: 'cursive'});

const ProfileComponent = () => (
  <Fragment>
    <Helmet>
      <title>Resume</title>
    </Helmet>
    <FancyAnchor>Resume</FancyAnchor>
  </Fragment>
);

export default ProfileComponent;
