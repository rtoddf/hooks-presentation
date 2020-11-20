import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';

const ButtonsContainer = styled.div`
  display: flex;
`

const ButtonGroup = (props) => {
  const { item  } = props;

  return (
    <ButtonsContainer>
      <Button item="f" />
      <Button item="t" />
      <Button item="i" />
      <Button item="y" />
    </ButtonsContainer>
  );
}

export default ButtonGroup;