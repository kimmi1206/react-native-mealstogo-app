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

const RestaurantListContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  width: 100%;
`;

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
        />
      </RestaurantListContainer>
    </SafeAreaContainer>
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
