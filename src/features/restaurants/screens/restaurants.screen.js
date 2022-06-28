<<<<<<< HEAD
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
=======
import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import styled from 'styled-components/native';

// Generates random hexadecimal identifier
const genRandomHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');

const DUMMY_DATA = [
  {
    id: genRandomHex(20),
    name: "Junior's Restaurant",
    icon: 'restaurant',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '1515 Broadway street',
    isOpenNow: false,
    rating: 3,
    isClosedTemporarily: false,
  },
  {
    id: genRandomHex(20),
    name: 'Quality & Healthy Restaurant',
    icon: 'restaurant',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/04/girl-eating-vietnamese-food-with-chopsticks-1024x683.jpg',
    ],
    address: '99 W 58th Healthy St',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    id: genRandomHex(20),
    name: 'Veselka Scarpetta',
    icon: 'restaurant',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2018/08/eating-high-protein-brunch-with-poached-eggs-beans-and-bacon-1024x683.jpg',
    ],
    address: '88 Madison Ave',
    isOpenNow: false,
    rating: 2,
    isClosedTemporarily: false,
  },
  {
    id: genRandomHex(20),
    name: 'Trinity Place',
    icon: 'restaurant',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2018/05/poached-eggs-with-spinach-on-a-brioche-1024x683.jpg',
    ],
    address: '105 Broadway St',
    isOpenNow: true,
    rating: 5,
    isClosedTemporarily: false,
  },
  {
    id: genRandomHex(20),
    name: "George's Restaurant",
    icon: 'restaurant',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2018/08/eating-high-protein-brunch-with-poached-eggs-beans-and-bacon-1-1024x683.jpg',
    ],
    address: '89 Greenwich St',
    isOpenNow: false,
    rating: 3,
    isClosedTemporarily: true,
  },
  {
    id: genRandomHex(20),
    name: 'Lafayette Grand Café and Bakery',
    icon: 'restaurant',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/01/colorful-fruit-platter-and-dark-chocolate-1024x683.jpg',
    ],
    address: '380 Lafayette St',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
];

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
`;

const SearchBar = styled(Searchbar)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)

import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { RestaurantList } from "../components/restaurant-list.styles";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
<<<<<<< HEAD
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
=======

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8 },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = useCallback((query) => setSearchQuery(query), []);

  const renderItem = ({ item }) => <RestaurantInfoCard restaurant={item} />;

  return (
    <SafeAreaContainer>
      <SearchContainer>
        <SearchBar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantList
          data={DUMMY_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)
        />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

// StyleSheet.create({
//   searchContainer: {
//     padding: 10,
//     width: '100%',
//   },
//   searchBox: {
//     fontWeight: 'normal',
//   },
//   listContainer: {
//     padding: 10,
//     width: '100%',
//   },
// });
