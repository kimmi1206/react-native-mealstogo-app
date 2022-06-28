import React, { useContext, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';
import { generator } from '../../../utils/generator.id';

const RestaurantListContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  width: 100%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8 },
})``;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const renderItem = useCallback(
    ({ item }) => <RestaurantInfoCard restaurant={item} />,
    [],
  );

  return (
    <SafeAreaContainer>
      {isLoading && (
        <LoadingContainer>
          <LoadingIndicator size={50} animating={true} color="#6A1B9A" />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantListContainer>
        <RestaurantList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) =>
            `${item.placeId}-${item.name}-${generator.next().value}`
          }
        />
      </RestaurantListContainer>
    </SafeAreaContainer>
  );
};
