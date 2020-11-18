import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';

const ButtonGroup = (props) => {

  const { item, textColor, backgroundColor, boxShadow, borders } = props;

  const ButtonsContainer = styled.div`
    display: flex;
  `

  return (
    <ButtonsContainer>
      <Button item="f" backgroundColor={backgroundColor} textColor={textColor} boxShadow={boxShadow} borders={borders} />
      <Button item="t" backgroundColor={backgroundColor} textColor={textColor} boxShadow={boxShadow} borders={borders} />
      <Button item="i" backgroundColor={backgroundColor} textColor={textColor} boxShadow={boxShadow} borders={borders} />
      <Button item="y" backgroundColor={backgroundColor} textColor={textColor} boxShadow={boxShadow} borders={borders} />
    </ButtonsContainer>
  );
}

export default ButtonGroup;