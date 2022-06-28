import React from 'react';
// import { Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Spacer } from '../../../components/spacer/spacer.component';

const LeftContent = () => (
  // <Avatar.Image size={24} source={require('../../../../assets/icon.png')} />
  <Ionicons name="restaurant" size={32} color="orange" />
);

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.quaternary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.secondary};
`;

const RestaurantCardActions = styled(Card.Actions)`
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.monospace};
`;

const RestaurantCardTitle = styled(Card.Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const StyledParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const StyledTitleOpen = styled(Title)`
  color: ${(props) => props.theme.colors.text.success};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const StyledTitleClosed = styled(Title)`
  color: ${(props) => props.theme.colors.text.disabled};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const StyledMessage = styled(Title)`
  color: ${(props) => props.theme.colors.text.error};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const { id, name, photos, address, isOpenNow, rating, isClosedTemporarily } =
    restaurant;

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
                key={id + star}
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
};

// const styles = StyleSheet.create({
//   card: { backgroundColor: 'white' },
//   cover: { padding: 20, backgroundColor: 'white' },
//   action: { justifyContent: 'center' },
//   title: { padding: 16 },
// });
