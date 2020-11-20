import React from 'react';
import styled, { css, withTheme } from 'styled-components';

import CardIcon from './CardIcon';
import ImageContainer from './ImageContainer';
import Heading from './Heading';
import TeaserText from './TeaserText';
import ButtonGroup from './ButtonGroup';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  flex-basis: 20%;
  margin: 30px;
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`

const text = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl. Pellentesque dignissim lobortis metus, sed bibendum urna tincidunt ac. In hac habitasse platea dictumst. In hendrerit ex quis pretium varius.';

const Cards = (props) => {
  const { items } = props;

  // styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.

  let cards = items.map((item, index) => {
    return (
      <Card key={index}>
        <CardIcon item={item} />
        {/* <p>{props.theme.backgroundColor}</p> */}
        <ImageContainer item={item}/>
        <Heading text={`${item.first_name} ${item.last_name}`} />
        <TeaserText text={text} />
        <ButtonGroup item={item} />
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
// export default withTheme(Cards);