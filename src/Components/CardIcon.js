import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin: -48px auto 1rem;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadiusCircle};
  border: 1px solid #fff;
  font-size: 24px;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
//The last step is that we need to define what a primary button looks like. To do that we also import { css } from styled-components and interpolate a function into our template literal, which gets passed the props of our component

const CardIcon = (props) => {
  const { item } = props;

  return (
    <>
      <Button>T</Button>
    </>
  );
}

export default CardIcon;