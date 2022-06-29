import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import styled from 'styled-components/native';

const PaymentsContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  width: 100%;
`;

export const PaymentsScreen = () => {
  return (
    <SafeAreaContainer>
      <PaymentsContainer>
        <Text>Payments</Text>
      </PaymentsContainer>
    </SafeAreaContainer>
  );
};
