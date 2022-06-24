import React from 'react';
// import { Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Spacer } from '../../../components/spacer/spacer.component';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.secondary};
`;

const RestaurantCardActions = styled(Card.Actions)`
  justify-content: center;
  /* font-family: ${(props) => props.theme.fonts.monospace}; */
`;

const RestaurantCardTitle = styled(Card.Title)`
  /* font-family: ${(props) => props.theme.fonts.heading}; */
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const StyledParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.colors.text.primary};
  /* font-family: ${(props) => props.theme.fonts.body}; */
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const StyledTitle = styled(Title)`
  color: ${(props) => props.theme.colors.text.error};
  /* font-family: ${(props) => props.theme.fonts.body}; */
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
  const {
    name,
    icon,
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
        <RestaurantCardTitle
          title={name}
          subtitle={
            isOpenNow && (
              <Ionicons key={name} name={icon} size={22} color="orange" />
            )
          }
          left={LeftContent}
        />
        <Card.Content>
          <Rating>
            <StyledParagraph>Rating: </StyledParagraph>
            {starsArray.map((star) => (
              <Ionicons
                key={star}
                name="star"
                size={32}
                color={star <= rating ? 'yellow' : 'lightgray'}
              />
            ))}
          </Rating>
          <Spacer position="bottom" size="medium">
            <StyledParagraph>Address: {address}</StyledParagraph>
          </Spacer>
          {isClosedTemporarily && <StyledTitle>Closed Temporarily</StyledTitle>}
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
