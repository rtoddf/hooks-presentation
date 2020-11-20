import React from 'react';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin: 1rem auto;
  padding: .5rem;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadiusCircle};
  border: 1px solid #fff;
  font-size: 18px;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
//The last step is that we need to define what a primary button looks like. To do that we also import { css } from styled-components and interpolate a function into our template literal, which gets passed the props of our component

const Button = (props) => {
  const { item } = props;

  return (
    <>
      <ButtonContainer>{item}</ButtonContainer>
      {/* we're saying that when the primary property is set we want to add some more css to our component, in this case change the background and color. */}
      {/* <Button primary>{item.email}</Button> */}
    </>
  );
}

export default Button;