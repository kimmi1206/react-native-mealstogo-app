import styled from 'styled-components/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.quaternary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.secondary};
`;

export const RestaurantCardActions = styled(Card.Actions)`
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.monospace};
`;

export const RestaurantCardTitle = styled(Card.Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const StyledTitleOpen = styled(Title)`
  color: ${(props) => props.theme.colors.text.success};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const StyledTitleClosed = styled(Title)`
  color: ${(props) => props.theme.colors.text.disabled};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const StyledMessage = styled(Title)`
  color: ${(props) => props.theme.colors.text.error};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
