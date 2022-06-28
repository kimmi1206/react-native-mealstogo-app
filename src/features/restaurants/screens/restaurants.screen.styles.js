import styled from 'styled-components/native';
import { View, FlatList } from 'react-native';
import { Searchbar, ActivityIndicator } from 'react-native-paper';

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  width: 100%;
`;

export const SearchBar = styled(Searchbar)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const RestaurantListContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  width: 100%;
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 8 },
})``;

export const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

// // Generates random hexadecimal identifier
// export const genRandomHex = (size) =>
//   [...Array(size)]
//     .map(() => Math.floor(Math.random() * 16).toString(16))
//     .join('');

// export const DUMMY_DATA = [
//   {
//     id: genRandomHex(20),
//     name: "Junior's Restaurant",
//     icon: 'restaurant',
//     photos: [
//       'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
//     ],
//     address: '1515 Broadway street',
//     isOpenNow: false,
//     rating: 3,
//     isClosedTemporarily: false,
//   },
//   {
//     id: genRandomHex(20),
//     name: 'Quality & Healthy Restaurant',
//     icon: 'restaurant',
//     photos: [
//       'https://www.foodiesfeed.com/wp-content/uploads/2019/04/girl-eating-vietnamese-food-with-chopsticks-1024x683.jpg',
//     ],
//     address: '99 W 58th Healthy St',
//     isOpenNow: true,
//     rating: 4,
//     isClosedTemporarily: false,
//   },
//   {
//     id: genRandomHex(20),
//     name: 'Veselka Scarpetta',
//     icon: 'restaurant',
//     photos: [
//       'https://www.foodiesfeed.com/wp-content/uploads/2018/08/eating-high-protein-brunch-with-poached-eggs-beans-and-bacon-1024x683.jpg',
//     ],
//     address: '88 Madison Ave',
//     isOpenNow: false,
//     rating: 2,
//     isClosedTemporarily: false,
//   },
//   {
//     id: genRandomHex(20),
//     name: 'Trinity Place',
//     icon: 'restaurant',
//     photos: [
//       'https://www.foodiesfeed.com/wp-content/uploads/2018/05/poached-eggs-with-spinach-on-a-brioche-1024x683.jpg',
//     ],
//     address: '105 Broadway St',
//     isOpenNow: true,
//     rating: 5,
//     isClosedTemporarily: false,
//   },
//   {
//     id: genRandomHex(20),
//     name: "George's Restaurant",
//     icon: 'restaurant',
//     photos: [
//       'https://www.foodiesfeed.com/wp-content/uploads/2018/08/eating-high-protein-brunch-with-poached-eggs-beans-and-bacon-1-1024x683.jpg',
//     ],
//     address: '89 Greenwich St',
//     isOpenNow: false,
//     rating: 3,
//     isClosedTemporarily: true,
//   },
//   {
//     id: genRandomHex(20),
//     name: 'Lafayette Grand Café and Bakery',
//     icon: 'restaurant',
//     photos: [
//       'https://www.foodiesfeed.com/wp-content/uploads/2019/01/colorful-fruit-platter-and-dark-chocolate-1024x683.jpg',
//     ],
//     address: '380 Lafayette St',
//     isOpenNow: true,
//     rating: 4,
//     isClosedTemporarily: false,
//   },
// ];
