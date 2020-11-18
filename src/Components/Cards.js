import React from 'react';
import styled, { css } from 'styled-components'

import TeaserText from './TeaserText';

// styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  flex-basis: 20%;
  margin: 30px;
  padding: 20px;
  background: #e5e5e5;
  border-radius: 1rem;
  box-shadow: 6px 6px 18px rgba(0,0,0,.16), -6px -6px 18px rgba(255, 255, 255, .70);
`

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

const Heading = styled.div`
  margin-bottom: 20px;
  color: #666;
  font-family: "Roboto", "Helvetica", sans-serif;
  font-size: 20px;
  font-widght: bold;
`

const Button = styled.button`
  margin: .5em 1em;
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

const text = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl. Pellentesque dignissim lobortis metus, sed bibendum urna tincidunt ac. In hac habitasse platea dictumst. In hendrerit ex quis pretium varius.';

const Cards = ({ items }) => {
  let cards = items.map((item, index) => {
    console.log('item: ', item)
    return (
      <Card key={index}>
        <ImageCircle>
          <Image alt={`${item.first_name} ${item.last_name}`} src={`https://images.unsplash.com/photo-1563805042-7684c019e1cb`} />
        </ImageCircle>
        <Heading>{item.first_name} {item.last_name}</Heading>

        <TeaserText text={text} />

        <Button>{item.email}</Button>

        {/* we're saying that when the primary property is set we want to add some more css to our component, in this case change the background and color. */}
        <Button primary>{item.email}</Button>
      </Card>
    )
  });

  return (
    <Container>
      {cards}
    </Container>
  )
}

export default Cards;