import React, { memo } from 'react';
import { Button, Card } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Spacer } from '../../../components/spacer/spacer.component';
import { generator } from '../../../utils/generator.id';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  RestaurantCardActions,
  RestaurantCardTitle,
  Rating,
  StyledParagraph,
  StyledTitleOpen,
  StyledTitleClosed,
  StyledMessage,
} from './restaurant-info-card.styles';

const LeftContent = () => (
  // <Avatar.Image size={24} source={require('../../../../assets/icon.png')} />
  <Ionicons name="restaurant" size={32} color="orange" />
);

export const RestaurantInfoCard = memo(({ restaurant = {} }) => {
  const {
    placeId,
    name,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const starsArray = [1, 2, 3, 4, 5];

  return (
    <RestaurantCard elevation={5}>
      <Info>
        <RestaurantCardTitle title={name} subtitle="" left={LeftContent} />
        <Card.Content>
          <Rating>
            <StyledParagraph>Rating: </StyledParagraph>
            {starsArray.map((star) => (
              <Ionicons
                key={`${placeId}-${generator.next().value}-${star}`}
                name="star"
                size={32}
                color={star <= rating ? 'gold' : 'lightgray'}
              />
            ))}
          </Rating>
          <Spacer position="bottom" size="medium">
            <StyledParagraph>Address: {address}</StyledParagraph>
          </Spacer>
          {isClosedTemporarily ? (
            <StyledMessage>Closed Temporarily</StyledMessage>
          ) : isOpenNow ? (
            <StyledTitleOpen>Open</StyledTitleOpen>
          ) : (
            <StyledTitleClosed>Closed ~ Opens Soon</StyledTitleClosed>
          )}
        </Card.Content>
      </Info>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Spacer position="top" size="medium">
        <RestaurantCardActions>
          <Button>Cancel</Button>
          <Button>Reserve</Button>
        </RestaurantCardActions>
      </Spacer>
    </RestaurantCard>
  );
});
