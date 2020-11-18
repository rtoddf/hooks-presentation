import React from 'react';
import styled, { css } from 'styled-components';

import ImageContainer from './ImageContainer';
import Heading from './Heading';
import TeaserText from './TeaserText';
import Buttons from './Buttons';

const Cards = (props) => {
  const { items, backgroundColor } = props;

    const text = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl. Pellentesque dignissim lobortis metus, sed bibendum urna tincidunt ac. In hac habitasse platea dictumst. In hendrerit ex quis pretium varius.';

  const image = 'https://images.unsplash.com/photo-1563805042-7684c019e1cb';

  // styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
  `

  const Card = styled.div`
    flex-basis: 20%;
    margin: 30px;
    padding: 20px;
    background-color: ${backgroundColor};
    border-radius: 1rem;
    box-shadow: 6px 6px 18px rgba(0,0,0,.16), -6px -6px 18px rgba(255, 255, 255, .70);
  `

  let cards = items.map((item, index) => {
    console.log('item: ', item)
    return (
      <Card key={index}>
        <ImageContainer item={item} image={image} />
        <Heading text={`${item.first_name} ${item.last_name}`} />
        <TeaserText text={text} />
        <Buttons item={item} />
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