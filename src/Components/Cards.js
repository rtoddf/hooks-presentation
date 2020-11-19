import React from 'react';
import styled, { css } from 'styled-components';

import CardIcon from './CardIcon';
import ImageContainer from './ImageContainer';
import Heading from './Heading';
import TeaserText from './TeaserText';
import ButtonGroup from './ButtonGroup';

const Cards = (props) => {
  const { items, backgroundColor, image, textColor, boxShadow, borders } = props;
  const text = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl. Pellentesque dignissim lobortis metus, sed bibendum urna tincidunt ac. In hac habitasse platea dictumst. In hendrerit ex quis pretium varius.';

  // const image = 'http://rtodd.net/images/male_headphone_800x800.jpg';
  // const image = 'http://rtodd.net/images/female_hair_800x800.jpg';

  // styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
  `

  const Card = styled.div`
    flex-basis: 20%;
    margin: 30px;
    padding: 20px;
    background-color: ${props => props.theme.backgroundColor};
    color: ${textColor};
    border-radius: 1rem;
    box-shadow: ${boxShadow};
  `

  let cards = items.map((item, index) => {
    console.log('item: ', item)
    return (
      <Card key={index}>
        <CardIcon item={item} backgroundColor={backgroundColor} textColor={textColor} boxShadow={boxShadow} borders={borders} />
        <ImageContainer item={item} image={image} boxShadow={boxShadow} borders={borders} />
        <Heading text={`${item.first_name} ${item.last_name}`} />
        <TeaserText text={text} />
        <ButtonGroup item={item} backgroundColor={backgroundColor} textColor={textColor} boxShadow={boxShadow} borders={borders} />
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