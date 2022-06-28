<<<<<<< HEAD
import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";

import { Favourite } from "../../../components/favourites/favourite.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
=======
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
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={2}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
<<<<<<< HEAD
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
=======
            <StyledParagraph>Rating: </StyledParagraph>
            {starsArray.map((star) => (
              <Ionicons
                key={id + star}
                name="star"
                size={32}
                color={star <= rating ? 'gold' : 'lightgray'}
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
<<<<<<< HEAD
=======

// const styles = StyleSheet.create({
//   card: { backgroundColor: 'white' },
//   cover: { padding: 20, backgroundColor: 'white' },
//   action: { justifyContent: 'center' },
//   title: { padding: 16 },
// });
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)
