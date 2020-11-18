import React from 'react';
import styled, { css } from 'styled-components';

const ImageContainer = ({ item, image, boxShadow, borders }) => {

  const ImageCircle = styled.div`
    margin: 25px auto;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    box-shadow: ${boxShadow};
  `;

  const Image = styled.img`
    width:180px;
    height:180px;
    object-fit:cover;
    border: 4px solid ${borders};
    border-radius:50%;
  `;

  return <ImageCircle><Image alt={`${item.first_name} ${item.last_name}`} src={image} /></ImageCircle>;
}

export default ImageContainer;