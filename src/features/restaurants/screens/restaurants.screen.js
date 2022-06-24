import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';

const DUMMY_DATA = [
  {
    name: 'Some Restaurant',
    icon: 'restaurant',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  },
];

// SafeAreaView is Only for iOS, Statusbar spacing
const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

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

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = useCallback((query) => setSearchQuery(query), []);

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
        <RestaurantInfoCard restaurant={DUMMY_DATA[0]} />
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
