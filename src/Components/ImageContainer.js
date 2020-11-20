import React from 'react';
import styled, { css } from 'styled-components';

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
  border: 4px solid #e5e5e5;
  border-radius: ${props => props.theme.borderRadiusCircle};
`;

const ImageContainer = ({ item, image }) => {
  return <ImageCircle><Image alt={`${item.first_name} ${item.last_name}`} src={image} /></ImageCircle>;
}

export default ImageContainer;