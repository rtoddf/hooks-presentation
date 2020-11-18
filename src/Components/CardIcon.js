import React from 'react';
import styled, { css } from 'styled-components';

const CardIcon = (props) => {

  const { item, textColor, backgroundColor, boxShadow, borders } = props;

  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin: -48px auto 1rem;
    background: ${backgroundColor};
    color: ${textColor};
    box-shadow: ${boxShadow};
    border-radius: 50%;
    border: 1px solid ${borders};
    font-size: 24px;

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
      <Button>T</Button>
    </>
  );
}

export default CardIcon;