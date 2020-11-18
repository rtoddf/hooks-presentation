import React from 'react';
import styled, { css } from 'styled-components';

const Button = (props) => {

  const { item, textColor, backgroundColor, boxShadow, borders } = props;

  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    margin: 1rem auto;
    padding: .5rem;
    background: ${backgroundColor};
    color: ${textColor};
    box-shadow: ${boxShadow};
    border-radius: 50%;
    border: 1px solid ${borders};
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

  return (
    <>
      <Button>{item}</Button>
      {/* we're saying that when the primary property is set we want to add some more css to our component, in this case change the background and color. */}
      {/* <Button primary>{item.email}</Button> */}
    </>
  );
}

export default Button;