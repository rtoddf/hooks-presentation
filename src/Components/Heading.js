import React from 'react';
import styled, { css } from 'styled-components';

const Header = styled.div`
  margin-bottom: 20px;
  font-family: "Roboto", "Helvetica", sans-serif;
  font-size: 20px;
  font-widght: bold;
`

const Heading = ({ text }) => {
  return <Header>{ text }</Header>;
}

export default Heading;