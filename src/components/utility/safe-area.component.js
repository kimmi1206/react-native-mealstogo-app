import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

// SafeAreaView is Only for iOS, Statusbar spacing
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${`margin-top: ${StatusBar.currentHeight || 0}px`};
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;
