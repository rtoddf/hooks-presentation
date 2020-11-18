import React from 'react';
import styled, { css } from 'styled-components';

const Heading = ({ text }) => {

  const Heading = styled.div`
    margin-bottom: 20px;
    color: #666;
    font-family: "Roboto", "Helvetica", sans-serif;
    font-size: 20px;
    font-widght: bold;
  `

  return <Heading>{ text }</Heading>;
}

export default Heading;