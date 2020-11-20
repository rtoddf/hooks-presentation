import React from 'react';
import styled, { css } from 'styled-components';

const Text = styled.div`
  margin-bottom: 20px;
  font-family: "Roboto", "Helvetica", sans-serif;
  font-size: 16px;
  font-weight: normal;

  ${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};
`;

const TeaserText = ({ text }) => {
  return <Text>{ text }</Text>;
}

export default TeaserText;