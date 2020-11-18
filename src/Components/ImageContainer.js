import React from 'react';
import styled, { css } from 'styled-components';

const ImageContainer = ({ item, image }) => {

  const ImageCircle = styled.div`
    margin: 25px auto;
    
    height: 180px;
    width: 180px;
    border-radius: 50%;
    box-shadow: 6px 6px 18px rgba(0,0,0,.16), -6px -6px 18px rgba(255, 255, 255, .70);
  `;

  const Image = styled.img`
    width:180px;
    height:180px;
    object-fit:cover;
    border: 4px solid #e5e5e5;
    border-radius:50%;
  `;

  return <ImageCircle><Image alt={`${item.first_name} ${item.last_name}`} src={image} /></ImageCircle>;
}

export default ImageContainer;