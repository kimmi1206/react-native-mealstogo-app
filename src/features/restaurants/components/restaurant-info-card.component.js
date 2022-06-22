import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

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
    <Card elevation={5} style={styles.card}>
      <Card.Title
        title={name}
        subtitle={isOpenNow ? <Text>Is Open</Text> : <Text>Is Closed</Text>}
        left={LeftContent}
      />
      <Card.Content>
        <Title style={styles.title}>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Actions style={styles.action}>
        <Button>Cancel</Button>
        <Button>Reserve</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { padding: 20, backgroundColor: 'white' },
  action: { justifyContent: 'center' },
  title: { padding: 16 },
});
