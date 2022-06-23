import React from 'react';
import { Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const RestaurantCard = styled(Card)`
  background-color: snow;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: ghostwhite;
`;

const RestaurantCardActions = styled(Card.Actions)`
  justify-content: center;
`;

const RestaurantCardTitle = styled(Card.Title)`
  padding: 16px;
`;

const StyledParagraph = styled(Paragraph)`
  color: darkblue;
  font-weight: bold;
`;

const StyledTitle = styled(Title)`
  color: red;
  font-weight: bolder;
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

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardTitle
        title={name}
        subtitle={isOpenNow ? <Text>Is Open</Text> : <Text>Is Closed</Text>}
        left={LeftContent}
      />
      <Card.Content>
        <StyledParagraph>Rating: {rating}</StyledParagraph>
        <StyledParagraph>Address: {address}</StyledParagraph>
        {isClosedTemporarily ? (
          <StyledTitle>Closed Temporarily</StyledTitle>
        ) : (
          <StyledParagraph>Visit us {icon}</StyledParagraph>
        )}
      </Card.Content>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardActions>
        <Button>Cancel</Button>
        <Button>Reserve</Button>
      </RestaurantCardActions>
    </RestaurantCard>
  );
};

// const styles = StyleSheet.create({
//   card: { backgroundColor: 'white' },
//   cover: { padding: 20, backgroundColor: 'white' },
//   action: { justifyContent: 'center' },
//   title: { padding: 16 },
// });
