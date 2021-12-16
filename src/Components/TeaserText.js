import React from 'react';
import styled, { css } from 'styled-components';

const Text = styled.div`
  margin-bottom: 20px;
  font-family: "Roboto", "Helvetica", sans-serif;
  font-size: 16px;
  font-weight: normal;

  ${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};
`;

const Link = styled.a`
    display: inline-block;
    margin: .5rem 0;
    color: ${props => props.theme.linkColor};
`;

const TeaserText = ({ item, bio }) => {
  return (
    <>
      <Text>
        <p>{ bio }</p>
      </Text>
      <Text>
        <p>{item.address.street}</p>
        <p>{item.address.suite}</p>
        <p>{item.address.city}, {item.address.zipcode}</p>
        <p>{item.phone}</p>
        <Link href={`mailto:${item.email}`}>{item.email}</Link>
      </Text>
    </>
  );
}

export default TeaserText;