import React from 'react';
import styled, { css, withTheme } from 'styled-components';

import CardIcon from './CardIcon';
import ImageContainer from './ImageContainer';
import NamePlate from './NamePlate';
import TeaserText from './TeaserText';
import ButtonGroup from './ButtonGroup';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  flex-basis: 21%;
  margin: 30px;
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`

const bio = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl.';

const Cards = (props) => {
  const { items } = props;

  // styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.

  let cards = items.map((item, index) => {
    return (
      <Wrapper key={index}>
        <CardIcon item={item} />
        {/* <p>{props.theme.backgroundColor}</p> */}
        <ImageContainer item={item}/>
        <NamePlate item={item} />
        <TeaserText item={item} bio={bio} />
        <ButtonGroup item={item} />
      </Wrapper>
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