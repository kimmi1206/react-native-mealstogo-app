import React, { useState, useCallback } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const DUMMY_DATA = [
  {
    name: 'Some Restaurant',
    icon: '',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
];

// SafeAreaView is Only for iOS, Statusbar spacing
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = useCallback((query) => setSearchQuery(query), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        {/* <Text>Search:</Text> */}
        <Searchbar
          style={styles.searchBox}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.listContainer}>
        <RestaurantInfoCard restaurant={DUMMY_DATA[0]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight, // statusbar spacing on android
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  searchContainer: {
    padding: 10,
    width: '100%',
  },
  searchBox: {
    fontWeight: 'normal',
  },
  listContainer: {
    padding: 10,
    width: '100%',
    // backgroundColor: '#fff',
  },
});
