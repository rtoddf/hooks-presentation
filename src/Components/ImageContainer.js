import React from 'react';
import styled, { css, withTheme } from 'styled-components';

const ImageCircle = styled.div`
  margin: 25px auto;
  height: 180px;
  width: 180px;
  border-radius: ${props => props.theme.borderRadiusCircle};
  box-shadow: ${props => props.theme.boxShadow};
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit:cover;
  border: 4px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadiusCircle};
`;

const ImageContainer = (props) => {
  const { item } = props;
  return (
    <>
      <ImageCircle><Image alt={`${item.first_name} ${item.last_name}`} src={props.theme.image} /></ImageCircle>
    </>
  );
}

export default withTheme(ImageContainer);