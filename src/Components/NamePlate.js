import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
margin-bottom: 20px;
  color: ${props => props.theme.headingColor};
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
`;

const Name = styled.h2`
  color: ${props => props.theme.headingColor};
  font-size: 20px;
  font-weight: bold;
`

const Company = styled.h3`
  font-size: 16px;
  font-weight: 400;
`

const NamePlate = ({ item }) => {
  return (
    <Wrapper>
      <Name>{ item.name }</Name>
      <Company>{ item.company.name }</Company>
    </Wrapper>
  )
}

export default NamePlate;