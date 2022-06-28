<<<<<<< HEAD
import { mocks, mockImages } from "./mock";
import camelize from "camelize";
=======
import camelize from 'camelize';
import { host, isMock } from '../../utils/env';
import { mocks } from './mock';
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
<<<<<<< HEAD
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

=======
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
