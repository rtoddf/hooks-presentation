import React from 'react';
import styled, { css } from 'styled-components';

const Buttons = ({ item }) => {

  const Button = styled.button`
    margin: 1rem auto;
    padding: .5rem 1rem;
    background: #e5e5e5;
    color: #666;
    box-shadow: 6px 6px 18px rgba(0,0,0,.16), -6px -6px 18px rgba(255, 255, 255, .70);
    border-radius: 6px;
    border: none;
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
      <Button>{item.email}</Button>
      {/* we're saying that when the primary property is set we want to add some more css to our component, in this case change the background and color. */}
      <Button primary>{item.email}</Button>
    </>
  );
}

export default Buttons;